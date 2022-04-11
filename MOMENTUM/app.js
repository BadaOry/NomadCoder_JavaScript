// [ #2.2 _ Variables ]

// Console 에 숫자 출력
console.log(12345);


// Console 에 text 출력
console.log("lalalalala");
console.log('lalalalala');  // ' 도 사용할 수 있지만 시작한걸로 끝내야 함


// Console 에 3 가지 Operation 출력
console.log(5 + 2);
console.log(5 * 2);
console.log(5 / 2);


// 만약에 위에서 5 를 6 으로 바꾸고 싶다면?
// ▷ 게을러지세요 by Variable
const a = 5;
const b = 2;
const myName = "ory";
// const my Name = "ory";  // 에러 : 변수명에 공백 사용 불가


console.log(a + b);
console.log(a * b);
console.log(a / b);
console.log("hello " + myName);
// ----------------------------------------

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
// ----------------------------------------

// [ #2.4 _ Booleans ]

// const amIFat = true;     // 데이터타입 : Boolean
// const amIFat = "true";   // 데이터타입 : 문자열
const amIFat = null;   // 아무것도 없는 상태로 값이 채워진 상태
let something;

console.log(amIFat);
console.log(something);  // undefined 출력 : variable 을 만들었지만 값을 주지 않았기 때문
// ----------------------------------------

// [ #2.5 _ Arrays ]

// case 1 : Array 가 없는 경우
// const mon = "mon";
// const tue = "tue";
// const wed = "wed";
// const thu = "thu";
// const fri = "fri";
// const sat = "sat";
// const sun = "sun";

// const daysOfWeek = mon + tue + wed + thu + fri + sat + sun;

// console.log(daysOfWeek); 

// case 2 : Array 를 사용한 경우
// const daysOfWeek = [mon, tue, wed, thu, fri, sat, sun];
// const nonsenese = [1, 2, "hello", false, null, true, undefined, "ory"];
const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];

console.log(daysOfWeek/*, nonsenese*/);

// Get Item from Array
console.log(daysOfWeek[0]);  // mon 출력

// Add one more day to the Array
daysOfWeek.push("sun");
console.log(daysOfWeek);  // mon ~ sun 출력

// 예시
const toBuy = ["potato", "tomato", "pizza"];
toBuy.push("cabbage");

