'use client';

import { useEffect, useState } from 'react';
import { Accommodation } from '../entities/Accommodation';
import { getAccommodations } from '../services/get-accommodations';

export function useAccommodations() {
	const [data, setData] = useState<Accommodation[]>([]);

	useEffect(() => {
		const getData = async () => {
			const data = await getAccommodations();

			const normalizedData = data.map((item) => new Accommodation(item));

			setData(normalizedData);
		};

		getData();
	}, []);

	const checkAvailability = (capacity: number) => capacity > 0;

	return { data, checkAvailability };
}
