import { Company } from "./company";
import { Coordinates } from "./coordinates";
import { User } from "./user";

export class PointOfInterest {
    constructor(
      public coordinates: Coordinates,
      public user: User,
      public company: Company
    ) {}
  }