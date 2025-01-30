// Step 1: Product Interface
interface Transport {
    void deliver();
}

// Step 2: Concrete Products
class RoadTransport implements Transport {
    public void deliver() {
        System.out.println("Delivering by road in a truck.");
    }
}

class SeaTransport implements Transport {
    public void deliver() {
        System.out.println("Delivering by sea in a cargo ship.");
    }
}

// Step 3: Creator Abstract Class
abstract class Logistics {
    public abstract Transport createTransport();

    public void planDelivery() {
        Transport transport = createTransport();
        transport.deliver();
    }
}

// Step 4: Concrete Creators
class RoadLogistics extends Logistics {
    public Transport createTransport() {
        return new RoadTransport();
    }
}

class SeaLogistics extends Logistics {
    public Transport createTransport() {
        return new SeaTransport();
    }
}

// Step 5: Test the Factory Method Pattern
public class FactoryMethodLogisticsExample {
    public static void main(String[] args) {
        Logistics logistics;

        // Road Logistics
        logistics = new RoadLogistics();
        logistics.planDelivery();

        // Sea Logistics
        logistics = new SeaLogistics();
        logistics.planDelivery();
    }
}