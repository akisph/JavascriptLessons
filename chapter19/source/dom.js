// This file is rensponsible for  interacting with the dom
console.log('dom file');

const body = document.querySelector('body');


export const styleBody = () => {
    body.style.background = 'peachbuff';

}


export const addTittle = (text) => {
    const title = document.createElement('h1')
    title.textContent = text;
    body.appendChild(title);

};

