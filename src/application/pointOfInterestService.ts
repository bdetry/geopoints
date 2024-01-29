import { Company } from "../domain/company";
import { Coordinates } from "../domain/coordinates";
import { PointOfInterest } from "../domain/pointOfInterest";
import { PointsOfInterest } from "../domain/pointsOfInterest";
import { isOfEnum } from "../helpers/enumHelper";
import { PointOfInterestRepositoryInterface } from "../infrastructure/Interfaces/pointOfInterestRepositoryInterface";
import { getDistance } from 'geolib';

export class PointOfInterestService {
    constructor(private repository: PointOfInterestRepositoryInterface) {}
  
    public async addPointOfInterest(pointOfInterest: PointOfInterest): Promise<void> {
        this.validatePointOfInterest(pointOfInterest);
        await this.repository.add(pointOfInterest);
    }

    public calculateDistanceBetweenPoints(pointsOfInterestA: PointsOfInterest): number {

        const pointOfInterestA = pointsOfInterestA.pointOfInterestA;
        const pointOfInterestB = pointsOfInterestA.pointOfInterestB;

        this.validatePointOfInterest(pointOfInterestA);
        this.validatePointOfInterest(pointOfInterestB);

        const distance = getDistance(
          { latitude: pointOfInterestA.coordinates.latitude, longitude: pointOfInterestA.coordinates.longitude },
          { latitude: pointOfInterestB.coordinates.latitude, longitude: pointOfInterestB.coordinates.longitude }
        );
        return distance;
      }

    private validatePointOfInterest(pointOfInterest: PointOfInterest){
        //Making sure company is enum value of Company (js will allow everything...)
        this.validateCompany(pointOfInterest.company);
    }

    private validateCompany(company : Company){
        if(!isOfEnum<Company>(Company , company)){
            throw new Error("Company is not allowed");
        }
    }
  }