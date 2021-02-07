const toDoForm = document.querySelector(".js-toDoForm"),
toDoInput = toDoForm.querySelector("input");
toDoList = document.querySelector(".js-toDoList");

const TODOS_LS  = "toDos";

const toDos = [];

function saveToDos(){
  localStorage.setItem(TODOS_LS,JSON.stringify(toDos));
  //jJSON.stringify : 자바스크립트는 local sotrage에 있는 모든 데이터를 string으로 저장함 그래서 localstroage의 value값인 object가 스트링이 되도록 만드는 방법
  //JSON.stringify : 자바스크립트 ovject를 string으로 바꿔주는 것
  //JSON : JavaScript Object Notation 데이터를 전달할 때, 자바스크립트가 그걸 다룰 수 있도록 object로 바꿔주는 기능
}

function paintToDo(text){
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = toDos.length +1;
  delBtn.innerText = "✖"
  span.innerText = text;
  li.appendChild(delBtn);   //버튼을 li에 넣는것
  li.appendChild(span);    //뭔가를 그의 father element안에 넣는것
  li.id = newId;
  toDoList.appendChild(li);
  const toDoObj = {
    text: text,
    id: newId
  };
  toDos.push(toDoObj);
  saveToDos();
}
//
function handleSubmit(event){
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}

function something (toDos){
  console.log(toDos.id);
  paintToDo(toDos.id)
}

function loadToDos(){
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if(loadedToDos !== null){
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach(something) //forEach : array에 담겨있는 것들 각각에 한번씩 함수를 실행시켜줌

  }
}

function init(){
    loadToDos();
    toDoForm.addEventListener("submit",handleSubmit);
}

init();
