// A class can be either a call expression or declaration expression
// Class declaration Class Backpack {}
// Class expression const Backpack = Class {}

const Person = class {
    constructor (
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
}

export default Person;