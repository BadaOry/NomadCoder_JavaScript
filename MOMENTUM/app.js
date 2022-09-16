// const loginForm = document.querySelector("#login-form");
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");

// * 위의 선언을 더 짧게 만들기 
// : loginForm 을 지우고 바로 선언
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");


// [ 실습 01 ] click event 감지하기 + value 가져오기
//             : 이름을 적고 클릭하면 console.log() 할 수 있고,
//               이를 통해 이 value 를 저장할 수 있게 하는 밑작업

function onLoginBtnClick() {
    // console.dir(loginInput); // 이 Object 의 속성 중 value 를 찾는게 목표
    console.log(loginInput.value);
}

loginButton.addEventListener("click", onLoginBtnClick);



