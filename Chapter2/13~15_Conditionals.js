// [ #2.13~15 _ Conditionals ]

// prompt : 사용자에게 창을 띄울 수 있도록 해주는 내장 function
//          단, 코드의 실행을 잠시 중지시키므로 잘 쓰지 않음

const age = prompt("How old are you?");
//          ▶ CANCEL 을 누르면 age 에 null 대입 
//          ▶ 값 입력 후 OK 를 누르면 age 에  입력 값 대입

// console.log(age);


// [ 예제 1 ] 한 type 으로 받아서 다른 type 으로 바꾸기
//            ▷ 무엇을 입력해도 숫자로 number 으로 바꾸고 싶음

// typeof [ variable ] : 변수의 type 을 알려주는 문법
// console.log(typeof age);        // 출력 : string

// parseInt 라는 이미 있는 function 을 사용해서 바꿔볼 것임
// ▶ - string 을 number 로 바꿈으로써 크기 비교를 할 수 있게 됨
//    - 숫자가 아닌 경우를 판별할 수 있음
console.log(typeof "15", typeof parseInt("15"));      // 출력 : string number
console.log(typeof age, typeof parseInt(age));        // 출력 : 15 15
                                                      //        단, 앞의 type 은 string 이고 뒤는 number 임
// 단, age 를 string 으로 입력할 경우 뒤는 NaN 출력
console.log(age, parseInt(age));                      // 출력 : 입력값 NaN



// [ 예제 2 ] 나이 계산기 만들어보기
//            ▷ 값을 입력받고, 확인한 후 또 다른 작업을 할 것임
//            ▶ NaN 이면 age 를 다시 입력하라고 할거고,
//               number 면 계산의 결과를 보여줄 것임

const age = parseInt( prompt("How old are you?") );

// console.log(age);


// isNaN ( ) : NaN 을 판별해주는 내장 function 으로 boolean 값 리턴
// console.log(isNaN(age));

// ▼ 만약 number 가 아닌 것을 입력하면 console 에 무언가를 출력하고,
//   그리고 number 라면 다른 동작을 하는 조건문 if
if(isNaN(age) || age < 0) {
    console.log("Please write a real positive number.");
} else if(age < 18) {
    console.log("You are too young.");
} else if(age >= 18 && age <= 50) {
    console.log("You can drink!");
} else if(age >= 51 && age <= 80) {
    console.log("You should exercise better than drink.");
} else if(age > 80) {
    console.log("You can do whatever you want!");
}


// [ 복습 ] OR & AND 연산자
// 1. OR
// true || true === true
// false || true === true
// true || false === true
// false || false === false

// 2. AND
// true && true === true
// false && true === false
// true && false === false
// false && false === false
