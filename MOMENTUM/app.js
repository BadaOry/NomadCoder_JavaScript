// const loginForm = document.querySelector("#login-form");
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");

// * 위의 선언을 더 짧게 만들기 
// : loginForm 을 지우고 바로 선언
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
// const loginButton = document.querySelector("#login-form button");


// [ #4.0 실습 01 ] click event 감지하기 + value 가져오기
//                  : 이름을 적고 클릭하면 console.log() 할 수 있고,
//                    이를 통해 이 value 를 저장할 수 있게 하는 밑작업

// function onLoginBtnClick() {
//     // console.dir(loginInput); // 이 Object 의 속성 중 value 를 찾는게 목표
//     console.log(loginInput.value);
// }

// loginButton.addEventListener("click", onLoginBtnClick);



// [ #4.1 실습 01 ] username 유효성 검사
//                 : value 가 있을 때 + 너무 길지 않을 때 click 동작시키기
//                   하지만.. 이것보단 HTML 내에서 걸어버리는 것을 니꼬는 더 선호함 (required, maxlength)
//                   그러나.. 지금 input 이 form 이 아닌 div 에 들어있으므로 input 의 유효성 검사를 할 수 없음
//                   ▶ 그래서 form 태그로 바꿨더니 원하는 대로는 되지만, 
//                      버튼을 누르면 창이 새로고침 되고 입력된 값이 사라져버림.
//                      ▷ 왜냐면 form 이 subit 되고 있기 때문.....
//                      ▶ 그러면 문제는 "click" 을 하지 않고 엔터만 눌러도 submit 이 되어벌임 !!!!
//                   ▶ 즉, 이제 "click" 은 신경 쓸 필요가 없고, form 을 submit 하는게 목표가 되어버림
//                   ▷ 근데 우리가 하고싶은건 브라우저가 새로고침을 하지 않고 username 을 저장하는 것

// function onLoginBtnClick() {
//     const username = loginInput.value;
//     // if(username === "") {
//     //     alert("Please write your nane.");
//     // } else if(username.length > 15) {
//     //     alert("Your name is too long.");
//     // }

//     console.log(username);


// }

// loginButton.addEventListener("click", onLoginBtnClick);



// [ #4.2 실습 01 ] form 이 자동으로 submit + 새로고침 되는 것을 막기
//                 : 이제 클릭해보면 콘솔에 유저네임이 빠르게 지나가는 것을 확인할 수 있음.
//                   즉, form 을 submit 할 때, 입력값을 받아내는 것임.
//                   하지만 새로고침은 form submit 의 기본 동작인걸..어떻게 하지...........
//                   ▶ preventDefault function 을 사용해서
//                      아무것도 하지 않아도, JS 가 어떤 정보를 담은 채로 function 을 호출 할 수 있음
//                   ▶ submit event 를 우리가 컨트롤 할 수 있음 !!!!!!!!!!

function onLoginSubmit(event) {
    // const username = loginInput.value;
    event.preventDefault();
    console.log(loginInput.value);
};

loginForm.addEventListener("submit", onLoginSubmit);
// ▲ 원래 eventlistener 에서 function 을 넣을때는 () (실행버튼) 을 넣지 않지.
//   "submit" 행동이 "일어나면", 브라우저가 저 function 을 실행해 줄 것이니까.
//   ▷ 근데 사실은.. 브라우저가 function 을 실행시킨다기 보다는..
//      - 브라우저는 function 을 호출하고
//      - 브라우저는 브라우저 내의 event 로부터 정보를 잡아내서 
//      - function 의 ( ) 안에 정보를 넣어서 실행버튼인 () 를 누르고 있는 것임 !!
//      ▶ function 의 첫 번째 argument 로 뭘 넣고, argument.preventDefault() 로 로그 찍어서 확인해 볼 수 있음
//   ▶ 모든 EventLsitener 의 첫 번째 argument 는 항상 방금 일어난 그 event 에 대한 정보와 같음
//      단, JS 는 언제나 정보를 가지고는 있고, 그걸 받아보려면 공간(= argument) 만 선언해주면 됨 !

// * preventDefault() : 어떤 event 의 기본 행동이 되든지간에 발생되지 않도록 막는 펑션
//                       ㄴ 기본 행동 : 어떤 function 에 대해 브라우저가 기본적으로 수행하는 동작


