export const getFormOptions = () => {
  return {
    dataTypes: [
      'cricket_matches',
      'fifa_matches',
      'nba_games',
      'user_activity'
    ],
    timeRanges: [
      'last_24_hours',
      'last_7_days',
      'last_30_days',
      'last_quarter',
      'last_year'
    ],
    regions: [
      'north_america',
      'europe',
      'asia_pacific',
      'south_america',
      'africa'
    ],
    metrics: [
      'total_matches',
      'total_goals',
      'total_points',
      'average_score',
      'win_rate'
    ],
    aggregations: [
      'sum',
      'average',
      'count',
      'min',
      'max'
    ],
  };
};