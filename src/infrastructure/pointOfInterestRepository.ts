import { PointOfInterest } from "../domain/pointOfInterest";
import { PointOfInterestRepositoryInterface } from "./Interfaces/pointOfInterestRepositoryInterface";
import { PointOfInterestModelInterface } from "./Interfaces/pointOfInterestModelInterface";
import { MockedPointOfInterestModel } from "./models/mockedPointOfInterestModel";

export class PointOfInterestRepository implements PointOfInterestRepositoryInterface {

    private pointOfInterestModel : PointOfInterestModelInterface;

    constructor() {
        //Fake Mongo Model 
        this.pointOfInterestModel = new MockedPointOfInterestModel();
    }

    async add(poi: PointOfInterest): Promise<void> {
      const { coordinates, user, company } = poi;
      await this.pointOfInterestModel.create({ coordinates, user, company });
    }
  }