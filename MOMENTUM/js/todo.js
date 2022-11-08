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

function deleteToDo(event) {
    // console.log(event);
    // console.dir(event.target.parentElement.innerText);
    const li = event.target.parentElement;
    li.remove();
}

function painToDo(newToDo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newToDo;
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
    painToDo(newTodo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);