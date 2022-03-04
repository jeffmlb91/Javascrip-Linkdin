/**
 * Create an object constructor function for the Backpack object type.
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new
 */

function Backpack(
  name,
  color,
  volume,
  pocketNumber,
  bigPocketInsideZipper,
  smallPocketInsideZipper,
  lidOpen
) {
  this.name = name;
  this.color = color;
  this.volume = volume;
  this.pocketNumber = pocketNumber;
  this.pocket = {
    big: bigPocketInsideZipper,
    small: smallPocketInsideZipper,
  };
  this.lidOpen = lidOpen;
  // Below function is accessing the this.pocket method
  this.switchZipper = function (currentBig, currentSmall) {
    this.pocket.big = currentBig;
    this.pocket.small = currentSmall;
  };
  // Below function is accessing the this.lidOpen method
  this.toggleLid = function (newStatus) {
    this.lidOpen = newStatus;
  };
  // Methods are defined inside  the constructor function 
}

const brandNewBackPack = new Backpack(
  "Swizland bag",
  "Black",
  "10",
  "Opened",
  "Closed",
  false
);
// console logging the function object
console.log("This is the backPack:", brandNewBackPack);
// Changing lid open state from undefined to true
brandNewBackPack.toggleLid(true);
console.log("This is the backPack:", brandNewBackPack)

// console logging the function object
console.log("This is the backPack:", brandNewBackPack);
// changing the zipper position from close to open and vice versa
brandNewBackPack.switchZipper("Opened", "Opened");
