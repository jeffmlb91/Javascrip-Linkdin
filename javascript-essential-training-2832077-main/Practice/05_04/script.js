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
