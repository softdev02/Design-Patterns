/**
 * Factory Method Pattern Example in TypeScript
 * 
 * The Factory Method Pattern is a creational pattern that provides an interface for
 * creating objects but lets subclasses decide which class to instantiate.
 * 
 * In this example:
 * - We have different types of laptops (Gaming and Business)
 * - Each laptop type has its own factory
 * - The factories create appropriate laptop instances
 * 
 * Key components:
 * 1. Product (ILaptop): The interface that all laptops must implement
 * 2. Concrete Products (GamingLaptop, BusinessLaptop): The actual laptop types
 * 3. Creator (LaptopFactory): Abstract class with the factory method
 * 4. Concrete Creators (GamingLaptopFactory, BusinessLaptopFactory): Classes that implement the factory method
 */

// Abstract Product
interface ILaptop {
    getSpecification(): string;
}

// Concrete Products
class GamingLaptop implements ILaptop {
    getSpecification(): string {
        return "Gaming Laptop: High-performance CPU, Dedicated GPU.";
    }
}

class BusinessLaptop implements ILaptop {
    getSpecification(): string {
        return "Business Laptop: Lightweight and Long Battery Life.";
    }
}

// Abstract Creator
abstract class LaptopFactory {
    abstract createLaptop(): ILaptop;
}

// Concrete Creators
class GamingLaptopFactory extends LaptopFactory {
    createLaptop(): ILaptop {
        return new GamingLaptop();
    }
}

class BusinessLaptopFactory extends LaptopFactory {
    createLaptop(): ILaptop {
        return new BusinessLaptop();
    }
}

// Client code
const gamingLaptopFactory = new GamingLaptopFactory();
const gamingLaptop = gamingLaptopFactory.createLaptop();
console.log(gamingLaptop.getSpecification());

const businessLaptopFactory = new BusinessLaptopFactory();
const businessLaptop = businessLaptopFactory.createLaptop();
console.log(businessLaptop.getSpecification());
