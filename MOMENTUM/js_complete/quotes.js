// [ #6.0 실습 01 ] quote 만들기
const quotes = [
    {
        quote: "Speak softly and carry a big stick",
        author: "Theodore Roosevelt"
    },
    {
        quote: "All the world’s a stage, and all the men and women merely players",
        author: "William Shakespeare"
    },
    {
        quote: "Genius is one percent inspiration and ninety-nine percent perspiration.",
        author: "Thomas Edison"
    },
    {
        quote: "Go ahead, make my day.",
        author: "Harry Callahan (character)"
    },
    {
        quote: "Hell is other people.",
        author: "Jean-Paul Sartre"
    },
    {
        quote: "I think therefore I am.",
        author: "Rene Descartes"
    },
    {
        quote: "If you build it, they will come.",
        author: "Joe Jackson (character)"
    },
    {
        quote: "If you want something done right, do it yourself.",
        author: "Charles-Guillaume Étienne"
    },
    {
        quote: "Knowledge is power.",
        author: "Sir Francis Bacon"
    },
    {
        quote: "May the Force be with you.",
        author: "Star Wars (many characters)"
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;