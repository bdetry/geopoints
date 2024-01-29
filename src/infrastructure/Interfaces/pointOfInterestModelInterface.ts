import { PointOfInterest } from "../../domain/pointOfInterest";

export interface PointOfInterestModelInterface {
    create(pointOfInterest: PointOfInterest): Promise<void>;
  }