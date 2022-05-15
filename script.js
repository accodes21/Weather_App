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
const cloud = document.querySelector(".cloud");
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
        // app.style.opacity = "0";

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

        // app.style.opacity = "0";
    }

    e.preventDefault();
});

function DayofWeek(day, month, year){
    const weekday = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];
    return weekday[new Date(`${day}/${month}/${year}`).getDay()];
};

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
        dateOutput.innerHTML = `${DayofWeek(d, m, y)} ${d}, ${m} ${y}`;
        timeOutput.innerHTML = time;
        cityname.innerHTML = data.location.name;

        //getting icon
        const iconId = data.current.condition.icon.substr("//cdn.weatherapi.com/weather/64x64/".length);
        // icon.src = 
    })
}
