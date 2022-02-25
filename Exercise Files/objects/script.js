const carObj = {
  make: "Acura",
  price: 53000,
  year: 2020,
  model: {
    badge: "A-spec",
    type: "A-spec",
    seat: "Red",
    engine: 3.5,
  },
  tires: {
    front: "Winter-Tires",
    rear: "Summer-Tires",
  },
  switchTires: function (new1, new2) {
    this.tires.front = new1;
    this.tires.rear = new2;
  },
};

console.log("This car has:", carObj.tires);
carObj.switchTires("Pirelli", "Michellin");
console.log("Rear front tires has:", carObj.tires.front);
console.log("Rear front tires has:", carObj.tires.rear);

const houseObj = {
  type: "Detached",
  room: 5,
  garage: {
    numberOfLots: 3,
    carList: {
      make1: "BMW",
      make2: "Mercedes",
      make3: "Range-Rover",
    },
    tools: {
      gardenTools: {
        lawnmower: {
          honda: 1,
          yamaha: 1,
        },
        trimmers: {
          honda: 1,
        },
        hoses: "100 Meters long",
      },
      carTools: {
        wheels: "4 sets of winter tires",
        washingProducts: "Cleaning products",
      },
    },
  },
  kitchen: {
    island: true,
    stove: true,
    highChair: false,
    applyFurniture: function (status) {
      this.highChair = status;
      this.island = status;
      this.stove = status;
    },
  },
};
// console.log("House's Kitchen highChair:", houseObj.kitchen.stove);

// console.log("This is the house Obj:", houseObj);
// console.log("House garage Tools: ", houseObj.garage.tools.carTools.wheels);

// console.log(houseObj.kitchen);
// console.log(houseObj["garage"])
//console.log(carObj);
// console.log("This is the car object:", carObj);
// console.log("This is the year:", carObj.year);
// console.log("This is the badge:", carObj.model.badge);
