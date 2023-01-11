import { browser } from '$app/environment';

async function importMasonry(node) {
	const { default: Macy } = await import('macy');
	Macy({
		container: node,
		trueOrder: true,
		margin: 4,
		columns: 3,
		breakAt: {
			580: {
				columns: 2,
			},
		},
	});
}

export function masonry(node) {
	if (browser) {
		importMasonry(node);
	}
}