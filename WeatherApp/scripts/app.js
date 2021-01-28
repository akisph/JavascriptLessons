// all kind of DOM manipulation and Event handler


const  cityForm = document.querySelector('form'); // get the form becasue it is the only form

//get the card element 
const card = document.querySelector('.card'); 

// get the details of the card
const details = document.querySelector('.details');

// image odf time
const time  = document.querySelector('img.time');
const icon = document.querySelector('.icon img');


const updateUI = (data) =>{

    // reobtain the data
    const cityDets = data.cityDets;
    const weather = data.weather;

    // update the detail templates
    // name / weather /  temperature

    details.innerHTML = `
    <h5 class="my-3">
        ${cityDets.EnglishName}
    </h5>
    <div class="my-3">
        ${weather.WeatherText}
    </div>
    <div class="display-4 my-4">                    
        <span>${weather.Temperature.Metric.Value}</span>                    
        <span>&deg;</span>      
    </div>
    `;

    // update the night/day and icon images
    const iconSrc = `img/icons/${weather.WeatherIcon}.svg`
    icon.setAttribute('src',iconSrc);

    let timeSrc = null;
    if (weather.IsDayTime){

        timeSrc = 'img/day.svg';
    }else{
        timeSrc = 'img/night.svg';
    }
    time.setAttribute('src',timeSrc);


    // remove the d-none class show the card will appear
    if (card.classList.contains('d-none')){
        card.classList.remove('d-none');
    };



}


const updateCity = async city => {

    console.log(city);
    // SOS to just call the two function from the forecast.js 
    //     we must inmport the forrecast.js file before the app.js in the HTML file

    const cityDets = await getCity(city);

    const weather = await getCurrentConditions(cityDets.Key);

    return {
        cityDets:cityDets,
        weather: weather
    };

}


cityForm.addEventListener('submit', e => {

    // prevent the default actions
    e.preventDefault();

    const city = cityForm.city.value.trim(); // obtain city value user added

    cityForm.reset(); // reset form now that i have the value

    //update ui with the new city
    updateCity(city)
        .then(data => {updateUI(data);}) 
        .catch(err => console.log(err));



})


//update the card that exist in th yui