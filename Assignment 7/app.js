let inputValue = document.getElementById("cityinput");
let button = document.getElementById("btn");
let temp = document.getElementById("temp");
let conditions = document.getElementById("conditions");
let cityname = document.getElementById("cityname");
let img = document.getElementById("weatherimg");
let body = document.getElementsByTagName("BODY")[0];
// let mintemp = document.getElementById("tempmin");
// let maxtemp = document.getElementById("tempmax");
// const url = 'https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=50a7aa80fa492fa92e874d23ad061374';
let minmax = document.getElementById("minmax");


button.addEventListener('click', function () {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputValue.value + '&appid=50a7aa80fa492fa92e874d23ad061374')
        .then((response) => {
            return response.json();
        })
        .then(data => {
            console.log(data)
            cityname.innerHTML = data.name;
            temp.innerHTML = Math.round(data.main.temp - 273);
            conditions.innerHTML = data.weather[0].description;
            let tempIcon = data.weather[0].icon;
            img.src = "http://openweathermap.org/img/wn/" + tempIcon + "@2x.png";
            // mintemp.innerHTML = Math.round(data.main.temp_min-273);
            // maxtemp.innerHTML = Math.round(data.main.temp_max-273);
            minmax.innerHTML = "min " + Math.round(data.main.temp_min - 273) + "&degC  / max " + Math.round(data.main.temp_max - 273) + "&degC";
            inputValue.value = "";

            if (data.weather[0].id < 250) {
                body.style.backgroundImage = "url('https://images.unsplash.com/photo-1605727216801-e27ce1d0cc28?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80')";
            }
            else if (data.weather[0].id < 350) {
                body.style.backgroundImage = "url('https://images.unsplash.com/photo-1556485689-33e55ab56127?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80')";
            }
            else if (data.weather[0].id < 550) {
                body.style.backgroundImage = "url('https://images.unsplash.com/photo-1496034663057-6245f11be793?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80')";
            }
            else if (data.weather[0].id < 650) {
                body.style.backgroundImage = "url('https://images.unsplash.com/photo-1491002052546-bf38f186af56?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1083&q=80')";
            }
            else if (data.weather[0].id < 800) {
                body.style.backgroundImage = "url('https://images.unsplash.com/photo-1471922694854-ff1b63b20054?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80')";
            }
            else if (data.weather[0].id === 800) {
                body.style.backgroundImage = "url('https://images.unsplash.com/photo-1617142137869-325955e2d3cb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80')";
            }
            else if (data.weather[0].id > 800) {
                body.style.backgroundImage = "url('https://images.unsplash.com/photo-1604503590948-73bdc05edc76?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=991&q=80')";
            }
        })

        .catch(err => alert("Wrong city name!"));

})