
function getUserByXMLHttpReq() {
    // To make an API call need follow below steps for XMLHttpRequest
    // we have to create xhr object
    const xhr = new XMLHttpRequest();
    // what type of request we want to open like GET, POST, DELETE,..etc
    xhr.open('GET',"https://jsonplaceholder.typicode.com/users/1");
    // send the request
    xhr.send();
    // xhr has provided three functionalities to track whether request
    // is in progress or successfully loaded or reverted an error
    xhr.onload = function(){
        debugger;
        xhr.status ===200
        ? console.log("Got the user via XMLHttpRequest as :",xhr.response)
        : console.log(`Error ${xhr.status} : ${xhr.statusText} `);
    };
    xhr.onprogress = function(event){
        debugger;
        const message = event.lengthComputable
        ? `Received ${event.loaded} of ${event.total} bytes`
        : `Receied ${event.total} bytes`;
        console.log("message: ",message);
    };
    
    xhr.onerror = function(){
        debugger;
        console.log("something went wrong");
    };
    
}

function getUserByFetchAPI() {
    // Using fetch API:
    // by default it works in GET mode
    //fetch() returns a promise so we can call then() on it
    // then() gets a HTTPResponse object as a first argument
    fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(response => {
        debugger;
        return response.json();
    } )
    .then(user => {
        debugger;
        console.log("Got the user as: ",user);
    } );
}
