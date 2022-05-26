//key = 2da02cc21ebe43e993b105108221405

//Elements
const app = document.querySelector(".weather");
const temp = document.querySelector(".temp");
const dateOutput = document.querySelector(".date");
const timeOutput = document.querySelector(".time");
const info = document.querySelector(".info");
const cityname = document.querySelector(".name");
const icon = document.querySelector(".icon");
const form = document.querySelector(".location");
const search = document.querySelector(".search");
const btn = document.querySelector(".btn");
const feel = document.querySelector(".feel");
const humid = document.querySelector(".humid");
const wind = document.querySelector(".wind");
const cities = document.querySelectorAll(".city");

//Default city
let cityInput = "Delhi";

//Click for panel cities
cities.forEach((city)=>{
    city.addEventListener("click",(e)=>{
        cityInput = e.target.innerHTML;

        fetchWeatherData();

        //fade screen
        app.style.opacity = "0";

    });
})

//submit event for form
form.addEventListener("submit",(e)=>{
    if(search.value.length == 0){
        console.log("ads");
        alert("Please Enter City Name");
    }
    else{
        cityInput = search.value;

        fetchWeatherData();

        search.value = "";

        app.style.opacity = "0";
    }

    e.preventDefault();
});



function fetchWeatherData(){
    //fetching data and dynamically adding cityinput.
    fetch(`http://api.weatherapi.com/v1/current.json?key=2da02cc21ebe43e993b105108221405&q=${cityInput}`)

    //converting data from json to js object

    .then(response => response.json())
    .then(data => {
        console.log(data);

        temp.innerHTML = data.current.temp_c + "&#176;";
        info.innerHTML = data.current.condition.text;

        const date = data.location.localtime;
        const y = parseInt(date.substr(0,4));
        const m = parseInt(date.substr(5,2));
        const d = parseInt(date.substr(8,2));
        const time = date.substr(11);

        //changing format of date
        dateOutput.innerHTML = `${d}/ ${m}/ ${y}`;
        timeOutput.innerHTML = time;
        cityname.innerHTML = data.location.name;

        //getting icon
        const iconId = data.current.condition.icon.substr("//cdn.weatherapi.com/weather/64x64/".length);
        icon.src = "./icons/" + iconId;
        
        //info about weather
        feel.innerHTML = data.current.feelslike_c + "&#176;";
        humid.innerHTML = data.current.humidity + "%";
        wind.innerHTML = data.current.wind_kph + "km/h";

        let timeofday = "day";
        const code = data.current.condition.code

        //change to night if city time is night
        if(!data.current.is_day){
            timeofday = "night";
        }

        if(code==1000){
            //bg to clear
            app.style.backgroundImage = `url(./images/${timeofday}/clear.jpg)`;
            btn.style.background = "#d2691e";
            if(timeofday == "night"){
                btn.style.background = "#181e27";
            }
        }
        //cloudy
        else if(
            code == 1003 ||
            code == 1006 ||
            code == 1009 ||
            code == 1030 ||
            code == 1069 ||
            code == 1035 ||
            code == 1087 ||
            code == 1073 ||
            code == 1076 ||
            code == 1079 ||
            code == 1082 
        ){
            app.style.backgroundImage = `url(./images/${timeofday}/cloudy.jpg)`;
            btn.style.background = "#d2691e";
            if(timeofday == "night"){
                btn.style.background = "#181e27";
            }
        }

        else if(
            code == 1063 ||
            code == 1069 ||
            code == 1072 ||
            code == 1150 ||
            code == 1153 ||
            code == 1180 ||
            code == 1183 ||
            code == 1186 ||
            code == 1189 ||
            code == 1192 ||
            code == 1195 ||
            code == 1204 ||
            code == 1207 ||
            code == 1240 ||
            code == 1243 ||
            code == 1246 ||
            code == 1249 ||
            code == 1252
        ){
            app.style.backgroundImage = `url(./images/${timeofday}/rainy.jpg)`;
            btn.style.background = "#d2691e";
            if(timeofday == "night"){
                btn.style.background = "#181e27";
            }
        }

        else{
            app.style.backgroundImage = `url(./images/${timeofday}/snowy.jpg)`;
            btn.style.background = "#d2691e";
            if(timeofday == "night"){
                btn.style.background = "#181e27";
            }
        }
        app.style.opacity = "1";
    })

    .catch(() =>{
        alert("City Not Found, Please Try Again");
        app.style.opacity = "1";
    });
}

fetchWeatherData();

app.style.opacity = "1";
