// const styleDom = document.querySelector(".siteheader");
// console.log(styleDom);
const styleDom = document.querySelector(".siteheader").style;
console.log(styleDom);
// const styleDomFirstTag = document.querySelector(".site-title").style;
// console.log(styleDomFirstTag)

// returns black in the console
const styleDomFirstTag = document.querySelector(".site-title").style.color;
console.log(styleDomFirstTag); 

//change the font color of the header
const styleDomFirstTagColor = document.querySelector(".site-description").style.color = "rebeccapurple";
console.log(styleDomFirstTagColor);

// add background color to the header
const addBackgroundColor = document.querySelector(".site-title").style.backgroundColor = "pink";
console.log(addBackgroundColor);
console.log(document.querySelector(".site-title").style); // display result in console.log()