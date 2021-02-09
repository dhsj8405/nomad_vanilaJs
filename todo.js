  const toDoForm = document.querySelector(".js-toDoForm"),
toDoInput = toDoForm.querySelector("input");
toDoList = document.querySelector(".js-toDoList");

const TODOS_LS  = "toDos";

let toDos = [];


function deleteToDo(event){
  // console.dir(event.target.parentNode); //콘솔창에서 버튼의 fater를 찾을 수 있음 parent node
  //-----------------html화면에서 toDo를 지우는 단계---------
  //console.log(event.target.parentNode);
  const btn = event.target
  const li = btn.parentNode;
  toDoList.removeChild(li);
  //-----------------localStorage에서 toDo 지우기------------------
  const cleanToDos = toDos.filter(function(toDo){
  // console.log(toDo.id, li.id);   //밑의 조건문이 실행이안돼서 두개의 데이터타입이 다름을 확인
    return toDo.id !== parseInt(li.id); //string을 숫자로바꿈
  }); //filter : array의 모든 아이템을 통해 함수를 실행
      //필터는 forEach에서 function을 실행하는 것ㄱ 같이 각각의 item과 같이 실행
  toDos=cleanToDos; //toDos가 const로 선언돼있었기때문에 let으로 바꿔줌
  saveToDos();
}

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
  delBtn.innerText = "✖";
  delBtn.addEventListener("click", deleteToDo);
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
  console.log(toDos.text);
  paintToDo(toDos.text)
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
