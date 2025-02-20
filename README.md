# Callback-functions-in-Js
This repository contains examples of callback functions in JavaScript, demonstrating how to pass functions as arguments, handle asynchronous operations, and ensure type safety. These concepts are essential for working with events, APIs, and async programming.
🔹 Topics Covered:
✔ Basic callback execution
✔ Passing functions as arguments
✔ Handling async callbacks (setTimeout)
✔ Error handling in callbacks

📜 License: MIT License
⭐ Feel free to fork, modify, and star this repo! 😊



# Callback Functions in JavaScript 🚀

This repository contains examples of **callback functions** in JavaScript. Callback functions are essential for handling asynchronous operations, event-driven programming, and function execution flow.

## 🔹 Overview
The examples in this repository demonstrate:
- Basic function execution.
- Passing functions as arguments (callbacks).
- Handling callbacks in **asynchronous operations**.
- Ensuring **type safety** when calling callbacks.

## 📌 Code Examples
### **1️⃣ Basic Function Execution**
```js
function loginUser() {
    console.log("Logged in");
}
function displayUser() {
    console.log("Hello Everyone!");
}

loginUser();
displayUser();

2️⃣ Passing Callbacks as Parameters
function loginUser(cb) {
    console.log("Logged in");
    if (typeof cb === "function") {
        cb();
    }
}
function displayUser() {
    console.log("Hello Everyone!");
}
loginUser(displayUser);
3️⃣ Handling Callbacks with Async Operations
function fetchData(callback) {
    setTimeout(() => {
        if (callback && typeof callback === "function") {
            callback("Data fetched");
        } else {
            console.error("Callback is not a function");
        }
    }, 1000);
}
fetchData((message) => console.log(message));

<-------------------------------------------------------->
💡 Why Use Callbacks?
Helps in asynchronous execution (e.g., setTimeout, fetch API).
Enables modular and reusable code.
Essential for handling events, APIs, and file operations.
📜 License
This project is licensed under the MIT License – feel free to use and modify it!

