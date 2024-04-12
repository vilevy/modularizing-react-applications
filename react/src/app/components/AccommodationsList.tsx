'use client';

import { Accommodation } from './Accommodation';
import { useAccommodations } from './useAccommodations';

export function AccommodationsList() {
	const { data, checkAvailability } = useAccommodations();

	return (
		<div className="flex gap-4 flex-wrap justify-center">
			{data.map((accommodation) => (
				<Accommodation
					key={accommodation.id}
					isAvailable={checkAvailability(accommodation.restingCapacity)}
					{...accommodation}
				/>
			))}
		</div>
	);
}
