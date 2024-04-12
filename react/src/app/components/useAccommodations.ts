'use client';

import { useEffect, useState } from 'react';

type ApiAccommodation = {
	id: number;
	name: string;
	image: string;
	restingCapacity: string;
	rating: number;
};

type Accommodation = {
	id: number;
	name: string;
	image: string;
	restingCapacity: number;
	rating: number;
};

export function useAccommodations() {
	const [data, setData] = useState<Accommodation[]>([]);

	useEffect(() => {
		const getData = async () => {
			const result = await fetch('/api/accommodations');
			const { data } = (await result.json()) as { data: ApiAccommodation[] };

			const normalizedData = data.map((item) => ({
				...item,
				restingCapacity: Number(item.restingCapacity.split(' pessoas')[0]),
			}));

			setData(normalizedData);
		};

		getData();
	}, []);

	const checkAvailability = (capacity: number) => capacity > 0;

	return { data, checkAvailability };
}
