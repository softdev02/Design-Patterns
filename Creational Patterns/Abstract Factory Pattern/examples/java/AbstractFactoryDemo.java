// Abstract Product: Chair
interface Chair {
    void hasLegs();
    void sitOn();
}

// Concrete Product: VictorianChair
class VictorianChair implements Chair {
    //The @Override annotation in Java is used to indicate that a 
    //method is overriding a method in a superclass or implementing an interface method
    @Override
    public void hasLegs() {
        System.out.println("Victorian Chair has elegant curved legs.");
    }

    @Override
    public void sitOn() {
        System.out.println("Sitting on a Victorian-style chair.");
    }
}

// Concrete Product: ModernChair
class ModernChair implements Chair {
    @Override
    public void hasLegs() {
        System.out.println("Modern Chair may have sleek metal legs.");
    }

    @Override
    public void sitOn() {
        System.out.println("Sitting on a minimalistic modern chair.");
    }
}

// Abstract Factory
interface ChairFactory {
    Chair createChair();
}

// Concrete Factory: VictorianChairFactory
class VictorianChairFactory implements ChairFactory {
    @Override
    public Chair createChair() {
        return new VictorianChair();
    }
}

// Concrete Factory: ModernChairFactory
class ModernChairFactory implements ChairFactory {
    @Override
    public Chair createChair() {
        return new ModernChair();
    }
}

// Client Code
public class AbstractFactoryDemo {
    public static void main(String[] args) {
        // Victorian Chair
        ChairFactory victorianFactory = new VictorianChairFactory();
        Chair victorianChair = victorianFactory.createChair();
        victorianChair.hasLegs();
        victorianChair.sitOn();

        // Modern Chair
        ChairFactory modernFactory = new ModernChairFactory();
        Chair modernChair = modernFactory.createChair();
        modernChair.hasLegs();
        modernChair.sitOn();
    }
}
