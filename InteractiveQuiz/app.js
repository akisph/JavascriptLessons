const correctAnswers = ["B","B","B","B"];

const form = document.querySelector(".quiz-form");

const resultContainer = document.querySelector(".result"); // Handler on th result container

form.addEventListener('submit', e => {

    e.preventDefault(); // Prevent the default refresh of the submit //

    let score = 0; // This score VARIABLE that we will update

    // All the User Answers 
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    console.log(userAnswers);
    // check answers 
    userAnswers.forEach((answer,index) => {
        // If the answer is correct then 
        if (answer === correctAnswers[index]){
            score += 25;
        }

    }); 
    // ---------------------------------------------- //
    // Enable result showing on page.
    

    resultContainer.classList.remove('d-none'); //with this remove the d-none part of the class that means we can now display the quiz.
    
    //resultContainer.querySelector('span').textContent = `${score}%` ; // instead initial price make span has the score
    let output = 0; 
    const timer = setInterval(() => {

        resultContainer.querySelector('span').textContent = `${output}%`;
        if (output === score) {
            clearInterval(timer);

        }else{
            output++;
        }

    },10);


    // ---------------------------------------------- //
    // WINDOW OBJECT //
    // The ultimate javascript object //
    // Whatever we do is saved in the window object //
    scrollTo(0,0);

    /*
    // ---------------------------------------------- //
    // set interval 
    let i = 0;
    // This function will repeat the callback function every 3sec.
    const timer = setInterval(()=> {
        console.log('hello')
        // if we want to do it for a speciffic ammount of time then
        i++;
        if (i===5){
            clearInterval(timer);
            // with the timer 
        }
    },3000 ); 
    // So it is good for repeating jobs.
    // ---------------------------------------------- //
    */



    console.log(score);

})