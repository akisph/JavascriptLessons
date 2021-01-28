
// HTTP REQUESTS //
alert('start');
const getTodos = (resource,callback) => {
    return new Promise((resolve,reject) =>{
        const request = new XMLHttpRequest();

        request.addEventListener('readystatechange',() => {

            if (request.readyState===4 && request.status === 200 ){
                const data = JSON.parse(request.responseText); // converts json strings into javascript objects
                // practically it is like we transform the string (json) into a dictionary(python)

                resolve(data);
                //callback(undefined,data); // We can pass undefinied because we dont have error in this situation
            }else if(request.readyState === 4 ){
                //callback('could not fetch the datas',undefined);
                reject('could not fetch the datas');
            };
        });

        request.open('GET',resource);
        request.send();
    });

}


getTodos('https://jsonplacehwolder.typicode.com/todos/').then( data=>{
    console.log('promise resolve:',data);
}).catch(err =>{
    console.log('promise rejected:',err);
})