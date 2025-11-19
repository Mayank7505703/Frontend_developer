// Q1.js

function greetUser(name, callback) {
    console.log(`Hello ${name}`);
    callback(); // executing callback
}

function showEndMessage() {
    console.log("Welcome to the course!");
}

// Demonstration of callback flow
greetUser("Alice", showEndMessage);
