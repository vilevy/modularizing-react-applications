type ApiAccommodation = {
	id: number;
	name: string;
	image: string;
	restingCapacity: string;
	rating: number;
};

export const getAccommodations = async () => {
	const result = await fetch('/api/accommodations');
	const { data } = (await result.json()) as { data: ApiAccommodation[] };

	return data;
};
