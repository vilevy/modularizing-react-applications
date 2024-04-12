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

export function Accommodations() {
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

	return (
		<div className="flex gap-4 flex-wrap justify-center">
			{data.map((accommodation) => (
				<div
					key={accommodation.id}
					className="rounded-lg w-full flex md:flex-col md:items-center md:w-60 shrink-0"
				>
					<img
						src={accommodation.image}
						alt={accommodation.name}
						className={`object-cover rounded-l-lg md:rounded-bl-none md:rounded-t-lg w-40 aspect-square md:w-60 md:h-60 bg-gray-300  grow-0 ${
							accommodation.restingCapacity <= 0 ? 'grayscale' : ''
						}`}
					/>
					<div className="py-4 px-4 bg-white flex flex-col justify-between rounded-r-lg md:rounded-tr-none md:rounded-b-lg text-gray-900 w-full gap-3 flex-1">
						<h3 className="text-xl font-bold">{accommodation.name}</h3>
						<div className="flex items-center justify-between w-full">
							<span
								className={`text-xs italic ${
									accommodation.restingCapacity <= 0 ? 'text-red-800' : ''
								}`}
							>
								{accommodation.restingCapacity > 0
									? `${accommodation.restingCapacity} lugares disponíveis`
									: 'Indisponível'}
							</span>
							<span className="rounded-full w-8 py-0.5 text-center text-white font-bold text-xs self-end bg-sky-600">
								{accommodation.rating}
							</span>
						</div>
					</div>
				</div>
			))}
		</div>
	);
}
