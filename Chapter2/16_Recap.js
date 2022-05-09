// [ #2.16 _ Recap ]

const age = parseInt(prompt("How old are you?"));

if (isNaN(age) || age < 0) {
    console.log("Please write a real positive number");
} else if (age < 18) {
    console.log("You are too young.");
} else if (age >= 18 && age <= 50) {
    console.log("You can drink.");
} else if (age > 50 && age <= 80) {
    console.log("You should exercise.");
} else if (age === 100) {   // 순서 중요 : 이 코드는 age > 80 전에 체크되어 실행 가능
    console.log("wow you are wise!");
} else if (age > 80) {
    console.log("You can do whatever you want.");
}
// } else if (age === 100) {   // 이 코드는 age > 80 에 걸려서 실행되지 않음
//     console.log("wow you are wise!");
// }


// 조건은 2개 이상을 중첩할 수도 있음
// if((a && b) || (c && d) || (x || w )) {
//     // 실행할 코드
// }