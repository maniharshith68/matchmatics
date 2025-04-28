require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
app.use(cors());
app.use(express.json());

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

const tableMap = {
    cricket: 'matches',
    nba: 'game',
    fifa: 'player_appearances'
};

const optionsCols = {
    cricket: {
        dataTypes: 'series_name',
        timeRanges: 'match_date',
        regions: 'match_venue_country',
        metrics: 'match_format',
        aggregations: 'match_winner'
    },
    nba: {
        dataTypes: 'season_type',
        timeRanges: 'game_date',
        regions: 'team_name_home',
        metrics: 'wl_home',
        aggregations: 'matchup_home'
    },
    fifa: {
        dataTypes: 'tournament_name',
        timeRanges: 'match_date',
        regions: 'group_name',
        metrics: 'position_name',
        aggregations: 'starter'
    }
};
const formFieldMap = {
    seriesName: 'dataTypes',
    matchDate: 'timeRanges',
    homeTeam: 'regions',
    matchFormat: 'metrics',
    matchWinner: 'aggregations',

    tournament_name: 'dataTypes',
    match_date: 'timeRanges',
    group_name: 'regions',
    position_name: 'metrics',
    starter: 'aggregations',

    season_type: 'dataTypes',
    game_date: 'timeRanges',
    team_name_home: 'regions',
    wl_home: 'metrics',
    matchup_home: 'aggregations'
};

app.get('/api/:sport/options', async (req, res) => {
    const sport = req.params.sport.toLowerCase();
    const table = tableMap[sport];
    const cols = optionsCols[sport];

    if (!table || !cols) {
        return res.status(404).json({ error: `Unknown sport '${sport}'` });
    }
    try {

        const promises = Object.entries(cols).map(async ([key, column]) => {
            const { rows } = await pool.query(
                `SELECT DISTINCT ${column} AS value FROM ${table} ORDER BY value`
            );
            return [key, rows.map(r => r.value)];
        });
        const entries = await Promise.all(promises);
        res.json(Object.fromEntries(entries));
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Database error' });
    }
});


app.get('/api/:sport', async (req, res) => {
    const sport = req.params.sport.toLowerCase();
    const table = tableMap[sport];
    if (!table) {
        return res.status(404).json({ error: `Unknown sport '${sport}'` });
    }
    try {
        const { rows } = await pool.query(
            `SELECT * FROM ${table} LIMIT $1`,
            [10000]
        );
        res.json(rows);
    } catch (err) {
        console.error(`Error querying ${table}:`, err);
        res.status(500).json({ error: 'Database error' });
    }
});

app.post('/api/:sport/query', async (req, res) => {
    const sport = req.params.sport.toLowerCase();
    const table = tableMap[sport];
    const cols = optionsCols[sport];
    if (!table || !cols) {
        return res.status(404).json({ error: `Unknown sport '${sport}'` });
    }
    const filters = req.body;
    const whereClauses = [];
    const values = [];

    for (const [field, optKey] of Object.entries(formFieldMap)) {
        const val = filters[field]
        if (!val) continue

        const col = cols[optKey]

        if (optKey === 'timeRanges') {
            const dateOnly = val.split('T')[0]
            values.push(dateOnly)
            whereClauses.push(`DATE(${col}) = $${values.length}`)
        } else {
            values.push(val)
            whereClauses.push(`${col} = $${values.length}`)
        }
    }

    const sql =
        `SELECT * FROM ${table}` +
        (whereClauses.length ? ` WHERE ${whereClauses.join(' AND ')}` : '') +
        ` LIMIT 10000`;

    try {
        const result = await pool.query(sql, values);
        if (result.rows.length === 0) {
            return res.json({ rows: [], message: 'No results found' });
        }
        res.json({ rows: result.rows });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Database error' });
    }
});



const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`API listening on http://localhost:${port}`);
});
