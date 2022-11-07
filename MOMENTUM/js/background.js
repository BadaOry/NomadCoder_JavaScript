// [ #6.1 실습 01 ] 바탕에 이미지 까는 것 사전 준비
//                 : quote 랑 거의 비슷함. 랜덤으로 뽑아올거니까.
const images = [
    "0.jpg",
    "1.jpg",
    "2.jpg",
    "3.jpg",
]
// ▲ 폴더 안에 있는 이미지 이름들을 JavaScript 파일에서도 똑같이 사용함

const chosenImage = images[Math.floor(Math.random() * images.length)];



// [ #6.1 실습 02 ] 바탕에 이미지 깔기
//                 : JavaScript 에서 뭔가를 만들어서 html 에 추가해보는건 처음이에요 !
//                   ▷ JS 를 사용해서 div 밑에 image 태그를 넣고 싶음
//                   ▶ STEP 01  img 태그 생성하기
//                   ▶ STEP 02  생성한 태그를 HTML 의 body 내부에 추가하기 (document 내부에 추가하기)


const bgImage = document.createElement("img"); 
// console.log(bgImage);  // ▶ 지금은 페이지 아무곳에서 존재하지 않는 상태
bgImage.src = `img/${chosenImage}`;  // ▶ src 도 바꿀 수 있음 !!
document.body.appendChild(bgImage);