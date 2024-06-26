'use client';

import { Accommodation } from './Accommodation';
import { useAccommodations } from './useAccommodations';

export function AccommodationsList() {
	const { data } = useAccommodations();

	return (
		<div className="flex gap-4 flex-wrap justify-center">
			{data.map((accommodation) => (
				<Accommodation
					key={accommodation.id}
					name={accommodation.name}
					image={accommodation.image}
					rating={accommodation.rating}
					restingCapacity={accommodation.restingCapacity}
					isAvailable={accommodation.isAvailable}
				/>
			))}
		</div>
	);
}
