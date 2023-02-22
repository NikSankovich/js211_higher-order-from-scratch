let cars = [
    {
        "color": "silver",
        "make": "ford",
        "model": "explorer",
        "capacity": 8,
        "year": 2016
    },
    {
        "color": "black",
        "make": "jeep",
        "model": "cherokee",
        "capacity": 5,
        "year": 2020
    },
    {
        "color": "red",
        "make": "ferrari",
        "model": "enzo",
        "capacity": 2,
        "year": 2003
    },
    {
        "color": "gray",
        "make": "ford",
        "model": "f150",
        "capacity": 5,
        "year": 1998
    },
    {
        "color": "red",
        "make": "mazda",
        "model": "miata",
        "capacity": 2,
        "year": 2005
    },

]

let car2 = {
    "color": "black",
    "make": "hyundai",
    "model": "elantra",
    "capacity": 5,
    "year": 2020
}

// let car3 = cars.find(car3 => car3.color === "black");
console.log(cars);

let sizes = cars.map(car => {
    if (car.capacity <= 3) {
        return "small";
    }
    if (car.capacity <= 5) {
        return "medium";
    }
    return "large";
});
console.log(sizes);

const orderOfFood = [
    {
        menuItem: "cheeseburger",
        price: 6
    },
    {
        menuItem: "taco",
        price: 4
    },
    {
        menuItem: "fries",
        price: 3
    }
]
let total = 0;
const priceOfFood = orderOfFood.reduce((acumulator, food) => acumulator += food.price, total)
console.log(priceOfFood);


const redCar = cars.filter(car => car.color === "red")
console.log(redCar);