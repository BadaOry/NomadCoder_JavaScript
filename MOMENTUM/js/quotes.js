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

// [ #6.0 실습 02 ] quote 가져오기

// console.log(quotes[0-9]);
// ▲ quote 배열을 가져오기 위한 숫자를 구하기 위해 Math 모듈을 사용할 것임
//    ▶ Math.random() 은 0~1 사이의 랜덤한 숫자 제공
//       ▷ 근데 우리는 0~9 사이의 숫자를 받아와야하니 *10 을 해서 받아올거임
//          하지만 소수점 뒤자리는 필요가 없음 !! 
//       ▶ 방법 1) Math.round() : 반올림
//          방법 2) Math.ceil()  : 올림  
//          방법 3) Math.floor() : 내림
//       ▶ 우리는 floor 로 해볼게요.

// console.log(quotes[Math.floor(Math.random() * 10)]);
// ▲ 랜덤으로 잘 나옴 ! 하지만.. *10 을 하드코딩 했다는 것이 문제. 
//   quote 가 4개밖에 없으면? 200개면? 1000000000개면????
//   ▶ quotes Array 의 길이를 알아버리는게 더 빠르지.. 우린 lazy programmer..

// console.log(quotes[Math.floor(Math.random() * quotes.length)]);

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;