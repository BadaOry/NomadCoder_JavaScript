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

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
}

toDoForm.addEventListener("submit", handleToDoSubmit);