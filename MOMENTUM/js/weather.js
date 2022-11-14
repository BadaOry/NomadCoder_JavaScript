// [ #8.0 실습 01 ] navigator 를 사용해 geolocation 정보 받아보기
// ▼ JavaScript 가 더 많은 정보를 줄 것이기 때문에, 정보를 알아보기 위해 position 이란 이름의 공간을 남겨둘게요
// function onGeoOk(position) {
//     // console.log(position);  // ▶ GeolocationPosition object 를 받아서 coords 에서 latitude, longtitude 요소를 찾을 수 있음
//     const lat = position.coords.latitude;
//     const lng = position.coords.longitude;
//     console.log("You Live in", lat, lng);
// }

// function onGeoError() {
//     alert("Can't find you. No weather for you")
// }
// navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
// ▲ getCurrentPosition 함수는 성공했을 때의 콜백함수, 에러 발생시의 콜백함수를 각각 인자로 받음
// ▶ 구글링  해보면, success 와 error 를 각각 받으며
//    success 함수는 GeolocationPosition object 한 개를 입력받음
//    = JavaScript 가 GeolocationPosition object 를 준다는 뜻
//    = user 의 위치정보를 받는다는 뜻
// ▶ html 띄워보면, 브라우저가 내 위치를 알고싶다고 allow 해달라고 함



// [ #8.0 실습 02 ] 받아온 lat, lng 을 장소로 바꿔줄 서비스 사용하기
//                 : 그 전에, API 계정을 열어야 함
//                   ▶ openweathermap.org/api 로 이동해서 계정 만들기


// [ #8.1 실습 01 ] API 와 fetch 를 사용해 날씨 가져오기
//                 : https://openweathermap.org/current 에서 lat, lng 을 사용해 날씨 땡겨오는 API 를 찾음 !
//                   ▶ https://api.openweathermap.org/data/2.5/weather?lat=37.5420984&lon=126.9433485&appid=16b5a53f9e4bcd0b485086cb1e89c63a 를
//                      인터넷 주소창에 올려보면 JSON 형식으로 정보를 응답해 줌
const API_KEY = "16b5a53f9e4bcd0b485086cb1e89c63a";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    // console.log("You Live in", lat, lng);
    // const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}`
    // console.log(url);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    // * fetch : promise 임
    // * promise : 당장 뭔가 일어나지 않고 시간이 좀 걸린 뒤에 일어나는 일
    // fetch(url); // ▶ 콘솔에서는 아무것도 안보여주지만, 개발자도구 Network 에 가면 request 에 뭐가 뜨는게 보임
    //    fetch 를 사용해서 JavaScript 로, url 에 실제로 갈 필요 없이 JavaScript 가 url 을 불러줄 것임
    //    ▷ 그런데 확인해보니 섭씨가 아니라 화씨온도네. doc 가서 보니 units 를 url 에 같이 보낼 수 있으므로, 
    //       원래 url 에 "&units=metric"
    fetch(url)
    .then(response => response.json())
    .then(data => { 
        // console.log(data.name, data.weather[0].main);
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}

function onGeoError() {
    alert("Can't find you. No weather for you")
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);