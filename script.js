//key = 2da02cc21ebe43e993b105108221405

//Elements
const app = document.querySelector(".weather");
const temp = document.querySelector(".temp");
const dateOutput = document.querySelector(".date");
const timeOutput = document.querySelector(".time");
const info = document.querySelector(".info");
const cityname = document.querySelector(".name");
const icon = document.querySelector(".icon");
const form = document.querySelector("#location");
const search = document.querySelector(".search");
const btn = document.querySelector(".btn");
const cloud = document.querySelector(".cloud");
const humid = document.querySelector(".humid");
const wind = document.querySelector(".wind");
const cities = document.querySelector(".city");

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

})