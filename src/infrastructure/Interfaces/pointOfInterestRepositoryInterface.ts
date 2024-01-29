import { PointOfInterest } from "../../domain/pointOfInterest";

export interface PointOfInterestRepositoryInterface {
    add(poi: PointOfInterest): Promise<void>;
  }