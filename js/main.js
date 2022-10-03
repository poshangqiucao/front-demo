let alertMessage = (message) => {
    alert(message);
}

function demo2(e) {
    console.log(e);
    console.log(e.type);
    alert("hello");
}

console.log("hello")


let person = {}
person.name = "df"
person.age = 22
person.sayHello = function() {
    alert("hello my name is "+ this.name);
}

console.log(this);

let person1 = {
    name: 'ds',
    age: 33,
    setAge(age) {
        this.age = age; 
    },
    getAge() {
        return this.age;
    }
}
person1.setAge(22);
console.log(
);


function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.hello = function() {
    console.log("hello from prototype");
}

const p1 = new Person('p1', 21)
const p2 = new Person('p2', 22)

p1.hello()

console.log(p1 instanceof Person);
console.log(p2 instanceof Person);




