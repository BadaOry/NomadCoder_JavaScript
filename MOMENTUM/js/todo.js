// [ #7.0 실습 01 ] html 요소 가져오기 
const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

// function handleToDoSubmit(event) {
//     event.preventDefault();
//     console.log(toDoInput.value);
// }

// toDoForm.addEventListener("submit", handleToDoSubmit);



// [ #7.0 실습 02 ] input 에 값을 넣고 ENTER 를 누를 때 마다 입력한 것을 비우기
//                 : toDoInput 에 입력된 값을 저장하고, value 에 빈값("") 을 넣기
// function handleToDoSubmit(event) {
//     event.preventDefault();
//     const newTodo = toDoInput.value;
//     toDoInput.value = "";
// }

// toDoForm.addEventListener("submit", handleToDoSubmit);



// [ #7.1 실습 01 ] todo 그리기
//                 : 리스트를 추가할 수는 있지만, 지울수 없고 새로고침하면 다 날라감..
// function painToDo(newToDo) {
//     const li = document.createElement("li");
//     const span = document.createElement("span");
//     li.appendChild(span);
//     span.innerText = newToDo;
//     toDoList.appendChild(li);
// }

// function handleToDoSubmit(event) {
//     event.preventDefault();
//     const newTodo = toDoInput.value;
//     toDoInput.value = "";
//     painToDo(newTodo);
// }

// toDoForm.addEventListener("submit", handleToDoSubmit);



// [ #7.2 실습 01 ] todo 지우기
//                 : 버튼을 추가로 만들고, CLICK 을 기다리게 할 것임
//                   문제는.. deleteToDo 펑션이 모든 버튼에 적용되어서, 어떤 버튼이 눌렸는지 구분 할 수 없음
//                   ▶ submit 하고 handleToDoSubmit 을 돌린 것 처럼, 첫 번째 argument 에 공간을 줘서 event 정보를 받아보자 !
//                      ▷ path, target 라는 property 에서 어떤 버튼이 클릭되었는지 확인할 수 있음 !!! (console.dir(event.target) 으로 버튼들 클릭해서 확인 가능)
//                         ▷ parentNode, parentElement 확인 가능
//                      ▶ 클릭한 버튼의 부모 li 에 접근해서 li 를 삭제해버리기 !

// function deleteToDo(event) {
//     // console.log(event);
//     // console.dir(event.target.parentElement.innerText);
//     const li = event.target.parentElement;
//     li.remove();
// }

// function painToDo(newToDo) {
//     const li = document.createElement("li");
//     const span = document.createElement("span");
//     span.innerText = newToDo;
//     const button = document.createElement("button");
//     button.innerText = "💥";
//     button.addEventListener("click", deleteToDo);
//     li.appendChild(span);
//     li.appendChild(button);
//     toDoList.appendChild(li);
// }

// function handleToDoSubmit(event) {
//     event.preventDefault();
//     const newTodo = toDoInput.value;
//     toDoInput.value = "";
//     painToDo(newTodo);
// }

// toDoForm.addEventListener("submit", handleToDoSubmit);



// [ #7.3 실습 01 ] todo 를 localStorage 에 저장하기
//                 : array 를 만들어서 저장해보기
//                   단, localStorage 에는 array 를 저장할 수 없음 !! 텍스트만 저장할 수 있음
//                   ▷ 저장까지 잘 했는데, 문제는.. 새로고침하면 화면에서 사라짐. 하지만 localStorage 에 저장은 되어 있음
//                      그리고 새로고침하고 다시 todo 들을 저장하면, 예전것이 없어지고 새 화면에 입력한 것으로 모두 변경되어버림 !
//                   ▶ - 나는 텍스트로 todo 들을 저장하고싶지 않고 array 로 저장하고싶음
//                      ▷ 브라우저의 기본 기능(= JSON.stringify())을 이용해서 어떤 것이든 string 으로 바꿔버릴 것임
// const toDos = [];

// function saveToDos() {  
//     localStorage.setItem("todos", JSON.stringify(toDos));  // ▶ JSON.stringify 를 사용해서 array 의 모습으로 저장할 것임
// }

// function deleteToDo(event) {
//     // console.log(event);
//     // console.dir(event.target.parentElement.innerText);
//     const li = event.target.parentElement;
//     li.remove();
// }

// function painToDo(newToDo) {
//     const li = document.createElement("li");
//     const span = document.createElement("span");
//     span.innerText = newToDo;
//     const button = document.createElement("button");
//     button.innerText = "💥";
//     button.addEventListener("click", deleteToDo);
//     li.appendChild(span);
//     li.appendChild(button);
//     toDoList.appendChild(li);
// }

// function handleToDoSubmit(event) {
//     event.preventDefault();
//     const newTodo = toDoInput.value;
//     toDoInput.value = "";
//     toDos.push(newTodo);
//     painToDo(newTodo);
//     saveToDos();
// }

// toDoForm.addEventListener("submit", handleToDoSubmit);



// [ #7.4 실습 01 ] localStorage 에 저장된 todos 를 가져오기
//                 : JSON.parse 를 사용해서 string 으로 저장된 todo 를 JavaScript object (= array) 로 바꾸기
//                   + forEach 펑션으로 각 item 에 function 사용하기
// const TODOS_KEY = "todos";

// const toDos = [];

// function saveToDos() {  
//     localStorage.setItem("todos", JSON.stringify(toDos)); 
// }

// function deleteToDo(event) {
//     const li = event.target.parentElement;
//     li.remove();
// }

// function painToDo(newToDo) {
//     const li = document.createElement("li");
//     const span = document.createElement("span");
//     span.innerText = newToDo;
//     const button = document.createElement("button");
//     button.innerText = "💥";
//     button.addEventListener("click", deleteToDo);
//     li.appendChild(span);
//     li.appendChild(button);
//     toDoList.appendChild(li);
// }

// function handleToDoSubmit(event) {
//     event.preventDefault();
//     const newTodo = toDoInput.value;
//     toDoInput.value = "";
//     toDos.push(newTodo);
//     painToDo(newTodo);
//     saveToDos();
// }

// function sayHello(item) {
//     console.log("this is the turn of ", item);
// }

// toDoForm.addEventListener("submit", handleToDoSubmit);

// const savedToDos = localStorage.getItem(TODOS_KEY);
// // console.log(savedToDos);
// if(savedToDos !== null) {
//     const parsedToDos = JSON.parse(savedToDos); // ▶ array 로 만든 후, 이 안의 각 item 에 대해 function 을 실행하는 것이 목표 !!!!
//     // console.log("parsed : " + parsedToDos);
//     // parsedToDos.forEach(sayHello);   // ▶ 이게 그 각 item 에 대해 function 을 실행해주는 펑션임
//     parsedToDos.forEach((item) => console.log("this is the turn of ", item));
// }



// [ #7.5 실습 01 ] localStorage 에 저장된 todos 를 가져오기
//                 : forEach 펑션으로 화면에 그리는 것 까지 성공했는데.. 새로고침해서 새로 작성하면 localStorage 가 초기화되는 문제가 발생 !
//                   ▶ 왜냐면.. 선언한 const toDos 는 application 이 시작될 때 항상 비어있기 때문ㅋㅋㅋㅋㅋㅋㅋㅋ
//                      ▷ const 를 let 으로 바꾸고, if 절에 todo 가 들어있으면 toDos 에 parsedToDos 를 넣어서 이전의 toDo 를 복원할거임
//                   ▶ 성공 ! 이제 문제는.. 삭제 버튼을 누르면 화면에서 없어지지만 localStorage 에서는 지워지지 않으므로, 새로고침하면 다시 보이게 됨
// const TODOS_KEY = "todos";

// // const toDos = [];  // ▶ application 시작할 때 마다 항상 비어서 시작함
// let toDos = []; 


// function saveToDos() {  
//     localStorage.setItem("todos", JSON.stringify(toDos)); 
// }

// function deleteToDo(event) {
//     const li = event.target.parentElement;
//     li.remove();
// }

// function painToDo(newToDo) {
//     const li = document.createElement("li");
//     const span = document.createElement("span");
//     span.innerText = newToDo;
//     const button = document.createElement("button");
//     button.innerText = "💥";
//     button.addEventListener("click", deleteToDo);
//     li.appendChild(span);
//     li.appendChild(button);
//     toDoList.appendChild(li);
// }

// function handleToDoSubmit(event) {
//     event.preventDefault();
//     const newTodo = toDoInput.value;
//     toDoInput.value = "";
//     toDos.push(newTodo);
//     painToDo(newTodo);
//     saveToDos();
// }

// toDoForm.addEventListener("submit", handleToDoSubmit);

// const savedToDos = localStorage.getItem(TODOS_KEY);

// if(savedToDos !== null) {
//     const parsedToDos = JSON.parse(savedToDos); 
//     toDos = parsedToDos;
//     // parsedToDos.forEach((item) => console.log("this is the turn of ", item));
//     parsedToDos.forEach(painToDo);
// }



// [ #7.6 실습 01 ] localStorage 에 저장된 todos 에 id 부여하기
//                 : 사실 array 가 DB고, localStorage 는 그 array 를 복사해두는 곳임
//                      ▷ toDos array != localStorage
//                   ▶ 그리고 만약 toDos 내의 텍스트가 같다면, 어떤 것을 선택했는지 모르는 문제 상황 발생
//                      ▷ 따라서, 각 todo 들에게 ID 같은 것을 주는 것이 좋겠죠  EX. [{id:1212, text:"drink"}, ..]
//                      ▶ Date.now() 를 써서 밀리초를 받아 id 로 쓸게요 !
//                   ▶ 우리의 DB 에 id 를 저장하는 옵션 주기 성공 !
// const TODOS_KEY = "todos";

// let toDos = [];  

// function saveToDos() {  
//     localStorage.setItem("todos", JSON.stringify(toDos)); 
// }

// function deleteToDo(event) {
//     const li = event.target.parentElement;  // ▶ 버튼을 클릭하면, 삭제되는 li 의 id 를 확인할 수 있음 ! 이걸로 localStorage 에서 지울 수 있겠다 !!
//     li.remove();
// }

// function paintToDo(newToDo) {   // ◀ 이제는 text 가 아니라 obj 를 받아버림
//     const li = document.createElement("li");
//     li.id = newToDo.id;  // ◀ 생성된 li 의 id 값을 추가하는 코드
//     const span = document.createElement("span");
//     // span.innerText = newToDo;   
//     span.innerText = newToDo.text;   // ◀ 우리는 text 요소를 보여주고 싶기 때문
//     const button = document.createElement("button");
//     button.innerText = "💥";
//     button.addEventListener("click", deleteToDo);
//     li.appendChild(span);
//     li.appendChild(button);
//     toDoList.appendChild(li);
// }

// function handleToDoSubmit(event) {
//     event.preventDefault();
//     const newTodo = toDoInput.value;
//     toDoInput.value = "";
//     const newTodoObj = {
//         text:newTodo,
//         id: Date.now(),  // ▶ 각 li item 을 구분하기 위함
//     }
//     // toDos.push(newTodo);
//     // painToDo(newTodo);
//     toDos.push(newTodoObj);
//     paintToDo(newTodoObj);   // ▶ Obj 를 넘겨주면 object object 라고 나와서, paintTOdO 를 바꿔줄거임
//     saveToDos();
// }

// toDoForm.addEventListener("submit", handleToDoSubmit);

// const savedToDos = localStorage.getItem(TODOS_KEY);

// if(savedToDos !== null) {
//     const parsedToDos = JSON.parse(savedToDos);
//     toDos = parsedToDos;
//     parsedToDos.forEach(paintToDo);
// }



// [ #7.7 실습 01 ] filter function 을 사용해서 새로운 array 를 만들기 
//                 : localStorage 에 저장된 array 의 item 을 찾아서 지우는 것이 목표
//                   ▶ 그치만 ! 지워버리는 것이 아니라, filter 펑션을 사용해서 "제외" 해버리고 새로운 array 를 만드는 것임                   

// [ #7.7 실습 02 ] filter function 의 예시
//                 : 새 array 에서 어떤 object 를 유지하고 싶다면, 반드시 true 를 리턴해야함. 
//                   false 면 새 array 에 들어가지 않을 것임.
// function sexyFilter(item) { // ▶ 새 array 에서 어떤 object 를 유지하고 싶다면, 반드시 true 를 리턴해야함. false 면 새 array 에 들어가지 않을 것임.
//     // return true;     // ▶ [1, 2, 3, 4] 반환

//     // return false;    // ▶ [] 반환

//     return item !== 2;   // ▶ [1, 3, 4] 반환  
// }

// [1, 2, 3, 4].filter(sexyFilter);
// [1, 2, 3, 4].filter(item => item !== 2);  // ▶ 혹은 function 을 만들지 않고 arrow function 으로 이렇게 쓸 수도 있음

// [ 동작 과정 ] : forEach 처럼 array 의 각 item 에 대해 function 을 돌려서
// sexyFilter(1) = true >> 1 유지
// sexyFilter(2) = false >> 2 버림 
// sexyFilter(3) = true >> 3 유지
// sexyFilter(4) = true >> 4 유지
// >>>> [1, 3, 4] 로 새로운 array가 구성되는 것임



// [ #7.8 실습 01 ] localStorage 에 저장된 todos 를 id 를 찾아서 삭제하기
//                 : 

const TODOS_KEY = "todos";

let toDos = [];  

function saveToDos() {  
    localStorage.setItem("todos", JSON.stringify(toDos)); 
}

function deleteToDo(event) {
    const li = event.target.parentElement;  
    li.remove();
    // toDos = toDos.filter((toDo) => toDo.id !== li.id); // ▶ 안지워짐. 왜냐면 array 안의 id 는 number인데, li 의 id 는 string이어서 비교가 안되기 때문!
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}   

function paintToDo(newToDo) {   
    const li = document.createElement("li");
    li.id = newToDo.id;  
    const span = document.createElement("span"); 
    span.innerText = newToDo.text;  
    const button = document.createElement("button");
    button.innerText = "💥";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text:newTodo,
        id: Date.now(), 
    }
    toDos.push(newTodoObj);
    paintToDo(newTodoObj); 
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}