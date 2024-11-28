class Car {
    constructor(options) {
        this.model = options.model;
        this.colors = options.colors;
        this.wheel = options.wheel;
    }

    start() {
        console.log(`Машина ${this.model} заведена`)
    }
}


class Pickup extends Car {
    constructor(options) {
        super(options);
        this.payload_capacity = options.payload_capacity;
    }
}

class Convertible extends Car{
    constructor(options) {
        super(options);
        this.roof_type = options.roof_type;
    }
}

class SportsCar extends Car{
    constructor(options) {
        super(options);
        this.horsepower = options.horsepower;
    }
}


const pickup = new Pickup({
    model: "Ford F-150",
    colors: "Blue",
    wheel: 4,
    payload_capacity: 1200,
});

pickup.start();

const convertible = new Convertible({
    model: "Chevrolet Camaro",
    colors: "Yellow",
    wheel: 4,
    roof_type: "folding"
})

convertible.start();

const sportsCar = new SportsCar({
    model: "Ferrari 488",
    colors: "Red",
    wheel: 4,
    horsepower: 670,
})

sportsCar.start();