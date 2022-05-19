/**
 * Note: This file is intentionally empty.
 * You can use it to test your skills at traversing the DOM using JavaScript.
 */

// const myBackPack = document.querySelector("p");
// console.log(myBackPack);
// const allClass = document.querySelectorAll("li");
// console.log(allClass);
// const allLiColor = allClass.forEach(item => item.style.backgroundColor = "blue");

// changing the h1 tag name and background color and text color
const newTitle = document.querySelector("h1");
newTitle.textContent = "AllDAy BackPack";
newTitle.style.backgroundColor = "Yellow";
newTitle.style.color = "Turquoise";

// changing ul background color
const targetLiElement = document.querySelector("ul");
targetLiElement.style.backgroundColor = "orange";

// changing li element background color;
const targetLiSpecElFirst = document.querySelector("li:nth-child(1)");
targetLiSpecElFirst.style.backgroundColor = "blue";

const targetListSpecElSecond = document.querySelector("li:nth-child(2)");
targetListSpecElSecond.textContent = "Color: Green";
targetListSpecElSecond.style.backgroundColor = "Green";

const targetListSpecElThird = document.querySelector("li:nth-child(3)");
targetListSpecElThird.style.backgroundColor = "Beige";
targetListSpecElThird.textContent = "Age: 80 years old";

const targetNumOfPocket = document.querySelector("li:nth-child(4)");
targetNumOfPocket.textContent = "Number of Pockets: 75";
targetNumOfPocket.style.backgroundColor = "tomato";

// changed first li text content to 80L
const targetLiSpecText = document.querySelector("li:nth-child(1)");
targetLiSpecText.textContent = "volume: 80L";

// TARGET CLASSES WITH JAVASCRIPT
const targetClassParent = document.querySelector("h1").classList;
console.log(targetClassParent);
const getClassList = document.querySelector("main li:nth-child(2)").classList;
console.log("New Value", getClassList);

//TARGET CLASSES THEN ADD A NEW CLASS WITH THE

// CLASS.ADD

const addClass = document.querySelector("main h1");
console.log("This is", addClass);
addClass.classList.add("first__tag__class");
addClass.classList.add("this_is_cool");

//CLASS.REMOVED
const removeClass = document.querySelector("main article li:nth-child(2)");
const removeOtherClass = document.querySelector("main li:nth-child(3)");
console.log("additional", removeOtherClass);
console.log(removeClass);
removeClass.classList.remove("feature");
removeClass.classList.add("brand__new__lisyt");
removeClass.classList.add("spinach__class");

//CLASS.REPLACE

const replaceClass = document.querySelector("main li:nth-child(1)");
console.log(replaceClass);
replaceClass.classList.replace("backpack__volume", "backpack__mass");

//Class.toggle : USED TO DISPLAY OR HIDE
replaceClass.classList.toggle("backpack__volume");
replaceClass.classList.toggle("backpack__volume");

//checking for all attributes an element contains
// .attributes

const imageAttribute = document.querySelector("img").attributes;
console.log(imageAttribute);

//checking a specific attribute we want to find inside the element
//.hasAttributes
const imageHasAttributeSrc = document.querySelector("img").hasAttribute("src");
console.log(imageHasAttributeSrc); // return a boolean true

const imageHasAttributeAlt = document.querySelector("img").hasAttribute("alt");
console.log(imageHasAttributeAlt);

//setting or creating attribute for an elements
//.createAttribute .setAttribute
const imageSetAttribute = document
  .querySelector("img")
  .setAttribute("class", "do not add");
console.log(imageSetAttribute); // attribute listed on .attribute

//removing an existing attribute from the element
//.removeAttribute

const removeAttribute = document.querySelector("img").removeAttribute("class");
console.log(removeAttribute);

//quick test

const checkElementValue = document.querySelector("h1").attributes;
const checkElementValueNew = document.querySelector("h1").setAttribute('alt', "alternative");
const checkElementValueNewRemoved = document.querySelector('h1').setAttribute('alt', 'newattribute added')

console.log("Hey", checkElementValue);
console.log("checkElementValueNew", checkElementValueNew);
console.log(checkElementValueNewRemoved);