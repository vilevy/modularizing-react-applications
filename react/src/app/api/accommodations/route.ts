export async function GET() {
	const data = [
		{
			id: 1,
			name: 'Copacabana Palace',
			image:
				'https://images.unsplash.com/photo-1455587734955-081b22074882?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
			restingCapacity: '4 pessoas',
			rating: 9.2,
		},
		{
			id: 2,
			name: 'Cantinho da Lu',
			image:
				'https://plus.unsplash.com/premium_photo-1681922761207-fab6125fefd8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
			restingCapacity: '2 pessoas',
			rating: 8.5,
		},
		{
			id: 3,
			name: 'Carioca - B&B',
			image:
				'https://images.unsplash.com/photo-1630994347131-96d17ec41ba2?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
			restingCapacity: '2 pessoas',
			rating: 6.1,
		},
		{
			id: 4,
			name: 'Leblon Styles',
			image:
				'https://plus.unsplash.com/premium_photo-1661907801393-3b36254a81b4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
			restingCapacity: '0 pessoas',
			rating: 7.3,
		},
	];

	return Response.json({ data });
}
