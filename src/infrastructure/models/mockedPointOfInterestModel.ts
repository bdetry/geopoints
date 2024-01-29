import { PointOfInterest } from "../../domain/pointOfInterest";
import { PointOfInterestModelInterface } from "../Interfaces/pointOfInterestModelInterface";

export class MockedPointOfInterestModel implements PointOfInterestModelInterface {
    constructor() {}

    async create(poi: PointOfInterest): Promise<any> {
        console.log('POI Saved to MongoDB :)');
    }

}