// Q9.js

class Person {
    constructor(name) {
        this.name = name;
    }
    showName() {
        console.log(`Name: ${this.name}`);
    }
}

class Student extends Person {
    constructor(name, branch) {
        super(name); // calls Person constructor
        this.branch = branch;
    }

    showBranch() {
        console.log(`Branch: ${this.branch}`);
    }
}

// Test
const s1 = new Student("Ravi", "CSE");
s1.showName();
s1.showBranch();

/*
Both behave the same internally because:
- Classes still use prototypes under the hood.
- 'extends' sets up prototype chain like Object.create().
- 'super()' behaves like Person.call(this).
*/
