// [ #2.11 _ Returns ]

// 계산기 function 에서 console.log 를 쓰지 않고
// 계산기 function 의 data 를 받아서 작업을 하고 싶은 것임

// [ 예제 1 ] want to get "result" as a "code"
//            ▶ function 은 어떤 일을 수행하고 결과를 알려주는 것이고,
//               return 은 function 이 function 밖과 소통하는 방법이라고 생각해보기
const age = 96;
function calculateKrAge(ageOfForeigner) {
    // [ case 1 ]
    // ageOfForeigner + 2;            // 출력 : undefined

    // [ case 2 ]
    // return ageOfForeigner + 2;     // 출력 : 98 (우리가 원하던 값) 

    // [ case 3 ]
    ageOfForeigner + 2;
    return "hello";                   // 출력 : hello

}

const krAge = calculateKrAge(age);


// function 의 반환 값과 같은 variable 을 console.log 하는 것
console.log(krAge); 



// [ 예제 2 ] return 을 사용한 계산기
const calculator = {
    plus: function(a, b) {
        return a + b;
    },
    minus: function(a, b) {
        return a - b;
    },
    divide: function(a, b) {
        return a / b;
    },
    times: function(a, b) {
        return a * b;
    },
    power: function(a, b) {
        return a ** b;
    }
}

calculator.plus(2, 3);      // 출력 : 없음, console 에서는 아무일도 일어나지 않음

const plusResult = calculator.plus(2, 3);   // = 5
const minusResult = calculator.minus(plusResult, 10);   // = 5 - 10 = -5
const timeResult = calculator.times(10, minusResult);   // = - 50
const divideResult = calculator.divide(timeResult, plusResult);     // = -10
const powerResult = calculator.power(divideResult, minusResult);    // = -0.0000009

// console.log(plusResult);    // 출력 : 5

// console log 에는 아무것도 적히지 않지만
// plusResult 등을 쓰고 엔터를 누르면 접근할 수 있음