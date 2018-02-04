window.onload = function mainTwo() {

    
    newQuote();// creates a function called dateTime inside the main function  
};

var quotes = [ //array containing the quotes 
    'Never Settle - OnePlus', 'Design is a funny word. Some people think design means how it looks. But of course, if you dig deeper, it - Steve Jobs'

];

function newQuote() {

    var t = setTimeout(newQuote, 5000); //change every 5 seconds 
    var randomNumber = Math.floor(Math.random() * (quotes.length)); // random quote 
    document.getElementById('display').innerHTML = quotes[randomNumber]; //insert it in element display
}