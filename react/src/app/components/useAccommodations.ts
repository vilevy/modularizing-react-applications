'use client';

import { useEffect, useState } from 'react';
import { getAccommodations } from '../services/get-accommodations';

export type Accommodation = {
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
			const data = await getAccommodations();

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
