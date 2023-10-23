function displayDateTime() {
    var now = new Date();

    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    var day = now.getDate();
    var month = now.getMonth() + 1;
    var year = now.getFullYear();

    var timeString = hours + ":" + minutes + ":" + seconds;
    var dateString = day + "/" + month + "/" + year;

    var dateTimeString = dateString + " " + timeString;

    document.getElementById("dateTime").innerHTML = dateTimeString;
}

setInterval(displayDateTime, 1000);

fetch("https://api.sl.se/api2/realtimedeparturesV4.json?key=6715cdefc9e747d29120b0fa3f90fd09&siteid=7000&timewindow=10")
.then (res => res.json())
.then (res => res.ResponseData.Buses.forEach((element) => {
    busesData(element)  
}
))

let busesData = (data) => {
    
    newDiv = document.createElement('div');
    numberDiv = document.createElement('div');
    numberDiv.textContent = data.LineNumber
    destinationDiv = document.createElement('div');
    destinationDiv.textContent = data.Destination
    timeDiv = document.createElement('div');
    timeDiv.textContent = data.DisplayTime
    stopDiv = document.createElement('div');
    newDiv.setAttribute('class', 'slbozo');
    stopDiv.textContent = data.StopPointDesignation
    if(data.GroupOfLine == "blåbuss"){
        numberDiv.setAttribute('id', 'blabuss')
    }
    else if(data.GroupOfLine != "blåsbuss"){
        numberDiv.setAttribute('id', 'rodbuss')
    }
    const img = document.createElement("img");
    img.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Bus-logo.svg/480px-Bus-logo.svg.png";
    img.setAttribute('class', 'icon')
    document.body.appendChild(img);
    newDiv.append (img, destinationDiv,  numberDiv,  timeDiv,  stopDiv)
    let slElm = document.getElementById('div4');
    slElm.append(newDiv)
}

fetch("https://api.sl.se/api2/realtimedeparturesV4.json?key=6715cdefc9e747d29120b0fa3f90fd09&siteid=7006&timewindow=30")
.then (res => res.json())
.then (res => res.ResponseData.Trains.forEach((element) => {
   trainData(element)  
}
))
let trainData = (data) => {
    
    newDiv5 = document.createElement('div');
    number2Div = document.createElement('div');
    number2Div.textContent = data.LineNumber
    destination2Div = document.createElement('div');
    destination2Div.textContent = data.Destination
    time2Div = document.createElement('div');
    time2Div.textContent = data.DisplayTime
    stop2Div = document.createElement('div');
    newDiv5.setAttribute('class', 'slbozo');
    stop2Div.textContent = data.StopPointDesignation
    const img = document.createElement("img");
    img.src = "https://cdn.discordapp.com/attachments/1146526593020329994/1164517664627118100/traing.png?ex=65438096&is=65310b96&hm=d643b6324f1249ed9b2668af93de1171e8d30be9422c405acf1323e424a60d29&";
    img.setAttribute('class', 'icon')
    document.body.appendChild(img);
    newDiv5.append (img, destination2Div,  number2Div,  time2Div,  stop2Div)
    let sltrainElm = document.getElementById('div4');
    sltrainElm.append(newDiv5)
}

fetch("https://api.openweathermap.org/data/2.5/weather?lat=59.3251172&lon=18.0710935&units=metric&appid=107394d6e5f911fb0c60357aad165d33")
.then (res => res.json())
.then (res => weatherData (res))

let weatherData = (data) => {
    newDiv2 = document.createElement('div');
    tempDiv = document.createElement('h3');
    tempDiv.textContent = (`Tep Nu - ${data.main.temp} °C`)
    tempDiv.setAttribute("class", "col-6")
    tempMaxDiv = document.createElement('div');
    tempMaxDiv.textContent = (`Max: ${data.main.temp_max} °C`)
    tempMaxDiv.setAttribute("class", "col-4")
    tempMinDiv = document.createElement('div');
    tempMinDiv.textContent = (`Min: ${data.main.temp_min} °C`)
    tempMinDiv.setAttribute("class", "col-4")
    howItFeels = document.createElement('div');
    howItFeels.textContent = (`Feels like: ${data.main.feels_like} °C`)
    howItFeels.setAttribute("class", "col-4")
    pressureDiv = document.createElement ('div')
    pressureDiv.textContent = (`${data.main.pressure} hPa`)
    pressureDiv.setAttribute("class", "col-4")
    weatherDescriptionDiv = document.createElement('div');
    weatherDescriptionDiv.textContent = data.weather[0].description
    weatherDescriptionDiv.setAttribute("class", "col-4")
    humidityDiv = document.createElement('div');
    humidityDiv.textContent = (`Humidity: ${data.main.humidity} %`)
    humidityDiv.setAttribute("class", "col-4")
    mainWeatherDiv = document.createElement('div');
    mainWeatherDiv.textContent = data.weather[0].main
    mainWeatherDiv.setAttribute("class", "col-4")
    weatherIconDiv = document.createElement('img')
    weatherIconDiv.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    weatherIconDiv.setAttribute("id", "iconweather")
    weatherIconDiv.setAttribute("class", "col-9")
    windDiv = document.createElement('div')
    windDiv.textContent =  (`${data.wind.speed} m/s W`)
    windDiv.setAttribute("class", "col-4")  
    countryDiv = document.createElement ('h2')
    countryDiv.textContent = (`${data.name}, ${data.sys.country} `)
    countryDiv.setAttribute ('class', 'titelcountry')
    visibilityDiv = document.createElement('div')
    visibilityDiv.textContent = (`Visibility: ${data.visibility}m`)
    visibilityDiv.setAttribute("class", "col-4")  
    newDiv2.append(countryDiv, tempDiv, weatherIconDiv, howItFeels, mainWeatherDiv, weatherDescriptionDiv, windDiv, pressureDiv, humidityDiv, visibilityDiv, tempMaxDiv, tempMinDiv) 
    let weatherElm = document.getElementById('div5');
    weatherElm.append(newDiv2)
    newDiv2.setAttribute('class', 'row')    
}   

fetch("https://api.openweathermap.org/data/2.5/forecast?lat=59.3251172&lon=18.0710935&units=metric&appid=107394d6e5f911fb0c60357aad165d33")
.then (res => res.json())
.then (res =>  res.list.forEach((element) => {
    forecastData(element)}))

let forecastData = (data) => {
    if (data.dt_txt.slice(11) == "21:00:00"){
    newDiv3 = document.createElement('div');
    tempMaxMinDiv = document.createElement('div');
    tempMaxMinDiv.textContent = (`${data.main.temp_max}/${data.main.temp_min} °C`)
    textDiv = document.createElement('div')
    textDiv.textContent = (`${data.dt_txt}`)
    forcastIconDiv = document.createElement('img')
    forcastIconDiv.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    forcastIconDiv.setAttribute("class", "forcastIconDiv")
    descriptionDiv = document.createElement('div')
    descriptionDiv.textContent = `${data.weather[0].description}`
    newDiv3.append(textDiv, forcastIconDiv, tempMaxMinDiv, descriptionDiv)
    let forecastElm = document.getElementById('div5');
    forecastElm.append(newDiv3)
    newDiv3.setAttribute('class', 'layoutgrid')
    }  
}






fetch('https://api.nytimes.com/svc/books/v3/lists/full-overview.json?api-key=xdTyo5mVsLC0Q0mZI0fJQIiQs4iAAbBF')
.then (res => res.json())
.then (res =>  res.results.lists[0].books.slice(0, 5).forEach((element) => {
   bookreview(element)}))

let bookreview = (data) => {
    newDiv4 = document.createElement('div');
    rankDiv = document.createElement('h1');
    rankDiv.textContent = (`${data.rank}.`)
    titleDiv = document.createElement('h3');
    titleDiv.textContent = (`${data.title}`)
    authorDiv = document.createElement('div');
    authorDiv.textContent = (`By ${data.author}`)
    newDiv4.append(rankDiv, titleDiv, authorDiv)
    let bookreviewElm = document.getElementById('div6');
    bookreviewElm.append(newDiv4)
    newDiv4.setAttribute('class', 'layoutgrid2')
}