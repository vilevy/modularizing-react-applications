'use client';

import { useEffect, useState } from 'react';
import type { Accommodation } from '../entities/Accommodation';
import { getAccommodations } from '../services/get-accommodations';
import { GetAccommodationsUseCase } from '../use-cases/get-accommodations';

const useCase = new GetAccommodationsUseCase(getAccommodations);

export function useAccommodations() {
	const [data, setData] = useState<Accommodation[]>([]);

	useEffect(() => {
		const getData = async () => {
			const data = await useCase.execute();

			setData(data);
		};

		getData();
	}, []);

	const checkAvailability = (capacity: number) => capacity > 0;

	return { data, checkAvailability };
}
