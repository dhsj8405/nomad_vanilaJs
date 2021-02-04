/*
//-------------let,var,const(변수,상수)-------------------------

// 변수
let a = 221; // let,var은 변수가 바뀌는 걸 허
let b = a - 5;
a = 4;
console.log(b,a);  //216 4


// 상수
const a = 221;


//----------------------Data Type on JS------------------------

 // String
const what = "Woo";


// Boolean
const wat = fasle;


// float
const wat = 55.1;


// number
const wat = 54;


// ------------------------ Array(배열,리스트)----------------------


const something = "Something";
const daysOfWeek = ["Mon" , "Tue", "Wed", "Thu", "Fri" , "Sat", "Sun", true, 34, something];
console.log(daysOfWeek);
console.log(daysOfWeek[2]); //3번째요일


//---------------------------Object(객체)---------------------------

const nicoInfo = {
  name : "Nico",
  age:33,
  gender:"Male",
  isHandsome:true,
  favMovies: ["Along the gods", "LOTR","Oldboy"],     //배열
  favFood: [              //객체안의 배열
    {
      name:"Kimchi",
      fatty: false
    },
    {
      name:"Cheese burger",
      fatty:true
    }
  ]
}
console.log(nicoInfo.gender); // Male
nicoInfo.gender = "Female";
console.log(nicoInfo.gender); // Female

//--------------------------function(함수)---------------------------

function sayHello(name, age){
  console.log(' Hello! ', name, " you have ", age, " years of age. ");
  console.log(`Hello ${name} you are ${age} years old`); // `` :백틱
}
sayHello("Nicolas",15);


function sayHello(name, age){
  return `Hello ${name} you are ${age} years old`;
}
const greetNicolas = sayHello("Nicolas",15);
console.log(greetNicolas);


const calculator = {
  plus: function(a,b){
    return a+b;
  }
}
            //console.log(greetNicolas)
const plus = calculator.plus(5,5);         //console.log(greetNicolas) 와 유사한 형태
console.log(plus)

//----------------------------DOM Function--------------------------
const title = document.getElementById("title"); //js에서 html의 id식별자 선택하는 방법
console.dir(title); // title로 할 수 있는 모든 것을 출력해줌
console.dir(document);


const title = document.querySelector("#title") // 노드의 첫번째 자식을 반환 = document로가서 모든 자식들 중에서  찾으려고 하는 = id로 선택해보겠다는 뜻 #id_name  *클래스 선택은 인자에 .title
//const title = document.getElementById("title"); //js에서 html의 id식별자 선택하는 방법
console.error("Fuck");
title.innerHTML = "Hi! From Js"; // html 본문 내용이 Hi! From Js로 바뀜
title.style.color = "red"
document.title = "I own you now"

//--------------------event handlers(이벤트)---------------------------
//ex1
const title = document.querySelector("#title")
function handleResize(){
  console.log("Resized");
}
window.addEventListener("resize",handleResize) //내가 필요한 시점에 함수 호출
//window.addEventListener("resize", handleResize()) //지금 함수 호출

//ex2
const title = document.querySelector("#title")
function handleClick(){
  title.style.color = "red";
}
title.addEventListener("click",handleClick) //내가 필요한 시점에 함수 호출
//title.addEventListener("Click", handleClick()) //지금 함수 호출

//https://developer.mozilla.org/ko/docs/Web/Events //js_dom 이벤트참조 MDN

//-------------------------------if,else,and,or(조건문)-------------------------------------
//ex1
if(10 === 5){
  console.log("hi");
}
else if("10"==="10"){
  console.log("hw");
}
else{
  console.log("ho");
}

//ex2
if(20> 5 && "nicolas" ==="nicolas"){
  console.log("yes");
}
else{
  console.log("no");
}

// ex3 : css속성을 js에서 다루는방법 //권장되지않음
const title = document.querySelector("#title")
const BASE_COLOR = "rgb(52, 73, 94)"; //"#34495e"를 BASE_COLOR에넣고 console.log 실행하면 콘솔에 rgb값 나옴
const OTHER_COLOR = "#7f8c8d";

function handleClick(){
  // console.log(title.style.color); //실행하면 rgb값이 콘솔에 나옴
  const currentColor = title.style.color;
  if(currentColor === BASE_COLOR){
    title.style.color = OTHER_COLOR;
  }
  else {
    title.style.color = BASE_COLOR;
  }
}
function init(){
  title.style.color = BASE_COLOR;
  title.addEventListener("click",handleClick) //내가 필요한 시점에 함수 호출
}
init();

// ex3-1 css와 js 확실하게 구분하기
   //한 속성에 클래스가 하나이상 있으면 실행안
const title = document.querySelector("#title");
const CLICKED_CLASS = "clicked";
function handleClick(){
  const currentClass = title.className;
  if(CLICKED_CLASS !== currentClass){
    title.className = CLICKED_CLASS;
  }
  else {
    title.className = "";
  }
}
function init(){
  title.addEventListener("click",handleClick);
}
init();




// ex3-2 css와 js 확실하게 구분하기

const title = document.querySelector("#title");
const CLICKED_CLASS = "clicked";
function handleClick(){
  title.classList.toggle(CLICKED_CLASS); //클래스가 있는지 체크해서 있으면 add 아니면 remove 밑에 함수랑 같은기능
}
  // function handleClick(){
  //   const hasClass = title.classList.contains(CLICKED_CLASS);
  //   if(!hasClass){
  //     title.classList.add(CLICKED_CLASS);
  //   }
  //   else {
  //     title.classList.remove(CLICKED_CLASS);
  //   }
  // }
function init(){
  title.addEventListener("click",handleClick);
}
init();
*/
