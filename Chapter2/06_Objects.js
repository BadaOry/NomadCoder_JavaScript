// [ #2.6 _ Objects ]

// 아래 4개의 변수는 player 라는 공통 주제에 대해 얘기하는 중
const playerName = "ory";
const playerPoints = 121212;
const playerCute = false;
const playerFat = "little bit";


// const player = ["ory", 121212, false, "little bit"];
// 위처럼 배열로 만들어봤더니 보기는 조금 좋은데
// 1212, false 따위가 무엇을 의미하는지는 알 수 없음
// ▶ player[index] 로만 무엇을 의미하는지 알 수 있음


// Object 로 만들어보기
const player = {
    name: "ory",
    points: 10,
    cute: false,
    fat: true
};


// Object 에서 뭔가 얻어오기
// : 사실 console 도 Object 중 하나이고,
//   그 안에 propety 로서 log 를 가지고 있다는 것을 알 수 있음
console.log(player);
console.log(player.name);
console.log(player["name"]);


// Object 업데이트하기
console.log(player);
player.fat = false;
// player = false;  // 이건 에러남. constant 로 선언된 Object 를 바꾸려했기 때문
console.log(player);
// fat 이 true 에서 false 로 수정되긴 했는데..
// 지금 player 라는 Object 는 const 라서 수정할 수 없어야 하는 것 아닌가?
// ▶ Object 안의 무언가를 수정하는 것은 가능
//    단, constant 전체를 하나의 값으로 업데이트 하려는 경우엔 에러남


// property 추가하기
player.lastName = "potato";
console.log(player);

// 더하기로 property 값 업데이트하기
player.points = player.points + 15;
console.log(player);

