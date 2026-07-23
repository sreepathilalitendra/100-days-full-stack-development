// Day 68 - JavaScript Classes & OOP

// Create a Class

class Student {

    // Constructor

    constructor(name, age, course) {

        this.name = name;

        this.age = age;

        this.course = course;

    }

    // Method

    displayInfo() {

        console.log("Name:", this.name);

        console.log("Age:", this.age);

        console.log("Course:", this.course);

    }

}

const student1 = new Student("Rahul", 21, "JavaScript");

student1.displayInfo();

console.log("----------------");

// Inheritance

class Employee extends Student {

    constructor(name, age, course, company) {

        super(name, age, course);

        this.company = company;

    }

    showCompany() {

        console.log("Company:", this.company);

    }

}

const employee1 = new Employee(

    "Vamanan",

    22,

    "Full Stack Development",

    "CodeMonolith"

);

employee1.displayInfo();

employee1.showCompany();

console.log("----------------");

// instanceof

console.log(student1 instanceof Student);

console.log(employee1 instanceof Employee);

console.log(employee1 instanceof Student);

console.log("----------------");

// End Message

console.log("Day 68 Completed Successfully!");