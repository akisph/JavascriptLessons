const clock = document.querySelector('.clock');



const tick = () => {
    // This is the function that controls the ticking //

    const now = new Date();

    const h = now.getHours(); // get the hours
    const m = now.getMinutes(); // get the minutes
    const s = now.getSeconds(); // get the seconds

    console.log(h,m,s);

    //now that we have the clock values we can
    // create the html constant.

    const html = `
        <span> ${h} </span> :
        <span> ${m} </span> :
        <span> ${s} </span> 
    `;

    clock.innerHTML  = html;

}

setInterval(tick, 1000); //this setInsterval calls the function 
                        // every n miliseconds


                        
