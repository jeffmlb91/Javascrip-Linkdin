const House = class {
  constructor(
    type,
    numberOfRooms,
    kitchenSize,
    pool,
    garage,
    driveway,
    backyard,
    dateAcquired
  ) {
    this.type = type;
    this.numberOfRooms = numberOfRooms;
    this.kitchenSize = kitchenSize;
    this.pool = pool;
    this.garage = garage;
    this.space = {
      numGarage: garage,
      numDriveway: driveway,
    };
    this.backspace = {
      garden: backyard,
    };
    this.dateAcquired = dateAcquired;
  }
  constructionType(newType) {
    this.type = newType;
  }
  changeGarageSpace(numberOfCarsIn, numberOfSpotOut) {
    this.space.numGarage = numberOfCarsIn;
    this.space.numDriveway = numberOfSpotOut;
  }
  changeBackyard(newIdea) {
    this.backspace.garden = newIdea;
  }
  houseAge() {
    let now = new Date();
    let acquired = new Date(this.dateAcquired); // 
    let elapsed = now - acquired;
    let daysSinceAcquired = Math.floor(elapsed / (1000 * 3600 * 24));
    return daysSinceAcquired;
  }
};

export default House;