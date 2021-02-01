// this class handles the ui based on the chats class..
// This class must do two things
//  1. render the chat templates to the DOM
//  2. clear the list of the chats

class ChatUI{

    constructor(list){ 
        this.list = list;// the UL tag from the html that we want to upadte.


    }

    render(data){


        const when = dateFns.distanceInWordsToNow(
            data.created.toDate(),
            {addSuffix: true}
            );

        const html = `
            <li class="list-group-item">
                <span class='username'> ${data.username} </span>
                <span class='message'> ${data.message} </span>
                <div class='time'> ${when} </div>
            </li>       
        `;
        this.list.innerHTML += html;

    }


    clear(){
        this.list.innerHTML = '';
    }

}