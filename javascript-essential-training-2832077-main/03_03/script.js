/**
 * Create a Backpack object.
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
  lidOpen: false,
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
};

console.log("The backpack Object:", backpack);
console.log("The PocketNum value:", backpack.pocketNum);
console.log("strapLength Left value:", backpack.strapLength.left);

//console.log("The pocketNum value:", backpack["pocketNum"]);

let query = "pocketNum";
console.log("The pocketNum value:", backpack[query]);
