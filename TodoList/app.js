const addForm = document.querySelector('.add');
const list  = document.querySelector('.todos');

const generateTodoTemplate = todo => {

    const html = ` 
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span> ${todo}</span>        
        <i class="far fa-trash-alt delete"></i>
    </li>`;

    console.log(html);
    list.innerHTML += html;

}

addForm.addEventListener('submit',e =>{

    e.preventDefault(); // 
    let todo = addForm.add.value.trim(); // trim(): this is to cut any spaces infront of the text
    
    console.log(todo);


    generateTodoTemplate(todo);
    addForm.reset(); //This reset all the input fields inside that form 
    

});

// DELETE TODOS
list.addEventListener('click',e => {
    e.preventDefault();
    // check if the class list of the element contains a "delete"  
    if (e.target.classList.contains('delete')){
        // with parentElemet gets the parent of this tag
        e.target.parentElement.remove();
    }

})