// [ #3.2 _ Searching For Elements ]

// [ 실습 1 ] <h1 class="hello"> 를 다섯개 만들면 에러남
//            ▶ Uncaught TypeError: Cannot set properties of null (setting 'innerText')
// const title = document.getElementById("title");

// title.innerText = "Got you!";

// console.log(title.className);
// [ 원인 1 ] 코드 내의 어떤 값이 null 이라는 뜻
//            ▷ null 의 innerText 를 접근하려고 해서 에러가 난 것임
//               ▷ title 이 존재하지 않음
//                  =지금은 없는 id 를 가져와서 에러가 남                
// [ 해결 1 ] 변수에 값이 잘 할당되었는지 확인해볼 것
//            ex. id가 잘 입력되었는지, Element 를 잘 가져오는지 확인



// [ 실습 2 ] 한번에 여러개 Element 가져오기
// const hellos = document.getElementsByClassName("hello");

// console.log(hellos);
// 모든 h1 태그의 Elements 가 나오고, array 형태로 가져옴
// ▶ 즉, hellos. 형식으로 무언가를 가져올수는 없음



// [ 실습 3 ] div 안의 h1 태그 한 개 가져오기
// const title = document.getElementsByTagName("h1");

// console.log(title);
// h1 한 개가 들어있는 array 를 출력해줌
// ▶ 아직도 title. 형식으로는 뭘 못가져옴. 당연함. 그것이 array니까.



// [ 실습 4 ] 니코 선정 Element 가져오기 : querySelector & querySelectorAll
// 1. querySelector : Element 를 CSS 방식으로 검색하여 첫번째 Element 리턴
// const title = document.querySelector(".hello h1");

// console.log(title);
// div 가 1개인 경우 출력 : <h1>Grab me!</h1>    ▶ Element
// div 가 3개인 경우 출력 : <h1>Grab me! 1</h1>  ▶ Element



// [ 실습 5 ] 니코 선정 Element 가져오기 : querySelectorAll
// 2. querySelectorAll : Element 를 CSS 방식으로 검색하여 찾아온 모든 Element 를 array로 리턴
// const title = document.querySelectorAll(".hello h1");

// console.log(title);
// 출력 : [h1, h1, h1]



// [ 실습 6 ] querySelector 로 CSS 선택자 가져오기 예시
// const title = document.querySelectorAll(".hello h1:first-child");
// const title = document.querySelectorAll(".hello form");
// const title = document.querySelectorAll("#hello"); // === document.getElementById("hello")



// [ 실습 7 ] title 의 innerText 바꿔보기
const title = document.querySelector(".hello h1");

title.innerText = "Hello!";
