export const data: Record<string, DataPoint> = {
	'Starfell Valley': {
		max: (opts) => {
			if (opts.v1_6_goldenApple) {
				return 102.5;
			}
			return 102.1;
		},
		notes: {
			default: '초기 버전의 버그 및 수정으로 인해 몬드 지역의 수치는 오차가 있을 수 있습니다.',
			v1_6_goldenApple: '1.6 금사과 제도 이벤트 상자 +1개 (+0.5%) 반영'
		},
		region: 'Mondstadt',
		moraChanges: '--',
		chestChanges: '0.3%-0.4%'
	},
	'Galesong Hill': {
		max: 123.9,
		notes: { default: '초기 버전의 버그 및 수정으로 인해 몬드 지역의 수치는 오차가 있을 수 있습니다.' },
		region: 'Mondstadt',
		moraChanges: '--',
		chestChanges: '0.6%-0.7%'
	},
	'Windwail Highland': {
		max: 109.1,
		notes: {
			default: '초기 버전의 버그 및 수정으로 인해 몬드 지역의 수치는 오차가 있을 수 있습니다.'
		},
		region: 'Mondstadt',
		moraChanges: '--',
		chestChanges: '0.4%-0.5%'
	},
	'Brightcrown Mountains': {
		max: (opts) => {
			if (opts.v2_2_shadow) {
				return 109.0;
			}
			return 108.5;
		},
		notes: {
			default: '초기 버전의 버그 및 수정으로 인해 몬드 지역의 수치는 오차가 있을 수 있습니다.',
			v2_2_shadow: '2.2 고대의 그림자 이벤트 상자 +1개 (+0.5%) 반영'
		},
		region: 'Mondstadt',
		moraChanges: '--',
		chestChanges: '0.4%-0.5%'
	},
	'Bishui Plain': {
		max: (opts) => {
			if (opts.v1_3_laternRite) {
				return 106.0;
			}
			return 105.7;
		},
		notes: {
			default: '초기 버전의 버그 및 수정으로 인해 리월 지역의 수치는 오차가 있을 수 있습니다.',
			v1_3_laternRite: '1.3 해등절 이벤트 상자 +2개 (+0.5%) 반영'
		},
		region: 'Liyue',
		moraChanges: '0.2%-0.3%',
		chestChanges: '0.2%-0.3%'
	},
	Minlin: {
		max: (opts) => {
			if (opts.v1_3_laternRite) {
				return 110.1;
			}
			return 109.9;
		},
		notes: {
			default: '초기 버전의 버그 및 수정으로 인해 리월 지역의 수치는 오차가 있을 수 있습니다.',
			v1_3_laternRite: '1.3 해등절 이벤트 상자 +3개 (+0.3%) 반영'
		},
		region: 'Liyue',
		moraChanges: '0.1%-0.2%',
		chestChanges: '0.1%-0.2%'
	},
	'Sea of Clouds': {
		max: (opts) => {
			if (opts.v1_3_laternRite) {
				return 109.8;
			}
			return 108;
		},
		notes: {
			default: '초기 버전의 버그 및 수정으로 인해 리월 지역의 수치는 오차가 있을 수 있습니다.',
			v1_3_laternRite: '1.3 해등절 이벤트 상자 +2개 (+1.8%) 반영'
		},
		region: 'Liyue',
		moraChanges: '0.3%-0.4%',
		chestChanges: '0.3%-0.4%'
	},
	Lisha: {
		max: (opts) => {
			if (opts.v1_3_laternRite && opts.v2_2_shadow) {
				return 110.2;
			}
			if (opts.v2_2_shadow) {
				return 109.7;
			}
			if (opts.v1_3_laternRite) {
				return 109.7;
			}
			return 109.1;
		},
		notes: {
			default: '초기 버전의 버그 및 수정으로 인해 리월 지역의 수치는 오차가 있을 수 있습니다.',
			v1_3_laternRite: '1.3 해등절 이벤트 상자 +1개 (+0.6%) 반영',
			v2_2_shadow: '2.2 고대의 그림자 이벤트 상자 +1개 (+0.6%) 반영'
		},
		region: 'Liyue',
		moraChanges: '--',
		chestChanges: '0.5%-0.6%'
	},
	'Qiongji Estuary': {
		max: (opts) => {
			if (opts.v1_3_laternRite && opts.v2_2_shadow) {
				return 109;
			}
			if (opts.v2_2_shadow) {
				return 107.6;
			}
			if (opts.v1_3_laternRite) {
				return 108.7;
			}
			return 107.3;
		},
		notes: {
			default: '초기 버전의 버그 및 수정으로 인해 리월 지역의 수치는 오차가 있을 수 있습니다.',
			v1_3_laternRite: '1.3 해등절 이벤트 상자 +4개 (+1.4%) 반영',
			v2_2_shadow: '2.2 고대의 그림자 이벤트 상자 +1개 (+0.3%) 반영'
		},
		region: 'Liyue',
		moraChanges: '0.3%-0.4%',
		chestChanges: '0.3%-0.4%'
	},
	'Narukami Island': {
		max: 111.7,
		notes: {
			v2_0_lostRiches: '2.0 보물 찾기 이벤트로 인해 탐사도가 더 높게 나타날 수 있습니다.'
		},
		region: 'Inazuma',
		moraChanges: '0.3%-0.4%',
		chestChanges: '0.3%-0.4%'
	},
	Kannazuka: {
		max: (opts) => {
			if (opts.v2_2_shadow) {
				return 115.7;
			}
			return 115.3;
		},
		notes: {
			v2_2_shadow: '2.2 고대의 그림자 이벤트 상자 +1개 (+0.5%) 반영',
			v2_0_lostRiches: '2.0 보물 찾기 이벤트로 인해 탐사도가 더 높게 나타날 수 있습니다.'
		},
		region: 'Inazuma',
		moraChanges: '0.4%-0.5%',
		chestChanges: '0.4%-0.5%'
	},
	'Yashiori Island': {
		max: 118.5,
		notes: {
			v2_0_lostRiches: '2.0 보물 찾기 이벤트로 인해 탐사도가 더 높게 나타날 수 있습니다.'
		},
		region: 'Inazuma',
		moraChanges: '0.5%-0.6%',
		chestChanges: '0.5%-0.6%'
	},
	'Seirai Island': {
		max: 110,
		region: 'Inazuma',
		moraChanges: '0.3%-0.4%',
		chestChanges: '0.3%-0.4%'
	},
	'Watatsumi Island': {
		max: 109.6,
		notes: { default: '스이게츠 연못에 놓치기 쉬운 나무 상자 4개가 존재하며, 각각 0.5%의 수치를 가집니다.' },
		region: 'Inazuma',
		moraChanges: '0.5%-0.6%',
		chestChanges: '0.5%-0.6%'
	},
	'Tsurumi Island': {
		max: 110,
		region: 'Inazuma',
		moraChanges: '0.3%-0.4%',
		chestChanges: '0.3%-0.4%'
	},
	'Lokapala Jungle': {
		max: 120.4,
		region: 'Sumeru',
		moraChanges: '0.2%-0.3%',
		chestChanges: '0.6%-0.7%'
	},
	'Ardravi Valley': {
		max: 112.5,
		region: 'Sumeru',
		moraChanges: '0.1%-0.2%',
		chestChanges: '0.4%-0.5%'
	},
	'Vissudha Field': {
		max: 114.5,
		region: 'Sumeru',
		moraChanges: '0.2%-0.3%',
		chestChanges: '0.7%-0.8%'
	},
	'Ashavan Realm': {
		max: 115.4,
		region: 'Sumeru',
		moraChanges: '0.1%-0.2%',
		chestChanges: '0.3%-0.4%'
	},
	'Avidya Forest': {
		max: 116.4,
		region: 'Sumeru',
		moraChanges: '0.2%-0.3%',
		chestChanges: '0.6%-0.7%'
	},
	'Lost Nursery': {
		max: 108,
		region: 'Sumeru',
		moraChanges: '1.6%-1.7%',
		chestChanges: '4.0%-4.1%'
	},
	Vanarana: { max: 113.8, region: 'Sumeru', moraChanges: '1.2%-1.3%', chestChanges: '3.0%-3.1%' },
	'Land of Lower Setekh': {
		max: 114.5,
		region: 'Sumeru',
		moraChanges: '0.1%-0.2%',
		chestChanges: '0.4%-0.5%'
	},
	'Hypostyle Desert': {
		max: 119.1,
		region: 'Sumeru',
		moraChanges: '0.1%-0.2%',
		chestChanges: '0.3%-0.4%'
	},
	'Land of Upper Setekh': {
		max: 112.8,
		region: 'Sumeru',
		moraChanges: '0.3%-0.4%',
		chestChanges: '0.8%-0.9%'
	},
	'Desert of Hadramaveth': {
		max: 113.4,
		region: 'Sumeru',
		moraChanges: '<0.1%',
		chestChanges: '0.1%-0.2%'
	},
	'Gavireh Lajavard': {
		max: 118.8,
		region: 'Sumeru',
		moraChanges: '0.1%-0.2%',
		chestChanges: '0.4%-0.5%'
	},
	'Realm of Farakhkert': {
		max: 117.8,
		region: 'Sumeru',
		moraChanges: '0.1%-0.2%',
		chestChanges: '0.3%-0.4%'
	},
	'Belleau Region': {
		max: 112.4,
		region: 'Fontaine',
		moraChanges: '0.4%-0.5%',
		chestChanges: '1.0%-1.1%'
	},
	'Beryl Region': {
		max: 110.6,
		region: 'Fontaine',
		moraChanges: '0.1%-0.2%',
		chestChanges: '0.3%-0.4%'
	},
	'Court of Fontaine': {
		max: 110.2,
		region: 'Fontaine',
		moraChanges: '<0.1%',
		chestChanges: '0.2%-0.3%'
	},
	'Liffey Region': {
		max: 112.1,
		region: 'Fontaine',
		moraChanges: '0.2%-0.3%',
		chestChanges: '0.5%-0.6%'
	},
	'Fontaine Research Institute of Kinetic Energy Engineering Region': {
		max: 111.8,
		region: 'Fontaine',
		moraChanges: '0.1%-0.2%',
		chestChanges: '0.3%-0.4%'
	},
	'Erinnyes Forest': {
		max: 106.9,
		region: 'Fontaine',
		moraChanges: '0.1%-0.2%',
		chestChanges: '0.3%-0.4%'
	},
	'Morte Region': {
		max: 114.1,
		notes: {
			default:
				'2023년 12월 탐사도 계산 공식이 수정되었습니다. 최대 탐사도는 114.6%까지 도달 가능합니다.'
		},
		region: 'Fontaine',
		moraChanges: '0.1%-0.2%',
		chestChanges: '0.4%-0.5%'
	},
	'Nostoi Region': {
		max: 109.9,
		region: 'Fontaine',
		moraChanges: '0.4%-0.5%',
		chestChanges: '1.2%-1.3%'
	},
	'Tequemecan Valley': {
		max: 109.8,
		region: 'Natlan',
		moraChanges: '0.1%-0.2%',
		chestChanges: '0.3%-0.4%'
	},
	'Basin of Unnumbered Flames': {
		max: 113,
		region: 'Natlan',
		moraChanges: '0.2%-0.3%',
		chestChanges: '0.5%-0.6%'
	},
	'Toyac Springs': {
		max: 112.9,
		region: 'Natlan',
		moraChanges: '0.1%-0.2%',
		chestChanges: '0.4%-0.5%'
	},
	'Coatepec Mountain': {
		max: 111.4,
		region: 'Natlan',
		moraChanges: '0.1%-0.2%',
		chestChanges: '0.3%-0.4%'
	},
	'Tezcatepetonco Range': {
		max: 111.4,
		region: 'Natlan',
		moraChanges: '0.2%-0.3%',
		chestChanges: '0.5%-0.6%'
	},
	Ochkanatlan: {
		max: 109.7,
		region: 'Natlan',
		moraChanges: '0.1%-0.2%',
		chestChanges: '0.3%-0.4%'
	},
	'Quahuacan Cliff': {
		max: 108.5,
		region: 'Natlan',
		moraChanges: '0.3%-0.4%',
		chestChanges: '0.9%-1.0%'
	},
	Atocpan: {
		max: 110,
		region: 'Natlan',
		moraChanges: '0.1%-0.2%',
		chestChanges: '0.3%-0.4%'
	},
	'Paha Isle': {
		max: 110.2,
		notes: { default: '파하섬 탐사도 데이터 반영' },
		region: 'Nod-Krai',
		moraChanges: '0.1%-0.2%',
		chestChanges: '0.3%-0.4%'
	},
	'Lempo Isle': {
		max: 109.4,
		notes: { default: '렘포섬 탐사도 데이터 반영' },
		region: 'Nod-Krai',
		moraChanges: '0.0%-0.1%',
		chestChanges: '0.2%-0.3%'
	},
	'Hiisi Island': {
		max: 106.3,
		notes: { default: '히이시섬 탐사도 데이터 반영' },
		region: 'Nod-Krai',
		moraChanges: '0.1%-0.2%',
		chestChanges: '0.3%-0.4%'
	},
	'Voidsea Outlook': {
		max: 110.3,
		notes: { default: '공허해견문대 탐사도 데이터 반영' },
		region: 'Nod-Krai',
		moraChanges: '0.2%-0.3%',
		chestChanges: '0.4%-0.5%'
	},
	'Wavechaser Plain': {
		max: 108.9,
		notes: { default: '파도사냥꾼 평원 탐사도 데이터 반영' },
		region: 'Nod-Krai',
		moraChanges: '0.1%-0.2%',
		chestChanges: '0.3%-0.4%'
	},
	'Ashveil Peak': {
		max: 113.4,
		notes: { default: '잿빛베일 봉우리 탐사도 데이터 반영' },
		region: 'Nod-Krai',
		moraChanges: '0.2%-0.3%',
		chestChanges: '0.6%-0.7%'
	},
	'Dunanna Pit': {
		max: 107.1,
		notes: { default: '두난나 구덩이 탐사도 데이터 반영' },
		region: 'Nod-Krai',
		moraChanges: '-',
		chestChanges: '-'
	},
	'Lunar Highlands': {
		max: 108.4,
		notes: { default: '달빛 고원 탐사도 데이터 반영' },
		region: 'Nod-Krai',
		moraChanges: '-',
		chestChanges: '-'
	},
	'Moontide Sea': {
		max: 118.3,
		notes: { default: '문타이드해 탐사도 데이터 반영' },
		region: 'Nod-Krai',
		moraChanges: '-',
		chestChanges: '-'
	},
	'Dark Side of the Moon': {
		max: 109.5,
		notes: { default: '달의 어두운 면 탐사도 데이터 반영' },
		region: 'Nod-Krai',
		moraChanges: '-',
		chestChanges: '-'
	},
	'Volkodlak Tundra': {
		max: 108.9,
		notes: { default: '볼코들라크 툰드라 탐사도 데이터 반영' },
		region: 'Snezhnaya',
		moraChanges: '-',
		chestChanges: '-'
	},
	'Everfrozen Earth': {
		max: 108.1,
		notes: { default: '영원한 동토 탐사도 데이터 반영' },
		region: 'Snezhnaya',
		moraChanges: '-',
		chestChanges: '-'
	},
	'Fellfrost Peak': {
		max: 109.4,
		notes: { default: '지옥서리 봉우리 탐사도 데이터 반영' },
		region: 'Snezhnaya',
		moraChanges: '-',
		chestChanges: '-'
	},
	'Flamefeather Valley': {
		max: 110.6,
		notes: { default: '화염깃털 골짜기 탐사도 데이터 반영' },
		region: 'Snezhnaya',
		moraChanges: '-',
		chestChanges: '-'
	},
	'White Birch Snowgrave': {
		max: 109.3,
		notes: { default: '자작나무 눈무덤 탐사도 데이터 반영' },
		region: 'Snezhnaya',
		moraChanges: '-',
		chestChanges: '-'
	}
};

export function getDataPoint(v: dataSource, opts: Options) {
	if (typeof v == 'function') {
		return v(opts);
	}

	return v;
}
