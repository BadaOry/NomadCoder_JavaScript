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