// Q3.js

const user = {
    name: "Rahul",
    showName: () => {
        console.log(this.name); 
        // ❌ this is undefined because arrow functions DO NOT have their own 'this'
    }
};

user.showName(); // prints undefined

// ✔ Fix using normal function
const userFixed = {
    name: "Rahul",
    showName() {
        console.log(this.name); // now 'this' refers to userFixed
    }
};

userFixed.showName();
