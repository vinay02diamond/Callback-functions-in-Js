callback

Ex1- normal way//

function loginUser(){
    console.log("Logged in");   
}
function displayUser(){
    console.log("Hello Everyone!");

}

loginUser();
displayUser();


//----------------Example 2---------------------------//

function loginUser(){
    console.log("Logged in");
    displayUser();
    console.log("Lets see!");
}

function displayUser(){
    console.log("Hello Everyone!");

}

loginUser();

//-------------- passing a function with a parameter------------//
//----displayUser wont work unless cb is called----//

function loginUser(cb) {
    console.log("Logged in");
    if (typeof cb === "function") {
        cb();
    }
}


function displayUser(){
    console.log("Hello Everyone!");
}
loginUser(displayUser);


//------------------------------------//

function greet(name,callback){
  console.log(`Hello, ${name}!`);
    callback();
    console.log("Hello again!");
}

function sayGoodbye(){
    console.log("Goodbye");

}

greet ("John", sayGoodbye);



//-------- Handling callbacks with Async -------//
function fetchData(callback) {
  setTimeout(() => {
      if (callback && typeof callback === "function") {
          callback("Data fetched");
      } else {
          console.error("Callback is not a function");
      }
  }, 1000);
}
