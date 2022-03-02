/**
 * @link http://developer.mozilla.org/en-US/Web/Javascript/Reference/classes
 **/

import Person from "./Person.js";

const firstPerson = new Person(
    "male",
    "6.9 Feet",
    "Pondu",
    "FAANG company",
    "University of Toronto",
    "Mercedes",
    "AMG",
    true,

);

console.log("Characteristics:", firstPerson);
// console.log("The Gender is:", firstPerson.gender);
// console.log("The Gender is:", firstPerson.workPlace);
// console.log("The Gender is:", firstPerson.school);
// console.log("The Gender is:", firstPerson.favouriteFood);
firstPerson.changeFavouriteFood("rice");
// firstPerson.car.make = "Audi"; This is assigning the value directly
// console.log("New Favourite Food is:", firstPerson);
firstPerson.changeCar("Ferrari", "F4");
console.log("This is the new Person model:", firstPerson);
