import type { RemoteAccommodation } from '../entities/Accommodation';

export const getAccommodations = async () => {
	const result = await fetch('/api/accommodations');
	const { data } = (await result.json()) as { data: RemoteAccommodation[] };

	return data;
};
