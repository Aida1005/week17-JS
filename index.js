//Задание 1

// Создаем класс для Worker
class Worker {
constructor (name, surname, rate, days){
    this.name = name;
    this.surname = surname;
    this.rate = rate;
    this.days = days;
}
getSalary(){
    return this.rate * this.days;
}
}

let worker = new Worker('Иван', 'Иванов', 10, 31);

console.log(worker.name); //выведет 'Иван'
console.log(worker.surname); //выведет 'Иванов'
console.log(worker.rate); //выведет 10
console.log(worker.days); //выведет 31
console.log(worker.getSalary()); //выведет 310 — то есть 10*31


//Задание 2

//Создаем класс для Transport
class Transport {
    constructor (type, price, brand){
        this.type = type;
        this.price = price;
        this.brand = brand;
    }

    getInfo() {

    }
    
    getPrice(){

    }
}
class Car extends Transport {
    constructor (doors){
        super (type, price, brand);
        this.doors = doors;
    }
    getDoorsCount(){

    }
}

class Bike extends Transport {
    constructor (maxSpeed){
        super (type, price, brand);
        this.maxSpeed = maxSpeed;
    }
    
    getMaxSpeed(){
        
    }
}