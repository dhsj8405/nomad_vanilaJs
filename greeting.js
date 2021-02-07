const form = document.querySelector(".js-form"),
  input = form.querySelector("input")
  greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
  SHOWING_CN = "showing";

function saveName(text){
  localStorage.setItem(USER_LS,text); //localstroage의 (key,value)
}

function handleSubmit(event){
  //form을 제출하는 이벤트가 발생하면 이벤트가 계속 위로 올라가서 document객체까지 간다. 그래서 기본값으로는 Enter를 눌르면 프로그램되어진 (다른곳)으로가고 페이지가 새로고침 된다 = defalut값
  // 엔터를누르면 form안에 내용이 사라지는게 기본값
  event.preventDefault();//이벤트의 기본값을 막는 방법
  const currentValue = input.value;
  paintGreeting(input.value);
  saveName(currentValue);
}

function askForName(){
  form.classList.add(SHOWING_CN);
  form.addEventListener('submit',handleSubmit);
}

function paintGreeting(text){
  form.classList.remove(SHOWING_CN); //텍스트를 색칠하려면 폼을 숨겨야함\
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `Hello ${text}`
}


function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if(currentUser === null){
    askForName();
  }else{
    paintGreeting(currentUser);
  }
}

function init(){
  loadName();
}
 init();
