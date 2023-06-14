let input = document.querySelector('.card .search input');
let button = document.querySelector(".card .search button");
let ApiKay = "05178df06f7ce03ade572681cf608de6";

async function cheack(city) {
  let ApiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;

  let respone = await fetch(`${ApiUrl} ${city} &appid=${ApiKay}`);
    if (respone.status === 404) {
      document.querySelector(".card .error").style.display = "block";
    } else {
       let data = await respone.json();
       console.log(data);
       document.querySelector(".card .wither .city").innerHTML = data.name;
       document.querySelector(".card .wither .deg").innerHTML =
         data.main.temp + "°C";
       document.querySelector(".card .wither .details .hum ").innerHTML =
         data.main.humidity + "%";
       document.querySelector(".card .wither .details .wind ").innerHTML =
         data.wind.speed + "KM/H";
       if (data.weather[0].main === "Clear") {
         document.querySelector(".card img ").src =
           "./img/sun-logo-and-sun-icon-vector-design-template-2BP8KMT.jpg";
       } else if (data.weather[0].main === "Rain") {
         document.querySelector(".card img ").src = "./img/download.png";
       } else if (data.weather[0].main === "Clouds") {
         document.querySelector(".card img ").src = "./img/download (3).png";
       } else if (data.weather[0].main === "Drizzle") {
         document.querySelector(".card img ").src = "./img/download (1).png";
       } else if (data.weather[0].main === "Mist") {
         document.querySelector(".card img ").src = "./img/download (4).png";
       } else if (data.weather[0].main === "Haze") {
         document.querySelector(".card img ").src = "./img/download (2).png";
       } else if (data.weather[0].main === "ٍٍٍٍSnow") {
         document.querySelector(".card img ").src = "./img/weather-snow-cloud-symbol-blue-color-vector-905294.jpg";
       }
       document.querySelector(".card .wither").style.display = "flex";

      document.querySelector(".card .error").style.display = "none";

    }
 
}

button.addEventListener("click", () => {
cheack(input.value);
});
