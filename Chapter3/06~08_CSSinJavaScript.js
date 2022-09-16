// [ #3.6 ~ 8 _ CSS in JS ]


// [ 실습 1 ] title 색깔 변경
//           : 유저가 title 클릭 시 파란색으로 바꾸고
//             한 번 더 누르면 title 의 색을 토마토로 바꾸기

const h1 = document.querySelector("div.hello:first-child h1");


// function handleTitleClick() {
//     console.log(h1.style.color);  // ◀ getter : h1 의 color 획득
//     h1.style.color = "blue";        // ◀ setter : h1 의 color 를 설정
//     console.log(h1.style.color);    // ◀ getter : h1 의 color 획득
// };

// 실행해보면 blue 가 잘 출력되는데, 
// 우리는 이 값이 - blue 면 tomato 로 변경하고
//               - blue 가 아니면 blue 로 변경해달라고 만들거임

// function handleTitleClick() {
//     if(h1.style.color === "blue") {
//         h1.style.color = "tomato";
//     } else {
//         h1.style.color = "blue";
//     }
// };

// 그런데 h1.style.color 를 너무 많이 호출해서 보기가 싫으네요
// ▶ color 현재 상태를 저장하는걸 해볼거임

// function handleTitleClick() {
//     const currentColor = h1.style.color;
//     let newColor;
//     if (currentColor === "blue") {
//         newColor= "tomato";
//     } else {
//         newColor = "blue";
//     }

//     h1.style.color = newColor;
// };


// h1.addEventListener("click", handleTitleClick);


// [ 실습 2 ] 클린 코드 VER 1
//           : index.html 에서 css, js 문서를 import 하고 있음
//             ▷ 우리가 js 에서 하고싶은건, 
//                css 파일의 active class 를 h1에 전달하기임 

// 아래와 같이 쓰면 JS 가 CSS 에 직접 말하는게 아니라
// JS 가 HTML 을 변경하고, CSS 는 HTML 을 보고있으니 잘 변경될 것임
// ▶ 더 짧은 코드로 실습1 과 같은 결과를 냈으니 훨씬 더 좋은 코드라고 할 수 있음
//    ▷ 하지만.. active 라는 string 을 직접 박는건(= raw value) 에러의 위험성이 큰데요
// ▶ 클래스 이름을 constant 로 만들어서 에러를 줄여볼게요

// function handleTitleClick() {
//     const clickedClass = "clicked";
//     if(h1.className ===clickedClass) {
//         h1.className = "";
//     }else {
//         h1.className = clickedClass;
//     }
// }

// h1.addEventListener("click", handleTitleClick);

// 그런데.. h1 에 이미 class 가 있다면 버그가 생김
// ▷ 원래는 폰트가 있었는데, 클릭해서 한 번 클래스를 바꾸고 돌아오면 클래스가 싹다 날라감 
// ▶ REPLACE 해버림.. 내 섹시폰트..........
//    ▷ 그렇다고 const clickedClass = "clicked sexy-font"; 는 바람직하지 않음
//       왜냐면 HTML 를 변경하면 JS 랑 CSS 모두를 업데이트 해야하기 때문
// ▶ 사실은, JS 로 모든 className 을 변경하지 않는게 최선임
//    ▷ sexy-font 를 삭제하지 않고, clicked class 를 변경하고 싶은거지


// [ 실습 3 ] 클린 코드 VER 2
//           : classList 와 function 을 사용하는 방법

// * classList : class 를 목록으로 작업할 수 있게 허용해주는 attribute
//               ▶ contains, remove, add 같은 좋은 function 사용 가능

// function handleTitleClick() {
//     const clickedClass = "clicked";
//     if(h1.classList.contains(clickedClass)) {
//         h1.classList.remove(clickedClass);
//     }else {
//         h1.classList.add(clickedClass);
//     }
// }

// h1.addEventListener("click", handleTitleClick);


// [ 실습 4 ] 클린 코드 VER 3
//           : classList function 중 toggle 을 사용하는 방법
//             ▶ 사실 toggle 은 기본적으로 실습 3 의 코드를 구현해놓은 function 임 !
//             ▷ class name 이 존재하는 경우, toggle 은 class name 제거
//                class name 이 존재하지 않는 경우, toggle 은 class name 추가  

// * toggle : 해당 element 의 classList 에 원하는 이름의 class 가 이미 있는지 확인한 후
//            있다면 제거해주고, 없으면 추가해줌
function handleTitleClick() {
    // const clickedClass = "clicked";  ◀ 지금은 string 반복 안하니까 따로 선언 안할거고, raw value 로 넣어버릴 것임
    h1.classList.toggle("clicked");
}

h1.addEventListener("click", handleTitleClick);
