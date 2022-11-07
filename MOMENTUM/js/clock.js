// [ #5.0 실습 01 ] interval 알아보기
//                 : JS 내장 개념으로, setInterval 만 호출하면 됨
const clock = document.querySelector("#clock");

// function sayHello() {
//     console.log("hello");   
// }

// setInterval(sayHello, 5000);



// [ #5.1 실습 01 ] timeout 알아보기
//                 
// setTimeout(sayHello, 5000);

// function getClock() {
//     console.log(setInterval);
// }

// setInterval(getClock, 1000);

// [ #5.1 실습 02 ] Date Object 
//                 : 콘솔창에 const date = new Date(); 하고
//                   getDate, getDay, getHours, getMinutes 등으로 값을 가져올 수 있음
//                   ▶ getHour, getMinutes, getSeconds 를 매 초 가져오면 시계를 만들 수 있음 !!
//                   ▷ 그런데 문제가 두 가지 있음
//                       - 00, 01 초 이런식으로 보이게 하고 싶음..
//                       - 페이지를 새로고침하면 1초 있다가 띄워줌ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ
//                         ▶ 웹사이트가 load 되자마자 getClock() 을 실행하고, 또 매 초마다 다시 실행되도록 할 것임
// function getClock() {
//     const date = new Date();
//     // console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
//     clock.innerText = (`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
// }

// getClock();  // ◀ 웹사이트가 load 되자마자 function 실행
// setInterval(getClock, 1000); // ◀ 그 시계를 매 초마다 실행해 줄 것임



// [ #5.2 실습 01 ] padStart function 사용해서 초 단위를 두 글자로 만들기 
//                 : string 에 적용되는 펑션이고, string 의 길이를 정하고, 그 길이가 아니라면 특정 값을 앞에 추가할 수 있음
//                   추가로 padEnd 도 있고, 이건 뒤를 채우는 것임

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");    // ◀ number 를 반환하므로 padStart 를 사용할 수 없음, string 으로 바꾸려면 String() 안에 넣으면 됨
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    // console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
    clock.innerText = (`${hours}:${minutes}:${seconds}`);
}

getClock();  // ◀ 웹사이트가 load 되자마자 function 실행
setInterval(getClock, 1000); // ◀ 그 시계를 매 초마다 실행해 줄 것임

