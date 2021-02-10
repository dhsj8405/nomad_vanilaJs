const weather = document.querySelector(".js-weather");

const API_KEY = '0a7053e8af7d0fc587c91006edc7ddd2';
const COORDS = 'coords';


function getWeather(lat,lng){
  fetch(`https:api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
  ).then(function(response){
  return response.json();
    //fetch(`~~`).then(function(json){
    //console.log(json);
    // function(json) 변수이름 json이유는 JSON데이터를 받을것이기때문
    // 큰 console창에서
  })
  .then(function(json){
    const temperature = json.main.temp;
    const place = json.name;
    weather.innerText = `${temperature} @ ${place}`;
});
  //*주의 : 따옴표(')가아닌 backtick(`)을 사용해야함
  //units=metric 썹시단위로 사용하기위해
    //개발자도구-Network-All-weather?~~~~~-Headers- Request URL복사후 주소창복붙 - "temp" : *** 의 단위를 모르므로 poenWeatherMap에서 unitformat을 확인해야함
  //then() : 함수호출 (데이터가 완전히 들어온 다음 호출)
    //사용이유 : 위에 fetch가 완료되길 기다려야 하기 때문,
              // 기다리지 않고 다음작업 지시하면  fetch가 완료되지 않을 수 있
              // =서버로부터 데이터가 들어올때까지 기다려야함

}

function saveCoords(coordsObj){
  localStorage.setItem(COORDS, JSON.stringify(coordsObj))
}

//좌표를 가져오는데 성공했을때 처리하는 함수 /position 인자를 가짐
function handleGeoSucces(position){
  //console.log(position); //html에서 위치허용하고 콘솔창확인후 coords누르면 위도 경도 확인 가능함
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    // latitude : latitude,
    // longitude : longitude
    //위와같이 객체의key 이름, 객체의 변수 이름이 같을때는 밑에처럼 입력가능
    latitude,
    longitude
  };
  saveCoords(coordsObj);
  getWeather(latitude,longitude);
}

function handleGeoError(){
  console.log("Cant access geo location")
}

//좌표를 요청하는 함수
function askForCoords(){
  navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError)
}

function loadCoords(){
  const loadedCoords = localStorage.getItem(COORDS);
  if(loadedCoords === null){
    askForCoords();
  }else{
    const parsedCoords = JSON.parse(loadedCoords);
    //console.log(parsedCoords);
    getWeather(parsedCoords.latitude, parsedCoords.longitude);
  }
}
function init(){
  loadCoords();
}

init();
