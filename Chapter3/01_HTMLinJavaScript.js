// [ #3.1 _ HTML in JavaScript ]

const title = document.getElementById("title");

console.dir(title); // h1 태그에 관한 많은 내용을 console 에 출력
                    // ▶ JavaScript 에서 HTML 을 읽을 수 있음
                    //    ex. outerHTML, outerText, localName, innerHTML, innerText, id, hidden, autofocus, className
                    // [ 테스트 1 ] html 파일에서 h1 태그 안에 autofocus 를 쓰고 오면
                    //             false 였던것이 true로 바뀌어서 보임
                    //             ▶ HTML 의 Element 를 JavaScript 로 가져오는 중
                    //                단, HTML 자체를 보여주는 것은 아니고
                    //                    JavaScript 에서 이 HTML 을 표현하는 Object 를 보여주는 것임
                    // [ 테스트 1 ] html 파일에서 h1 태그 안에 class="hello" 를 쓰고 오면
                    //              "" 였던것이 "hello"로 바뀌어서 보임


// innerText 를 js 를 통해서 바꿔보기
// : JS 에서 document.getElementById("title") 로 element 를 가져왔으므로
//   HTML 의 h1 태그 안의 내용이 js 를 통해서 바뀌게 됨
title.innerText = "Got You!";

// console 에서 확인해보기
console.log(title.id);
console.log(title.className);

