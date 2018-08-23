// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// FSJS - Random Quote Generator

// select an array of quote characters and call them quotes
var quotes = [
   {quote:"Believe you can and you're halfway there.", 
   source: "Theodore Roosevelt"},
   {quote:"Success is liking yourself, liking what you do, and liking how you do it.", 
   source: "Maya Angelou"},
   {quote:"Courage is what it takes to stand up and speak; courage is also what it takes to sit down and listen.", 
   source: "Winston Churchill"},
   {quote:"Never give up on what you really want to do. The person with big dreams is more powerful than one with all the facts.", 
   source: "Albert Einstein"},
   {quote:"Success is walking from failure to failure with no loss of enthusiasm", 
   source: "winston Churchill"},
   {quote:"I am powerful. I am confident, strong and courageous. I can do everything I set my mind to. ", 
   source: "unknown"},
   {quote:"Failure is not falling down but refusing to get up.", 
   source: "Chinese Proverb"},
   {quote:"Sometimes what you're most afaraid of doing is the very thing that'll set you free.", 
   source: "unknown"},
   {quote:"Do the best you can until you know better. Then when you know better, do better.", 
   source: "Maya Angelou"},
   {quote:"Never stop trying. Never stop believing. Never give up.",
   source: "unknown"},
];

var random_quote = quotes[Math.floor(Math.random() * quotes.length)];

// select a getRandomQuuote function and call it getRandomQuote
function getRandomQuote() {
    return quotes[Math.floor(Math.random() * quotes.length)]
};


// select a printQuote funtion and call it printQuote

function getRandomColor () {
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    var rgb = "rgb(" + red +", " + green + ", " + blue + ")";
    return rgb;
};

function printQuote () {
    var randomQuote = getRandomQuote();
    var randomColor = getRandomColor();
    var display = '';

    display += '<p class="quote">' + randomQuote.quote + '</p>';
    display += '<p class="source">' + randomQuote.source + '</p>';

    document.getElementById('quote-box').innerHTML = display;
    document.body.style.backgroundColor = randomColor;
    document.getElementById('loadQuote').style.backgroundColor = randomColor;
};


printQuote();

setInterval(printQuote, 5000);