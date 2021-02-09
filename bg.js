const body = document.querySelector("body");


const IMG_NUMBER = 4;

// function handleImgLoad(){
//   console.log("finished loading");
// }

function paintImage(imgNumber){
  const image = new Image();
  image.src = `img/${imgNumber +1}.jpg`;
  image.classList.add("bgImage");
  body.appendChild(image);
  // image.addEventListener("loadend",handleImgLoad); // API에서 이미지 받아올때 사용해야함
}

function genRandom(){
  const number = Math.floor(Math.random() * IMG_NUMBER );
  console.log(number);
  return number;
}

function init(){
  const randomNumber = genRandom();
  paintImage(randomNumber);
}
init();
