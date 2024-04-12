import { AccommodationsList } from './components/AccommodationsList';

export default function Home() {
	return (
		<div className="flex min-h-screen flex-col items-center justify-between">
			<header className="bg-sky-600 w-full p-6">
				<div className="max-w-6xl mx-auto font-bold text-2xl">HOTELS</div>
			</header>
			<main className="px-4 py-8 md:py-24 md:px=24 flex-1 bg-gray-200 w-full">
				<div className="max-w-6xl mx-auto">
					<AccommodationsList />
				</div>
			</main>
		</div>
	);
}
