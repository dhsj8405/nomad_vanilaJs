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
*/
//----------------------------DOM Function--------------------------

console.dir(title); // title로 할 수 있는 모든 것을 출력해줌
console.dir(document);

const title = document.getElementById("title"); //js에서 html의 id식별자 선택하는 방법
const title = document.querySelector("#title") // 노드의 첫번째 자식을 반환 = document로가서 모든 자식들 중에서  찾으려고 하는 = id로 선택해보겠다는 뜻 #id_name  *클래스 선택은 인자에 .title
console.error("Fuck");
title.innerHTML = "Hi! From Js"; // html 본문 내용이 Hi! From Js로 바뀜
title.style.color = "red"
document.title = "I own you now"
