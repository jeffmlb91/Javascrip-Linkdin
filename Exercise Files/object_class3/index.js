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
  this.switchZipper = function (currentBig, currentSmall) {
    this.pocket.big = currentBig;
    this.pocket.small = currentSmall;
  };
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

console.log("This is the backPack:", brandNewBackPack);
console.log("This is the backPack:", brandNewBackPack);
