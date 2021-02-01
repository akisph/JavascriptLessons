// addin new chat documents 
// setting up a real-time listener to get new chats
// updating the username 
// updating the room 

class Chatroom{

    // This class is the chatroom we are in
    // Specifically defines the state we are in

    constructor(room,username){
        //define the room we are in 
        this.room = room;
        // define the username is logged in 
        this.username = username;        
        //connect the collection 
        this.chats = db.collection('chats');   
        
        this.unsub;
    }


    // --------------------------------- //
    async addChat(message){
        // add a new chat document
        const now = new Date();

        const chat = {
            message,
            username: this.username,
            room: this.room,
            created: firebase.firestore.Timestamp.fromDate(now)
        };

        // now save that document
        const response = await this.chats.add(chat);

        return response;
    }



    getChats(callback){
        // this function creates a real time listener to 
        //  the changes happened on the database
        //
       this.unsub = this.chats
        .where('room','==',this.room) // where ('property','relation','value')
        // get data where a certain condition is true
        // with this way we enstablish we take only the changes that matters here.
        // 
        .orderBy('created') //choose by which property you order the items you'll get
        // !!! You may follow the error url that will appear to establish some new 
        //      ... rules to the database so we can take them by order
        .onSnapshot(snapshot =>{
            // for each change that we capture.
            snapshot.docChanges().forEach(change => {                
                // check if the change is that we added somthing
                if (change.type === 'added'){
                    // update the ui throught callback function
                    // what ever this callbaxk dunction is 
                    callback(change.doc.data()); // ... 
                    // might just be the a console.log
                };

            });
        });
    }


    updateUsername(username){
        // this function updates the username
        this.username = username;
        localStorage.username = username; // update the username to the local storage

    }

    updateRoom(room){
        //This function update the room
        this.room = room;
        console.log('The new room is: ',room);
        if (this.unsub){
            // only if unsub has a value
            this.unsub(); // unsubscribe for changes //
        }
        
        // must start to listen to new room. !!!
    }


    

}
