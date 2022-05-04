// [ #2.3 _ const and let ]

const c = 5;
const d = 2;
let myName2 = "ory";
// const my Name = "ory";  


console.log(c + d);
console.log(c * d);
console.log(c / d);
console.log("hello " + myName2);

myName2 = "badaOry"; // let 키워드 선언 안해도 됨
                     // const 로 선언했다면 에러 : const 는 값을 업데이트 할 수 없음

console.log("your new name is " + myName2);