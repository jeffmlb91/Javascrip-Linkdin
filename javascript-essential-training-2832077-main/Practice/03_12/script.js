/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

/**
 * Create an object constructor function for the Backpack object type.
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new
 */

import House from "./House.js";

//console logging the initial house design and changing the type
const firstBuild = new House(
  "Detached",
  5,
  "modern",
  true,
  true,
  undefined,
  undefined,
  "December 5, 2018 15:00:00 PST"
);
console.log("first house is our:", firstBuild);
firstBuild.constructionType("Estate- Detached");
console.log("House Type changed is:", firstBuild);

//Console logging the change house type as well as the garage upgrade
console.log("first house is our:", firstBuild);
firstBuild.changeGarageSpace(7, "massive");

//Console logging the change house type as well as the garage upgrade plus backyard info
console.log("first house is our:", firstBuild);
firstBuild.changeBackyard("has beautiful garden");

console.log("House acquired on:", firstBuild.dateAcquired);
console.log("days since acquired:", firstBuild.houseAge())
