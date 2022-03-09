/**
 * @link http://developer.mozilla.org/en-US/Web/Javascript/Reference/classes
 **/
/**
 * Challenge: Create a new object type
 *
 * - Create a new object type "Book" using a class or an object constructor function.
 * - Add at least 5 book objects.
 */

import Backpack from "./Backpack.js";
import Book from "./Book.js";

const everyday = new Backpack(
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false,
  "December 5, 2018 15:00:00 PST"
);

const firstBookRelease = new Book("Bible", "YHWH", 0, "Israel", "Believe", true, "December 5, 2018 15:00:00 PST");

const secondBookRelease = new Book(
  "Becoming",
  "Michelle Obama",
  2017,
  "USA",
  "Motivational",
  true,
  "December 5, 2018 15:00:00 PST"
);

const thirdBookRelease = new Book(
  "Astrounaute",
  "Kennedy",
  1969,
  "United states of America",
  "Travelling",
  true,
  "March 5, 2018 13:00:00 PST"
);

const fourthBookRelease = new Book(
  "Becherelle",
  "Francois Dumont",
  1975,
  "France",
  "Grammar",
  false,
  "January 4, 2018 15:00:00 PST"
);

const fithBookRelease = new Book(
  "Jquerie",
  "Paul Adams",
  2015,
  "USA",
  "Programming",
  true,
  "December 5, 2018 15:00:00 PST"
);

// console.log("The everydayPack object:", everydayPack);
// console.log("The pocketNum value:", everydayPack.pocketNum);
// console.log("Days since aquired:", everydayPack.backpackAge());

console.log(
  "This are all the books:",
  firstBookRelease,
  secondBookRelease,
  thirdBookRelease,
  fourthBookRelease,
  fithBookRelease
);
console.log("First Book acquired on:", firstBookRelease.rentTime());
console.log("Second Book acquired on:", secondBookRelease.rentTime());
console.log("Third Book acquired on:", thirdBookRelease.rentTime());
console.log("fourth Book acquired on:", fourthBookRelease.rentTime());
console.log("Fith Book acquired on:", fithBookRelease.rentTime());