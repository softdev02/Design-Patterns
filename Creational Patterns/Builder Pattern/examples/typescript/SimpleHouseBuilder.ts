/**
 * Builder Pattern Example - House Construction
 * 
 * The Builder Pattern is a creational design pattern that lets you construct complex objects
 * step by step. It's particularly useful when you need to create an object with numerous
 * possible configurations.
 * 
 * In this example, we're building houses with different specifications using the Builder Pattern.
 */

/**
 * The Product class - represents the complex object we're building
 * This class defines all possible properties that a house can have.
 * The Builder pattern allows us to construct this object step by step.
 */
class House {
    walls: string = '';
    doors: number = 0;
    windows: number = 0;
    roof: string = '';
    
    describe(): void {
        console.log('House Specifications:');
        console.log(`- Walls: ${this.walls}`);
        console.log(`- Doors: ${this.doors}`);
        console.log(`- Windows: ${this.windows}`);
        console.log(`- Roof: ${this.roof}`);
    }
}

/**
 * The Builder interface
 * Declares all the steps needed to build a house.
 * Each method returns the builder itself (this) to allow method chaining.
 * The build() method returns the final product.
 */
interface HouseBuilder {
    buildWalls(): HouseBuilder;
    addDoors(count: number): HouseBuilder;
    addWindows(count: number): HouseBuilder;
    addRoof(): HouseBuilder;
    build(): House;
}

/**
 * The Concrete Builder
 * Implements the Builder interface and provides specific implementations
 * for each building step. It keeps track of the complex object being built
 * and allows its retrieval.
 */
class SimpleHouseBuilder implements HouseBuilder {
    private house: House;

    constructor() {
        this.reset();
    }

    private reset(): void {
        this.house = new House();
    }

    buildWalls(): HouseBuilder {
        this.house.walls = 'Basic Walls';
        return this;
    }

    addDoors(count: number): HouseBuilder {
        this.house.doors = count;
        return this;
    }

    addWindows(count: number): HouseBuilder {
        this.house.windows = count;
        return this;
    }

    addRoof(): HouseBuilder {
        this.house.roof = 'Simple Roof';
        return this;
    }

    build(): House {
        const result = this.house;
        this.reset();
        return result;
    }
}

/**
 * Client Code
 * Demonstrates how the Builder pattern makes it easy to create different
 * configurations of the same object (House) using the same building process.
 * 
 * Benefits shown here:
 * 1. Clear, readable construction process through method chaining
 * 2. Same builder can create different representations
 * 3. Construction steps are isolated from the main product representation
 */
const builder = new SimpleHouseBuilder();

// Build a small house
const smallHouse = builder
    .buildWalls()
    .addDoors(1)
    .addWindows(4)
    .addRoof()
    .build();

console.log('Small House:');
smallHouse.describe();

console.log('\n-------------------\n');

// Build a bigger house
const bigHouse = builder
    .buildWalls()
    .addDoors(2)
    .addWindows(8)
    .addRoof()
    .build();

console.log('Big House:');
bigHouse.describe();
