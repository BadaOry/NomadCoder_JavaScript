// [ #3.3 ~ 4 _ Events ]

const title = document.querySelector(".hello h1");

// title.innerText = "Hello";
// 위의 코드가 가능한 이유 
// : HTML 이 app.js 를 load 해서 document Object 가 생기고
//   우리가 document 에 접근할 수 있도록 browser 가 도와줌


// [ 실습 1 ] console.dir 를 통해 Element 의 내부 보기
// console.dir(title);

// on 으로 시작하는것이 매우 많음 ▷ 모두 event
// ▶ dir 로 보이는 모든 항목들이 JavaScript Object 임을 이해하기
//    ex. style : h1 Object 안의 Object
//                ▷ style 관련 내용을 JavaScrpt 형식 (Object 내부의 property) 로 볼 수 있음


// [ 실습 2 ] color 를 바꿔보기
// : h1 Object 안의 style Object 안의 property 인 color 를 바꾸고 싶음
// title.style.color = "blue";


// [ 실습 3 ] click 을 listen 해보기
// 1. HTML Element 를 JavaScript 로 가져오면서 eventListener 를 추가하기
//    * 단, "어떤" event 를 listen 하고 싶은지 JavaScript 에 알려줘야 함
// 2. function 만들어서 EventListener 에 추가하기

function handleTitleClick() {
    console.log("title was clicked!");
    title.style.color = "blue";
};

title.addEventListener("click", handleTitleClick);
// * handleTitleClick 뒤에 () 가 안붙는 이유
//   : function 을 실행시키려면 () 가 있어야 하는건 맞음.
//     하지만 여기서 우리가 원하는 건 function 을 JavaScript 에 넘겨주고
//     title 을 click 하는 event 가 일어났을 경우에 function 을 실행시키고 싶은 것임
//     ▷ 그래서 직접 실행버튼 () 을 누르지 않고
//        JavaScript 에 function 이름을 넘겨줘서 JavaScript 가 실행버튼을 눌러줌


// [ 실습 4 ] mouseeneter event listen 해보기
// 1. console.dir(title) 에서 찾은 onmouseeneter 찾아서 on 빼고 복사해오기
// 2. function 만들어서 걸어주기

function handleMouseEnter() {
    console.log("mouse is here!")
    title.innerText = "Mouse is here!";
};

title.addEventListener("mouseenter", handleMouseEnter);


// [ 실습 5 ] mouseleave event listen 해보기
function handleMouseLeave() {
    title.innerText = "Mouse is gone!!";
};

title.addEventListener("mouseleave", handleMouseLeave);
