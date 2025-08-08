/**
 * Factory Method Pattern Example in TypeScript
 * 
 * The Factory Method Pattern is a creational pattern that provides an interface for
 * creating objects but lets subclasses decide which class to instantiate.
 * 
 * In this example:
 * - We have a logistics management system that needs to create different types of transport
 * - Instead of creating transport objects directly, we use factory methods
 * - This makes our code more flexible and extensible
 * 
 * Key components:
 * 1. Product (Transport): The interface that all products must implement
 * 2. Concrete Products (Truck, Ship): The actual products that implement the interface
 * 3. Creator (LogisticsFactory): Abstract class with the factory method
 * 4. Concrete Creators (RoadLogistics, SeaLogistics): Classes that implement the factory method
 * 
 * Benefits:
 * - Loose coupling between creator and products
 * - Easy to add new types of transport without modifying existing code
 * - Single Responsibility Principle: Creation logic is in one place
 */

// Abstract Product
interface Transport {
    deliver(): string;
}

// Concrete Products
class Truck implements Transport {
    deliver(): string {
        return "Delivering cargo by land in a truck";
    }
}

class Ship implements Transport {
    deliver(): string {
        return "Delivering cargo by sea in a ship";
    }
}

// Abstract Creator
abstract class LogisticsFactory {
    // Factory Method
    abstract createTransport(): Transport;

    // Some business logic that uses the factory method
    planDelivery(): string {
        const transport = this.createTransport();
        return `Logistics planned: ${transport.deliver()}`;
    }
}

// Concrete Creators
class RoadLogistics extends LogisticsFactory {
    createTransport(): Transport {
        return new Truck();
    }
}

class SeaLogistics extends LogisticsFactory {
    createTransport(): Transport {
        return new Ship();
    }
}

// Client code
function clientCode(logistics: LogisticsFactory) {
    console.log(logistics.planDelivery());
}

// Usage example
console.log("App: Launched with Road Logistics");
clientCode(new RoadLogistics());

console.log("\nApp: Launched with Sea Logistics");
clientCode(new SeaLogistics());
