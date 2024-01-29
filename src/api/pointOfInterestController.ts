import express, { Request, Response } from 'express';
import { PointOfInterestService } from '../application/pointOfInterestService';
import { PointOfInterestRepository } from '../infrastructure/pointOfInterestRepository';
import { PointOfInterest } from '../domain/pointOfInterest';
import { User } from '../domain/user';
import { Coordinates } from '../domain/coordinates';
import { PointsOfInterest } from '../domain/pointsOfInterest';

const router = express.Router();
const service = new PointOfInterestService(new PointOfInterestRepository());

router.post('/pointsOfInterest', async (req: Request, res: Response) => {
  try {

    const user = new User(req.body.username);
    const company = req.body.company;
    const coordinates = new Coordinates(req.body.coordinates.latitude,
                                        req.body.coordinates.longitude );

    const pointOfInterest = new PointOfInterest(coordinates, user, company);

    await service.addPointOfInterest(pointOfInterest);

    res.status(201).send({ message: 'Point of interest added successfully' });

  } catch (error) {
    res.status(400).send({ error: (error as Error).message });
  }
});

router.post('/getDistance', async (req: Request, res: Response) => {
    try {

    console.log(req.body);
    console.log(req.body[0]);
      
      const userA = new User(req.body[0].username);
      const companyA = req.body[0].company;
      const coordinatesA = new Coordinates(req.body[0].coordinates.latitude,
                                          req.body[0].coordinates.longitude );

      const userB = new User(req.body[1].username);
      const companyB = req.body[1].company;
      const coordinatesB = new Coordinates(req.body[1].coordinates.latitude,
                                          req.body[1].coordinates.longitude );
  
      const pointOfInterestA = new PointOfInterest(coordinatesA, userA, companyA);
      const pointOfInterestB = new PointOfInterest(coordinatesB, userB, companyB);

      const pointsOfInterest = new PointsOfInterest(pointOfInterestA , pointOfInterestB );
  
      const distance = await service.calculateDistanceBetweenPoints(pointsOfInterest);
      res.status(200).send({ message: `${distance} m` });

    } catch (error) {
      res.status(400).send({ error: (error as Error).message });
    }
  });

export default router;