/**
 * Practice: Making methods
 *
 * - Create a method for each object property.
 * - The method receives a value to match the property to be changed.
 * - Create a simple function to replace the current property value with the received value.
 * - Test the method by sending new values and checking the properties in the console.
 */

const backpack = {
  name: "Everyday Backpack",
  volume: 30,
  color: "grey",
  pocketNum: 15,
  strapLength: {
    left: 26,
    right: 26,
  },

  //defining a method to change the name property;

  changeName: function(newName) {
    this.name = newName
  },

  // Defining the  volume methode to change the volume property
  changeVolume: function(newVolume) {
    this.volume = newVolume;
  },

  changeColor: function(newColor) {
    this.color = newColor;
  },
  
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  }
};

console.log("Old Name is:", backpack.name);
backpack.changeName('Everynight Backpack');
console.log("New Name is:", backpack.name);

console.log("Old Volume is:", backpack.volume);
backpack.changeVolume(500000)
console.log("Old Volume is:", backpack.volume);

console.log("Old color is:", backpack.color);
backpack.changeColor('Pink');
console.log("New color is:", backpack.color);
