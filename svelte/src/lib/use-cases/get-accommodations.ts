import { Accommodation } from '../entities/Accommodation';

type RemoteAccommodation = {
	id: number;
	name: string;
	image: string;
	restingCapacity: string;
	rating: number;
};

export type GetAccommodationsService = () => Promise<RemoteAccommodation[]>;

export class GetAccommodationsUseCase {
	constructor(readonly getAccommodationsService: GetAccommodationsService) {}
	async execute() {
		const data = await this.getAccommodationsService();

		return data.map(
			(item) =>
				new Accommodation({
					...item,
					restingCapacity: Number(item.restingCapacity.split(' pessoas')[0]),
				})
		);
	}
}
