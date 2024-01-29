export class User {
    constructor(public username: string) {
      this.validate();
    }
  
    private validate() {
      if (!/^[A-Za-z]*$/.test(this.username)) {
        throw new Error("Username must contain only A to Z characters.");
      }
    }
  }