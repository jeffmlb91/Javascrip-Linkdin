// A class can be either a call expression or declaration expression
// Class declaration Class Backpack {}
// Class expression const Backpack = Class {}

const Person = class {
  constructor(
    gender,
    height,
    favouriteFood,
    workPlace,
    school,
    make,
    model,
    houseBig
  ) {
    this.gender = gender;
    this.height = height;
    this.favouriteFood = favouriteFood;
    this.workPlace = workPlace;
    this.school = school;
    this.car = {
      make: make,
      model: model,
    };
    this.houseBig = houseBig;
  }
  //Add methods like normal functions:
  changeFavouriteFood(newFood) {
    this.favouriteFood = newFood;
  }
//   changeCar() {
//     this.car.make = newMake;
//     this.car.model = newModel;
//   }

// We can user methods either ways like above this  comment and after it.
  changeCar(newMake, newModel) {
    this.car.make = newMake;
    this.car.model = newModel;
  }
};

export default Person;
