/*  Array "quotes" containing 10 objects.  Each object contains information about a famous quote.  
All 10 objects have "quote" and "source" properties, 6 have "tag" properties and 5 have "citation" and "year" properties.  */
const quotes = [
	{ quote: "Things get shady where the grass is greener.", source: "Warren G.", tag: "Music", citation: "So Many Ways", year: 1994 },
  { quote: "You are tearing me apart Lisa!",  source: "Johnny", tag: "Movies", citation: "The Room", year: 2003 },
  { quote: "All happy families are alike; each unhappy family is unhappy in its own way.", source: "Leo Tolstoy", tag: "Books",  citation: "Anna Karenina", year: 1878 },
  { quote: "Time is the longest distance between two places.", source: "Tennessee Williams", tag: "Books", citation: "The Glass Menagerie", year: 1945 },
  { quote: "There is no greater agony than bearing an untold story inside you.", source: "Maya Angelou", tag: "Books", citation: "I Know why the Caged Bird Sings", year: 1969 },
  { quote: "No man has a good enough memory to be a successful liar.", source: "Abraham Lincoln", tag: "Politics" },
	{ quote: "Great minds discuss ideas; average minds discuss events; small minds discuss people.", source: "Eleanor Roosevelt" },
  { quote: "If you are lonely when you are alone, you are in bad company.", source: "Jean-Paul Sartre" },
  { quote: "Happiness doesn't come from doing what we like to do but from liking what we have to do.", source: "Wilferd Peterson" },
  { quote: "We tend to get what we expect.", source: "Normal Vincent Peale" }
];

/*  declare function "getRandomQuote" that randomly selects one of the objects from the array "quotes" above  */ 
function getRandomQuote(){
/*  assign a random number from 0 to the length of the array "quotes" - 1 to the variable "randomNumber"  */
  let randomNumber = Math.floor( Math.random() * quotes.length );
/*  return the random object in the array "quotes"  */
  return quotes[randomNumber];
}

/*  declare function "printQuote" that estblishes the html string needed to display the quote and it's relevant information  */
function printQuote(){
/*  create a variable "randomQuote" that is assigned to a random quote object using the "getRandomQuote" function  */
let randomQuote = getRandomQuote();
/*  create the variable "htmlString" and add the quote and source properties from the object to it  */
let htmlString = `
  <p class="quote">${randomQuote.quote}</p>
  <p class="source">${randomQuote.source}
  `;
/*  check to see if the quote object has a citation property using the ".hasOwnProperty" method  */  
if( randomQuote.hasOwnProperty('citation') ) { 
/*  add the necessary html to display the citation to "htmlString"  */
  htmlString += `
    <span class="citation">${randomQuote.citation}</span>
  `;
}
/*  check to see if the quote object has a year property  */
if( randomQuote.hasOwnProperty('year') ) {
/*  add the necessary html to display the year to "htmlString"  */
htmlString += `
<span class="year">${randomQuote.year}</span>
`;
}
/*  check to see if the quote object has a tag property  */
if( randomQuote.hasOwnProperty('tag') ) {
  /*  add the necessary html to display the tag to "htmlString"  */
    htmlString += `
      <span class ="tag">${randomQuote.tag}</span>
    `;
  }
  /*  complete "htmlString" by adding a closing </p> tag.  */
  htmlString += '</p>';
  /*  return a completed "htmlString" to the html.  */
  return document.getElementById('quote-box').innerHTML = htmlString;
};
/*  declare function randomColor that replaces the background with a random color  */
function randomColor(){
/*  create variable randomColor and set it equal to a random number with eight digits, converted to hexidecimal using the .toString() method
    source: https://css-tricks.com/snippets/javascript/random-hex-color/  */
  let randomColor = Math.floor(Math.random()*13027014).toString(16);
  /*  set the background color to #[randomColor string]
      source: https://css-tricks.com/snippets/javascript/random-hex-color/  */
  document.body.style.backgroundColor = "#" + randomColor;
};

/*  call "printQuote"  */
printQuote();

/*  call "randomColor"  */
randomColor();

/*  every three seconds, call the "printQuote" function  */
setInterval( printQuote, 3000);
/*  every three seconds, call the "randomColor" function  */
setInterval( randomColor, 3000);

/*  load a new random quote when the "show another quote" button is pressed  */
document.getElementById('load-quote').addEventListener("click", printQuote, false);
/*  create a new random background color when the "show another quote" button is pressed  */
document.getElementById('load-quote').addEventListener("click", randomColor, false);

