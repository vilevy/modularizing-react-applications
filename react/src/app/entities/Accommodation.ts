export type BaseAccommodation = {
	id: number;
	name: string;
	image: string;
	restingCapacity: number;
	rating: number;
};

export class Accommodation {
	constructor(readonly accommodation: BaseAccommodation) {}

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
		return this.accommodation.restingCapacity;
	}

	get rating() {
		return this.accommodation.rating;
	}

	get isAvailable() {
		return this.restingCapacity > 0;
	}
}
