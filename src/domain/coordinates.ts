export class Coordinates {
    constructor(public latitude: number, public longitude: number) {
      this.validate();
    }

    private validate() {
        if ( !(this.latitude >= -90 && this.latitude <= 90 &&
               this.longitude >= -180 && this.longitude <= 180)){
                throw new Error("Invalide Coordinates.");
               }
    }
  }