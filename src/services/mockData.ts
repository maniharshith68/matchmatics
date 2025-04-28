export const fetchMockData = async (): Promise<any> => {
	await new Promise(resolve => setTimeout(resolve, 800));
	return {
		userStats: {

		},
		revenue: {

		},
		conversionRate: {

		},
		activeSessions: {

		},

		bowlingMetrics: {
			labels: [
				'Maidens',
				'Wickets',
				'Dots',
				'Fours',
				'Sixes',
				'Wides',
				'No Balls'
			],
			datasets: [
				{
					label: 'Bhuvneshwar Kumar',
					data: [5, 10, 256, 18, 7, 11, 2],
					borderColor: 'rgba(189, 255, 246, 0.73)',
					backgroundColor: 'rgba(189, 255, 246, 0.73)'
				},
				{
					label: 'Jasprit Bumrah',
					data: [2, 19, 297, 21, 4, 9, 5],
					borderColor: 'rgba(249, 255, 166, 1)',
					backgroundColor: 'rgba(249, 255, 166, 1)'
				},

			]
		},

		runsteam: {
			labels: ['India', 'Australia', 'England'],
			datasets: [{
				data: [221904, 214539, 163440],
				backgroundColor: ['#389df9', '#0bc9b1', '#0a3d62'],
				borderColor: ['#1878c2', '#099b90', '#082b4f'],
				borderWidth: 1,
			}]
		},
		performanceData: {
			labels: [
				'SR Tendulkar',
				'RT Ponting',
				'R Dravid',
				'M Azharuddin',
				'S Ganguly',
				'MS Dhoni',
				'SR Waugh',
				'V Kohli',
				'AC Gilchrist',
				'Yuvraj Singh',
				'RG Sharma',
				'AR Border',
				'ME Waugh',
				'V Sehwag'
			],
			datasets: [{
				label: 'Matches',
				data: [452, 364, 314, 308, 297, 294, 288, 285, 278, 275, 260, 252, 236, 235],
				backgroundColor: [
					'#389df9',
					'#0bc9b1',
					'#389df9',
					'#389df9',
					'#389df9',
					'#389df9',
					'#0bc9b1',
					'#389df9',
					'#0bc9b1',
					'#389df9',
					'#389df9',
					'#0bc9b1',
					'#0bc9b1',
					'#389df9',
				],
				borderColor: [
					'#1878c2',
					'#099b90',
					'#1878c2',
					'#1878c2',
					'#1878c2',
					'#1878c2',
					'#099b90',
					'#1878c2',
					'#099b90',
					'#1878c2',
					'#1878c2',
					'#099b90',
					'#099b90',
					'#1878c2',
				],
				borderWidth: 1
			}]
		},

		nbaPerformanceData: {
			labels: [
				'Kareem A. Jabbar',
				'LeBron James',
				'Karl Malone',
				'Wilt Chamberlain',
				'Michael Jordan',
				'Kobe Bryant',
				"Shaquille O'Neal",
				"Dirk Nowitzki",
				'Elvin Hayes',
				'Hakeem Olajuwon',
			],
			datasets: [{
				label: 'Most Baskets',
				data: [
					15837,
					15488,
					13523,
					12681,
					12192,
					11719,
					11330,
					11169,
					10976,
					10749,
				],
				backgroundColor: '#8a2be2',
				borderColor: '#5a189a',
				borderWidth: 1
			}]
		},
		top3nba: {
			labels: ["Stephen Curry", "James Harden", "Ray Allen", "Damian Lillard", "Klay Thompson"],
			datasets: [{
				data: [4058, 3175, 2973, 2804, 2662],
				backgroundColor: ['#1e90ff', '#00bcd4', '#003f5c', '#2f4b7c', '#0bc9b1'],
				borderColor: ['#1864ab', '#0097a7', '#00243a', '#1d3055', '#087d75'],
				borderWidth: 1,
			}]

		},
		nbacompare: {
			labels: [
				'Games',
				'Points',
				'Rebounds',
				'Assists',
				'Steals',
				'Blocks',
				'Turnovers'
			],
			datasets: [
				{
					label: 'Michael Jordan',
					data: [1072, 32292, 6672, 5633, 2514, 893, 2924],
					borderColor: '#CE1141',
					backgroundColor: '#CE1141'
				},
				{
					label: 'LeBron James',
					data: [1562, 42184, 11731, 11584, 2345, 1150, 5471],
					borderColor: '#552583',
					backgroundColor: '#552583'
				},

			]
		},

		mostwins: {
			labels: [
				'Brazil',
				'Germany',
				'Argentina',
				'Italy',
				'France',
				'England',
				'Spain',
				'Netherlands',
				'Uruguay',
				'Sweden',
			],
			datasets: [{
				label: 'Most Matches Won ',
				data: [
					76,
					68,
					49,
					45,
					41,
					32,
					31,
					30,
					24,
					21,
				],
				backgroundColor: [
					'#00f0ff',
					'#1e90ff',
					'#00f0ff',
					'#1e90ff',
					'#00f0ff',
					'#1e90ff',
					'#00f0ff',
					'#1e90ff',
					'#00f0ff',
					'#1e90ff',
				],
				borderColor: [
					'#00c2cc',
					'#1864ab',
					'#00c2cc',
					'#1864ab',
					'#00c2cc',
					'#1864ab',
					'#00c2cc',
					'#1864ab',
					'#00c2cc',
					'#1864ab',
				],
				borderWidth: 1
			}]
		},
		mostcups: {
			labels: ["Brazil", "Germany", "Argentina", "France"],
			datasets: [{
				data: [5, 4, 3, 2],
				backgroundColor: ['#1e90ff', '#00bcd4', '#003f5c', '#2f4b7c'],
				borderColor: ['#1864ab', '#0097a7', '#00243a', '#1d3055'],
				borderWidth: 1,
			}]
		},
		fifacompare: {
			labels: [
				'Appearances',
				'Goals',
				'Assists',
				'Yellow Cards',
				'Red Cards',
				'Penalties Scored',
				'Hat-tricks'
			],
			datasets: [
				{
					label: 'Cristiano Ronaldo',
					data: [895, 819, 231, 110, 11, 143, 57],
					borderColor: '#CE1126',
					backgroundColor: '#CE1126'
				},
				{
					label: 'Lionel Messi',
					data: [807, 805, 340, 80, 4, 117, 54],
					borderColor: '#74ACDF',
					backgroundColor: '#74ACDF'
				}
			]
		},









	};
};