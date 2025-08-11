/**
 * Abstract Factory Pattern Implementation in TypeScript
 * 
 * This example demonstrates how to create a family of related objects (furniture)
 * without specifying their concrete classes. The pattern is useful when:
 * 1. A system should be independent of how its products are created and composed
 * 2. A system should be configured with one of multiple families of products
 * 3. Related product objects need to be used together
 * 
 * In this example, we create furniture (chairs and tables) in different styles
 * (Victorian and Modern) while ensuring style consistency across products.
 */

// Abstract Products: Define interfaces for each type of product
// These interfaces declare the operations that all concrete products must implement
interface Chair {
    hasLegs(): boolean;
    sitOn(): string;
}

interface Table {
    getShape(): string;
    putOn(): string;
}

// Concrete Products - Victorian Style
// These classes implement the product interfaces for a specific style (Victorian)
class VictorianChair implements Chair {
    hasLegs(): boolean {
        return true; // Victorian chairs traditionally have ornate legs
    }

    sitOn(): string {
        return "Sitting on an elegant Victorian chair with ornate details";
    }
}

class VictorianTable implements Table {
    getShape(): string {
        return "Round";
    }

    putOn(): string {
        return "Placing items on a carved Victorian table";
    }
}

// Concrete Products - Modern Style
// These classes implement the product interfaces for a different style (Modern)
class ModernChair implements Chair {
    hasLegs(): boolean {
        return false; // Modern chairs might use a central pedestal instead of legs
    }

    sitOn(): string {
        return "Sitting on a sleek modern chair with minimalist design";
    }
}

class ModernTable implements Table {
    getShape(): string {
        return "Square";
    }

    putOn(): string {
        return "Placing items on a clean-lined modern table";
    }
}

// Abstract Factory: Declares interface for operations that create abstract products
// This interface ensures that all concrete factories have the same set of methods
interface FurnitureFactory {
    createChair(): Chair;
    createTable(): Table;
}

// Concrete Factories: Each concrete factory creates a family of products that belong
// to a single variant or style. The factory guarantees that resulting products are
// compatible and maintain style consistency.
class VictorianFurnitureFactory implements FurnitureFactory {
    createChair(): Chair {
        return new VictorianChair();
    }

    createTable(): Table {
        return new VictorianTable();
    }
}

class ModernFurnitureFactory implements FurnitureFactory {
    createChair(): Chair {
        return new ModernChair();
    }

    createTable(): Table {
        return new ModernTable();
    }
}

// Client code: Works with factories and products only through abstract types
// This ensures the code remains independent of the concrete product classes
class FurnitureStore {
    private factory: FurnitureFactory;

    constructor(factory: FurnitureFactory) {
        this.factory = factory;
    }

    orderFurniture(): void {
        const chair = this.factory.createChair();
        const table = this.factory.createTable();

        console.log("Chair has legs?", chair.hasLegs());
        console.log(chair.sitOn());
        console.log("Table shape:", table.getShape());
        console.log(table.putOn());
    }
}

// Usage example: Shows how to create and use furniture of different styles
// The client code can create furniture in any style without knowing concrete classes
function main() {
    console.log("Victorian Furniture Store:");
    const victorianStore = new FurnitureStore(new VictorianFurnitureFactory());
    victorianStore.orderFurniture();

    console.log("\nModern Furniture Store:");
    const modernStore = new FurnitureStore(new ModernFurnitureFactory());
    modernStore.orderFurniture();
}

main();
