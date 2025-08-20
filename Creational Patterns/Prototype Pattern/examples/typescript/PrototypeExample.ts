interface Prototype {
    clone(): Prototype;
}

class Car implements Prototype {
    private make: string;
    private model: string;
    private color: string;

    constructor(make: string, model: string, color: string) {
        this.make = make;
        this.model = model;
        this.color = color;
    }

    clone(): Car {
        // Create a new car with the same properties
        return new Car(this.make, this.model, this.color);
    }

    // Customize the cloned car
    setColor(color: string): void {
        this.color = color;
    }

    getDetails(): string {
        return `Car: ${this.make} ${this.model}, Color: ${this.color}`;
    }
}

// Client code
function main() {
    // Create an original car
    const originalCar = new Car("Toyota", "Camry", "Blue");
    console.log("Original Car:", originalCar.getDetails());

    // Clone the car and customize it
    const clonedCar = originalCar.clone();
    clonedCar.setColor("Red");
    console.log("Cloned Car:", clonedCar.getDetails());

    // Clone another car
    const anotherClone = originalCar.clone();
    anotherClone.setColor("Black");
    console.log("Another Clone:", anotherClone.getDetails());
}

// Run the example
main();
