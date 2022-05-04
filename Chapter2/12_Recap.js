// [ #2.12 _ Recap ]

// [ 예제 2 ] return 을 사용한 계산기
//            ▶ 단, return 을 하면 function 은 작동을 멈추고 결과 값을 return 후 종료됨
const calculator = {
    plus: function(a, b) {
        // console.log(a + b);      // 출력 : undefined (return 값이 없기 때문) 
        console.log("hello");       // 이 코드는 작동
        return a + b;               // 출력 : 5
        console.log("bye bye");     // 이 코드는 절대 작동하지 않음. return 다음이기 때문
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
};

// function 의 return 값을 variable 에 할당하면
// 해당 function 의 결과 type 를 갖게 됨
const plusResult = calculator.plus(2, 3);  
