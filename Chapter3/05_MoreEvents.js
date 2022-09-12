// [ #3.5 _ More Events ]

// [ 실습 1 ] Event 를 listen 하는 두 번째 방법
//            : by assigning an event listener to the oneventname property of this interface

const h1 = document.querySelector(".hello h1");

function handleTitleClick() {
    console.log("title was clicked!");
    h1.style.color = "blue";
};

function handleMouseEnter() {
    console.log("mouse is here!")
    h1.innerText = "Mouse is here!";
};

function handleMouseLeave() {
    h1.innerText = "Mouse is gone!!";
};

// ▼ 이거 대신에
h1.addEventListener("click", handleTitleClick);
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);

// ▼ 이것 처럼 바꿀 수 있음
// h1.onclick = handleTitleClick;
// h1.onmouseenter =  handleMouseEnter;
// h1.onmouseleave = handleMouseLeave;

// 다만, 니꼬가 addEventListener 를 선호하는 이유는
// 아래와 같이 event 를 제거할 수 있기 때문
// h1.addEventListener("mouseleave", handleMouseLeave);
// h1.removeEventListener("click",handleMouseLeave);


// [ 실습 2 ] window 의 Event 를 listen 해보기
//    * 헷갈리지말 것
//      : body 는 h1 처럼 document 밑으로 가져올수는 없음
//        위에 선언한 h1 은 body>div>h1 이고
//        지금 바꾸고싶은건 html 파일의 header 에 있는 title 임

function handleWindowResize() {
    document.body.style.backgroundColor = "tomato";

  // * 주의사항
  //   : document 에 들어있는 body, head, title 이런건 중요해서
  //     중요한 것들만 documnet.body.~~ 등이 가능
  //     ▶ 나머지 element 는 querySelector 혹은 getElementById 로 가져와야함
}

window.addEventListener("resize", handleWindowResize);


// [ 실습 3 ] window 의 Clipboard Event 를 listen 해보기
function handleWindowCopy() {
    alert("Copier!");
}

window.addEventListener("copy", handleWindowCopy);


// 계속 같은 패턴임을 발견할 수 있음
// ▶ 즉, 어떤 요소의 어떤 event 를 listen 해서 
//        event 를 처리하거나 event 에 반응함


// [ 실습 4 ] window 의 Connection Event 를 listen 해보기
function handleWindowOffline() {
    alert("SOS! no WIFI !!!");
}

function handleWindowOnline() {
    alert("ALL GOOOOOOOOOOD");
}

window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);
