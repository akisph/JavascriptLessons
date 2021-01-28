const form = document.querySelector('.signup-form')
/* capture the form by class name */






const feedbackUsername = document.querySelector('.feedbackUsername')
const feedbackEmail = document.querySelector('.feedbackEmail')

// feedback field that we use in case of wrong password //



form.addEventListener('submit', e => {
    /* dont want the page to refresh, which does by default*/
    e.preventDefault(); /* prevent default action of event */
    
    // Validation //
    const username = document.querySelector('#username') 
    /* with # can qyuery select by id  */
    /* when we get an input field we can access its value field*/
    const usernamePattern = /^[a-zA-Z0-9]{6,20}$/

    if (usernamePattern.test(username)){
        feedbackUsernamme.textContent = 'The password is incorrect';

    }else{
        feedbackUsername.textContent = 'The password is correct';
    }

   

});


// For the email //
const email = document.querySelector('#email')
// live feedback  //
email.addEventListener('keyup',e => {
    e.preventDefault();
    // e.target.value --> get the email with a different way //

    const emailPattern =/\S+@\S+\.\S+/;

    if (emailPattern.test(e.target.value)){

        email.setAttribute('class','success');

    }else{
        email.setAttribute('class','error');


    }
})