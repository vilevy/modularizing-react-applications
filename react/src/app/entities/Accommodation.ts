export type RemoteAccommodation = {
	id: number;
	name: string;
	image: string;
	restingCapacity: string;
	rating: number;
};

export class Accommodation {
	constructor(readonly accommodation: RemoteAccommodation) {}

	get id() {
		return this.accommodation.id;
	}

	get name() {
		return this.accommodation.name;
	}

	get image() {
		return this.accommodation.image;
	}

	get restingCapacity() {
		return Number(this.accommodation.restingCapacity.split(' pessoas')[0]);
	}

	get rating() {
		return this.accommodation.rating;
	}

	get isAvailable() {
		return this.restingCapacity > 0;
	}
}
