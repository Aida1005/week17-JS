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

const data = [
    {
    id: 1,
    type: 'car',
    brand: 'Audi',
    doors: 4,
    price: 4300000,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/2020_Audi_e-Tron_Sport_50_Quattro.jpg/1200px-2020_Audi_e-Tron_Sport_50_Quattro.jpg'
    },
    {
    id: 2,
    type: 'car',
    brand: 'Mercedes-Benz',
    doors: 4,
    price: 2800000,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg/300px-2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg'
    },
    {
    id: 3,
    type: 'bike',
    brand: 'Harley-Davidson',
    maxSpeed: 210,
    price: 1300000,
    image: 'https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2022/2022-iron-883/2022-iron-883-016/2022-iron-883-016-motorcycle.jpg'
    },
    {
    id: 4,
    type: 'bike',
    brand: 'Harley-Davidson',
    maxSpeed: 220,
    price: 1400000,
    image: 'https://cdn.dealerspike.com/imglib/products/harley-showroom/2020/livewire/main/Vivid-Black-Main.png'
    }
];

//Создаем класс для Transport
class Transport {
    constructor (type, price, brand, id){
        this.type = type;
        this.price = price;
        this.brand = brand;
        this.id = id;
    }

    getInfo() {
        return  `Type: ${this.type}
        Brand: ${this.brand}`;
    }
    
    getPrice(){
        return `Price: USD ${this.price}`;
    }
};
class Car extends Transport {
    constructor (type, price, brand, doors){
        super (type, price, brand);
        this.doors = doors;
    }

    getDoorsCount(){
        return `Amount of Doors: ${this.doors}`;
    }
};

class Bike extends Transport {
    constructor (type, price, brand, maxSpeed) {
        super (type, price, brand);
        this.maxSpeed = maxSpeed;
    }
    getMaxSpeed(){
        return `Speed: ${this.maxSpeed} km/h`;
    }
};

// Главный контейнер 
const transportList = document.querySelector('.transport');

//Проводим массив через функцию forEach
data.forEach (item => {

let transport; 
    if (item.type === "car"){
        transport = new Car (item.type, item.price, item.brand, item.doors);
    } else if (item.type === "bike"){
        transport = new Bike (item.type, item.price, item.brand, item.maxSpeed);
    }

    ////Создаём переменные к каждому элементу
    const block = document.createElement("div");
    block.className = "transport-card";

    const price = document.createElement("span");
    price.textContent = transport.getPrice();
    
    const typeBrand = document.createElement("p");
    typeBrand.textContent = transport.getInfo();

    const id = document.createElement("p");
    id.textContent = item.id;

    const image = document.createElement("img");
    image.src = item.image;

//Расставляем все по порядку
    block.append (id);
    block.append(typeBrand);

    if (transport instanceof Car){
        const doors = document.createElement("span");
        doors.textContent = transport.getDoorsCount();
        block.append(doors);
    } else if (transport instanceof Bike){
        const maxSpeed = document.createElement("span");
        maxSpeed.textContent = transport.getMaxSpeed();
        block.append(maxSpeed);
    }

    block.append(price);
    block.append(image);

//Отобразим всё в браузер 
    transportList.append(block);
});



