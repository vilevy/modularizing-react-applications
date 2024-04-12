import type { Accommodation as AccommodationType } from './useAccommodations';

interface AccommodationProps extends AccommodationType {
	isAvailable: boolean;
}

export function Accommodation(props: AccommodationProps) {
	const { image, name, rating, restingCapacity, isAvailable } = props;

	return (
		<div className="rounded-lg w-full flex md:flex-col md:items-center md:w-60 shrink-0">
			<img
				src={image}
				alt={name}
				className={`object-cover rounded-l-lg md:rounded-bl-none md:rounded-t-lg w-40 aspect-square md:w-60 md:h-60 bg-gray-300  grow-0 ${
					!isAvailable ? 'grayscale' : ''
				}`}
			/>
			<div className="py-4 px-4 bg-white flex flex-col justify-between rounded-r-lg md:rounded-tr-none md:rounded-b-lg text-gray-900 w-full gap-3 flex-1">
				<h3 className="text-xl font-bold">{name}</h3>
				<div className="flex items-center justify-between w-full">
					<span
						className={`text-xs italic ${!isAvailable ? 'text-red-800' : ''}`}
					>
						{isAvailable
							? `${restingCapacity} lugares disponíveis`
							: 'Indisponível'}
					</span>
					<span className="rounded-full w-8 py-0.5 text-center text-white font-bold text-xs self-end bg-sky-600">
						{rating}
					</span>
				</div>
			</div>
		</div>
	);
}
