// This wiil handle the app 
// 

// -- DOM Queries -- //
const chatList =  document.querySelector('.chat-list'); // the dialog pannel
const newChatForm = document.querySelector('.new-chat');
const newNameForm = document.querySelector('.new-name');
const updateMsg = document.querySelector('.update-mssg');

const rooms = document.querySelector('.chat-rooms');

//add a new chat 
newChatForm.addEventListener('submit', e=>{
    e.preventDefault();
    const message = newChatForm.message.value.trim() // SOS when you are having an id you can acces it by dot notenation

    chat.addChat(message)
        .then(()=> newChatForm.reset()) // when the promise done just reset the form 
        .catch((err) => console.log(err))

})

// add a new name 
newNameForm.addEventListener('submit', e => {
    e.preventDefault();

    const newName = newNameForm.name.value.trim();

    // call the method to update the name 
    chat.updateUsername(newName); // Update the name. This not done asychronous

    newNameForm.reset(); // Reset the new name form.
    
    //show then hide the updateted message
    updateMsg.innerText = `Your new name is: ${newName}`;

    setTimeout(()=>updateMsg.innerText='',3000); // this wiil hide it affter three seconds
})

//update the chatroom
rooms.addEventListener('click',e=>{

    e.preventDefault();
    if(e.target.tagName === 'BUTTON'){
        chatUI.clear(); // clear the text chat window
        chat.updateRoom(e.targer.getAttribute('id')); // update the room

        // now must start to listen to the new room.
        //get chats and render//
        chat.getChats(data => {
            chatUI.render(data);
        })


    }
    console.log(e);

})


//check local storage for a name if this exist 
// so the user dont start from anonymous every fucking time
//  TERNARY OPERATOR //
const username = localStorage.username ? localStorage.username : 'anonymous' // if this is value exists then returns this value else returns anonymoys 


// -- Class Instances -- //
const chatUI = new ChatUI(chatList);
const chat = new Chatroom('general',username)



//get chats and render//
chat.getChats(data => {
    chatUI.render(data);
})
