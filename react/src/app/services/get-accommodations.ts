import type { GetAccommodationsService } from '../use-cases/get-accommodations';

export const getAccommodations: GetAccommodationsService = async () => {
	const result = await fetch('/api/accommodations');
	const { data } = await result.json();

	return data;
};
