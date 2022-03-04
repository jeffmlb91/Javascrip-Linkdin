const House = class {
    constructor(
        type,
        numberOfRooms,
        kitchenSize,
        pool,
        garage,
        driveway,
        backyard
    ){
        this.type = type;
        this.numberOfRooms = numberOfRooms;
        this.kitchenSize = kitchenSize;
        this.pool = pool;
        this.garage = garage;
        this.space = {
            numGarage: garage,
            numDriveway: driveway
        };
        this.backspace = {
            garden: backyard
        }
    }
    constructionType(newType) {
        this.type = newType;
    }
    changeGarageSpace(numberOfCarsIn, numberOfSpotOut) {
        this.space.numGarage = numberOfCarsIn;
        this.space.numDriveway = numberOfSpotOut
    }
    changeBackyard(newIdea){
        this.backspace.garden = newIdea;
    }
    
}

export default House;