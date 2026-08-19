export const data: Record<string, DataPoint> = {
	'별이 떨어지는 산골짜기': {
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
		region: '몬드',
		moraChanges: '--',
		chestChanges: '0.3%-0.4%'
	},
	'울부짖는 언덕': {
		max: 123.9,
		notes: { default: '초기 버전의 버그 및 수정으로 인해 몬드 지역의 수치는 오차가 있을 수 있습니다.' },
		region: '몬드',
		moraChanges: '--',
		chestChanges: '0.6%-0.7%'
	},
	'창풍 고지대': {
		max: 109.1,
		notes: {
			default: '초기 버전의 버그 및 수정으로 인해 몬드 지역의 수치는 오차가 있을 수 있습니다.'
		},
		region: '몬드',
		moraChanges: '--',
		chestChanges: '0.4%-0.5%'
	},
	'크라운 마운틴': {
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
		region: '몬드',
		moraChanges: '--',
		chestChanges: '0.4%-0.5%'
	},
	'벽수원': {
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
		region: '리월',
		moraChanges: '0.2%-0.3%',
		chestChanges: '0.2%-0.3%'
	},
	'민림': {
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
		region: '리월',
		moraChanges: '0.1%-0.2%',
		chestChanges: '0.1%-0.2%'
	},
	'운래해': {
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
		region: '리월',
		moraChanges: '0.3%-0.4%',
		chestChanges: '0.3%-0.4%'
	},
	'리사교': {
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
		region: '리월',
		moraChanges: '--',
		chestChanges: '0.5%-0.6%'
	},
	'경기 들판': {
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
		region: '리월',
		moraChanges: '0.3%-0.4%',
		chestChanges: '0.3%-0.4%'
	},
	'나루카미섬': {
		max: 111.7,
		notes: {
			v2_0_lostRiches: '2.0 잃어버린 보물 이벤트로 인해 탐사도가 더 높게 나타날 수 있습니다.'
		},
		region: '이나즈마',
		moraChanges: '0.3%-0.4%',
		chestChanges: '0.3%-0.4%'
	},
	'칸나즈카': {
		max: (opts) => {
			if (opts.v2_2_shadow) {
				return 115.7;
			}
			return 115.3;
		},
		notes: {
			v2_2_shadow: '2.2 고대의 그림자 이벤트 상자 +1개 (+0.5%) 반영',
			v2_0_lostRiches: '2.0 잃어버린 보물 이벤트로 인해 탐사도가 더 높게 나타날 수 있습니다.'
		},
		region: '이나즈마',
		moraChanges: '0.4%-0.5%',
		chestChanges: '0.4%-0.5%'
	},
	'야시오리섬': {
		max: 118.5,
		notes: {
			v2_0_lostRiches: '2.0 잃어버린 보물 이벤트로 인해 탐사도가 더 높게 나타날 수 있습니다.'
		},
		region: '이나즈마',
		moraChanges: '0.5%-0.6%',
		chestChanges: '0.5%-0.6%'
	},
	'세이라이섬': {
		max: 110,
		region: '이나즈마',
		moraChanges: '0.3%-0.4%',
		chestChanges: '0.3%-0.4%'
	},
	'와타츠미섬': {
		max: 109.6,
		notes: { default: '스이게츠 연못에 놓치기 쉬운 나무 상자 4개가 존재하며, 각각 0.5%의 수치를 가집니다.' },
		region: '이나즈마',
		moraChanges: '0.5%-0.6%',
		chestChanges: '0.5%-0.6%'
	},
	'츠루미': {
		max: 110,
		region: '이나즈마',
		moraChanges: '0.3%-0.4%',
		chestChanges: '0.3%-0.4%'
	},
	'로카팔라 숲': {
		max: 120.4,
		region: '수메르',
		moraChanges: '0.2%-0.3%',
		chestChanges: '0.6%-0.7%'
	},
	'아르드라비 골짜기': {
		max: 112.5,
		region: '수메르',
		moraChanges: '0.1%-0.2%',
		chestChanges: '0.4%-0.5%'
	},
	'비슈다 초원': {
		max: 114.5,
		region: '수메르',
		moraChanges: '0.2%-0.3%',
		chestChanges: '0.7%-0.8%'
	},
	'아샤반의 땅': {
		max: 115.4,
		region: '수메르',
		moraChanges: '0.1%-0.2%',
		chestChanges: '0.3%-0.4%'
	},
	'아비디야 숲': {
		max: 116.4,
		region: '수메르',
		moraChanges: '0.2%-0.3%',
		chestChanges: '0.6%-0.7%'
	},
	'잃어버린 모밭': {
		max: 108,
		region: '수메르',
		moraChanges: '1.6%-1.7%',
		chestChanges: '4.0%-4.1%'
	},
	'바나라나': { max: 113.8, region: '수메르', moraChanges: '1.2%-1.3%', chestChanges: '3.0%-3.1%' },
	'하바람 침식지': {
		max: 114.5,
		region: '수메르',
		moraChanges: '0.1%-0.2%',
		chestChanges: '0.4%-0.5%'
	},
	'열주 모래벌판': {
		max: 119.1,
		region: '수메르',
		moraChanges: '0.1%-0.2%',
		chestChanges: '0.3%-0.4%'
	},
	'상세텍 골짜기': {
		max: 112.8,
		region: '수메르',
		moraChanges: '0.3%-0.4%',
		chestChanges: '0.8%-0.9%'
	},
	'하드라마베스 사막': {
		max: 113.4,
		region: '수메르',
		moraChanges: '<0.1%',
		chestChanges: '0.1%-0.2%'
	},
	'라자바드 황야': {
		max: 118.8,
		region: '수메르',
		moraChanges: '0.1%-0.2%',
		chestChanges: '0.4%-0.5%'
	},
	'파라컬트': {
		max: 117.8,
		region: '수메르',
		moraChanges: '0.1%-0.2%',
		chestChanges: '0.3%-0.4%'
	},
	'흰 이슬 구역': {
		max: 112.4,
		region: '폰타인',
		moraChanges: '0.4%-0.5%',
		chestChanges: '1.0%-1.1%'
	},
	'푸른 수정 구역': {
		max: 110.6,
		region: '폰타인',
		moraChanges: '0.1%-0.2%',
		chestChanges: '0.3%-0.4%'
	},
	'폰타인성 구역': {
		max: 110.2,
		region: '폰타인',
		moraChanges: '<0.1%',
		chestChanges: '0.2%-0.3%'
	},
	'리피 구역': {
		max: 112.1,
		region: '폰타인',
		moraChanges: '0.2%-0.3%',
		chestChanges: '0.5%-0.6%'
	},
	'폰타인 운동에너지 공학 연구원 구역': {
		max: 111.8,
		region: '폰타인',
		moraChanges: '0.1%-0.2%',
		chestChanges: '0.3%-0.4%'
	},
	'에리니에스 숲 구역': {
		max: 106.9,
		region: '폰타인',
		moraChanges: '0.1%-0.2%',
		chestChanges: '0.3%-0.4%'
	},
	'모르트 구역': {
		max: 114.1,
		notes: {
			default:
				'2023년 12월 탐사도 계산 공식이 수정되었습니다. 최대 탐사도는 114.6%까지 도달 가능합니다.'
		},
		region: '폰타인',
		moraChanges: '0.1%-0.2%',
		chestChanges: '0.4%-0.5%'
	},
	'노스토이 구역': {
		max: 109.9,
		region: '폰타인',
		moraChanges: '0.4%-0.5%',
		chestChanges: '1.2%-1.3%'
	},
	'굳센 바위 협곡': {
		max: 109.8,
		region: '나타',
		moraChanges: '0.1%-0.2%',
		chestChanges: '0.3%-0.4%'
	},
	'불들의 잔': {
		max: 113,
		region: '나타',
		moraChanges: '0.2%-0.3%',
		chestChanges: '0.5%-0.6%'
	},
	'샘솟는 땅': {
		max: 112.9,
		region: '나타',
		moraChanges: '0.1%-0.2%',
		chestChanges: '0.4%-0.5%'
	},
	'웅크린 석산': {
		max: 111.4,
		region: '나타',
		moraChanges: '0.1%-0.2%',
		chestChanges: '0.3%-0.4%'
	},
	'거울벽산': {
		max: 111.4,
		region: '나타',
		moraChanges: '0.2%-0.3%',
		chestChanges: '0.5%-0.6%'
	},
	'오치카나타': {
		max: 109.7,
		region: '나타',
		moraChanges: '0.1%-0.2%',
		chestChanges: '0.3%-0.4%'
	},
	'깃가지 절벽': {
		max: 108.5,
		region: '나타',
		moraChanges: '0.3%-0.4%',
		chestChanges: '0.9%-1.0%'
	},
	'풍요의 들판': {
		max: 110,
		region: '나타',
		moraChanges: '0.1%-0.2%',
		chestChanges: '0.3%-0.4%'
	},
	'파하섬': {
		max: 110.2,
		region: '노드크라이',
		moraChanges: '0.1%-0.2%',
		chestChanges: '0.3%-0.4%'
	},
	'렘포섬': {
		max: 109.4,
		region: '노드크라이',
		moraChanges: '0.0%-0.1%',
		chestChanges: '0.2%-0.3%'
	},
	'히시섬': {
		max: 106.3,
		region: '노드크라이',
		moraChanges: '0.1%-0.2%',
		chestChanges: '0.3%-0.4%'
	},
	'허무 해안': {
		max: 110.3,
		region: '노드크라이',
		moraChanges: '0.2%-0.3%',
		chestChanges: '0.4%-0.5%'
	},
	'파도 들판': {
		max: 108.9,
		region: '노드크라이',
		moraChanges: '0.1%-0.2%',
		chestChanges: '0.3%-0.4%'
	},
	'안개산': {
		max: 113.4,
		region: '노드크라이',
		moraChanges: '0.2%-0.3%',
		chestChanges: '0.6%-0.7%'
	},
	'두난나 공동': {
		max: 107.1,
		region: '노드크라이',
		moraChanges: '-',
		chestChanges: '-'
	},
	'달 고지': {
		max: 108.4,
		region: '노드크라이',
		moraChanges: '-',
		chestChanges: '-'
	},
	'달 바다': {
		max: 118.3,
		region: '노드크라이',
		moraChanges: '-',
		chestChanges: '-'
	},
	'달 뒷면': {
		max: 109.5,
		region: '노드크라이',
		moraChanges: '-',
		chestChanges: '-'
	},
	'고대 야수 벌판': {
		max: 108.9,
		region: '스네즈나야',
		moraChanges: '-',
		chestChanges: '-'
	},
	'영구 동토': {
		max: 108.1,
		region: '스네즈나야',
		moraChanges: '-',
		chestChanges: '-'
	},
	'서리 마루': {
		max: 109.4,
		region: '스네즈나야',
		moraChanges: '-',
		chestChanges: '-'
	},
	'화염깃 골짜기': {
		max: 110.6,
		region: '스네즈나야',
		moraChanges: '-',
		chestChanges: '-'
	},
	'자작나무 눈무덤': {
		max: 109.3,
		region: '스네즈나야',
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
