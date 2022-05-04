// [ #2.7 ~ 8 _ Functions ]

// 안녕 하고 싶은데 이름마다 코드를 쓰기는 너무 귀찮다..
// console.log("Hello my Name is Ory")
// console.log("Hello my Name is Cherry")
// console.log("Hello my Name is Platypus")
// console.log("Hello my Name is Kiwi")


// Function 선언
// function sayHello() {

//     console.log("Hello!");
// }

// 함수 실행시켜보기
// sayHello();
// sayHello();
// sayHello();


// function에 값이나 데이터 보내기
// : 하지만 실행버튼 (= ()) 을 눌러도 
//   우리가 원하는 대로 function에 적용되지는 않음
// sayHello("Ory");
// sayHello("Cherry");
// sayHello("Platypus");
// sayHello("Kiwi");


// Argument 를 포함한 Function 선언
// : nameOfPerson 과 age 는 Function 블록 안에서만 존재
function sayHello(nameOfPerson, age) {
    
    console.log("Hello, my name is " + nameOfPerson
                + " and I'm " + age + ".");
}

sayHello("Ory", 43);
sayHello("Cherry", 13);
sayHello("Platypus", 21);
sayHello("Kiwi", 5);


// 계산기 Function 만들기
// : a 와 b는 Function 블록 안에서만 존재
// function plus(a, b) {
//     console.log(a, b);
// }

// Argument 인 a, b 없이도 함수를 실행시킬 수는 있지만 안좋은 결과를 가져옴
// ex1 )
// plus(); // ▶ undefined undefined

// ex2 )
function plus(a, b) {
    console.log(a + b);
}

plus(); // ▶ NaN (Not a Number)

// Argument 를 보내서 함수 실행시키기
plus(8, 60);    // a = 8, b = 60


function divide(a, b) {
    console.log(a / b);
}

divide(98, 20);



// player Object 안에 Function 넣기
const player = {
    name: "Ory",
    sayHello: function (otherPersonsName){
        console.log("Hello " + otherPersonsName +", Nice to meet you!");   
    }
};

console.log(player.name);
player.sayHello("Cherry");
player.sayHello("Platypus");