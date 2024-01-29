import { PointOfInterest } from "./pointOfInterest";

export class PointsOfInterest {
    constructor(
      public pointOfInterestA: PointOfInterest,
      public pointOfInterestB: PointOfInterest
    ) {
        this.validate()
    }

    private validate(){
        if(!this.pointOfInterestA) throw new Error("2 points of interest required");
        if(!this.pointOfInterestB) throw new Error("2 points of interest required");
    }
  }