// 1.  Using Object Literals
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};

console.log(person.firstName);
console.log(person.fullName());

// 2. Using a Constructor Function
function Car(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.getDetails = function () {
        return `${this.brand} ${this.model} (${this.year})`;
    };
}

let car1 = new Car("Toyota", "Corolla", 2022);
let car2 = new Car("Honda", "Civic", 2023);

console.log(car1.getDetails());
console.log(car2.getDetails());

// 3. Using ES6 Classes
class Animal {
    constructor(name, sound) {
        this.name = name;
        this.sound = sound;
    }

    makeSound() {
        return `${this.name} says ${this.sound}`;
    }
}

let dog = new Animal("Dog", "Woof");
let cat = new Animal("Cat", "Meow");

console.log(dog.makeSound());
console.log(cat.makeSound());

// 4. Using Object.create()
let animal = {
    type: "Mammal",
    displayType: function () {
        console.log(this.type);
    }
};

let lion = Object.create(animal);
lion.type = "Wild Animal";

lion.displayType();
