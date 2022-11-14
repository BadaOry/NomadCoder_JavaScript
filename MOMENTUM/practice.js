const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.querySelector("#todo-list");
// const todoLi = document.querySelector("li");

// 1. 일단 submit 을 막아보자
// 2. 그리고 li 에 원하는걸 추가해보자
// 실수 1 ) submit 막는 펑션과 화면에 그리는 펑션을 분리하지 않음
// 실수 2 ) paintTodo 펑션 : createElement 를 하지 않고 appendChild 만 하고 왜 안되는지 고민함
//                           + li 안에 span 을 넣지 않음
// 실수 3 ) paintTodo 펑션 : 변수 li 를 선언하지 않고 그냥 길게 쓰려고 함 
// 3. li 화면에 그리기까지 완료 ! 이제 
//    - submit 하고나서 input 비우기
//    - localStorage 에 저장하기 해보자
// 실수 4 ) saveTodo 펑션의 위치가 고민됨.. 그래서 handle 마지막쪽에 넣었는데 안됨.
//          ▶ saveTodo 펑션의 위치는 얼추 맞았고, setItem 메소드의 arg 를 한 개만 넣어서 안된거였음
// 근데 localStorage 에 한 개씩만 저장되는걸 고쳐보자
// 실수 5 ) saveTodo 펑션 : 왜 한 개씩만 저장될까?

function saveTodo(newTodo) {

    // localStorage.setItem("todo", todoArr);
}

function deleteTodo() {
    
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    li.appendChild(span);
    span.innerText = newTodo;
    todoList.appendChild(li); 
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    const todoArr = [];
    todoArr.push(newTodo);
    console.log(todoArr);
    paintToDo(newTodo);
    saveTodo(newTodo);
}

todoForm.addEventListener("submit", handleToDoSubmit);