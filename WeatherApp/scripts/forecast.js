class Forecast{

    constructor(){
        this.key = '5osqDcRKfncFnjBE39MT9LVfAYbpei8r';
        this.weatherURI = `http://dataservice.accuweather.com/currentconditions/v1/`;
        this.cityURI ='http://dataservice.accuweather.com/locations/v1/cities/search';
    }


    async updateCity(city){

        console.log(city);
        // SOS to just call the two function from the forecast.js 
        //     we must inmport the forrecast.js file before the app.js in the HTML file
    
        const cityDets = await this.getCity(city);
    
        const weather = await this.getCurrentConditions(cityDets.Key);
    
        return {cityDets,weather};
    
    }

    async getCity(city){

        const query = `?apikey=${this.key}&q=${city}`;

        const response = await fetch(this.cityURI + query);

        // we need now to turn the response into data
        const data = await response.json();
        // this may response many cities. 
        // we only want the forst one
        
        return data[0];

    }

    async  getCurrentConditions(id){

        const query = `${id}?apikey=${this.key}`;

        const response = await fetch(this.weatherURI + query);

        const data = await response.json();
    
        return data[0];
    }

    


}


// //-------------------------------------------------------------------------------------//

// // Content all the javascript for retaining data 

// const key = '5osqDcRKfncFnjBE39MT9LVfAYbpei8r' // AccuWeather API key
// // Accuweather gives us only 50 request per day

// // Get the city infos
// const getCity = async (city) =>  {

//     const base  = 'http://dataservice.accuweather.com/locations/v1/cities/search'; // base url for the city location api

//     const query = `?apikey=${key}&q=${city}`;

//     const response = await fetch(base+query);

//     // we need now to turn the response into data
//     const data = await response.json();
//     // this may response many cities. 
//     // we only want the forst one
    
//     return data[0];
 
// }

// // get the weather infos
// const getCurrentConditions = async (id) => {

//     const base = `http://dataservice.accuweather.com/currentconditions/v1/`;

//     const query = `${id}?apikey=${key}`;

//     const response = await fetch(base + query);

//     const data = await response.json();

    
//     return data[0];
// };




// getCity('Athens')
//     .then(data => {
//         console.log(data['Key']);
//         return getCurrentConditions(data['Key']);
//     })
//     .then(data => console.log(data))
//     .catch(err => console.log('there is an error',err));