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
  "Grey",
  15,
  26,
  26,
  false,
  "February 5, 2021 13:00:00 PST"
);

const firstBookRelease = new Book(
  "Bible",
  "YHWH",
  2017,
  "Israel",
  "Believe",
  true,
  "December 5, 2018 15:00:00 PST"
);

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

const myStore = `
<maim>
<maim>
<h1>Book Store</h1>
<h2>What defines a book:</h2>
<ul>
  <li>Name: ${firstBookRelease.name}</li>
  <li>Author: ${firstBookRelease.author}</li>
  <li>Published: ${firstBookRelease.release.year}</li>
  <li>Country: ${firstBookRelease.release.location}</li>
  <li>Genre: ${firstBookRelease.genre}</li>
  <li>Availability: ${firstBookRelease.availability}</li>
  <li>date Acquired: ${firstBookRelease.dateAcquired}</li>
  <li>Number of days since released: ${firstBookRelease.rentTime()} days</li>
</ul>

<section>
  <h2>This is what a Backpack contains: </h2>
  <ul>
    <li>Name: ${everyday.name}</li>
    <li>Volume: ${everyday.volume}</li>
    <li>Color: ${everyday.color}</li>
    <li>Number of pocket: ${everyday.pocketNum}</li>
    <li>Strap Length Left Side: ${everyday.strapLength.left}</li>
    <li>Strap Length Right Side: ${everyday.strapLength.right}</li>
    <li>lid status: ${everyday.lidOpen}</li>
    <li>date Acquired: ${everyday.dateAcquired}</li>
    <li>Number of days since released: ${everyday.backpackAge()} days</li>
  </ul>
</section>
</maim>

`
document.body.innerHTML = myStore;



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
