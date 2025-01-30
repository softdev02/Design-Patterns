🏭 Factory Method Pattern


Definition:

The Factory Method Pattern defines an interface for creating objects but allows subclasses to alter the type of objects that will be created. (Subclasses decide which specific type of object to create.)

![image](https://github.com/user-attachments/assets/da916eb7-84d5-4353-97a4-3a3463c7f5ed)


Key Features:

Decouples Object Creation: The client code depends only on the abstract interface.
Flexibility: Subclasses determine which class to instantiate.

🔍 When to Use Factory Method Pattern

When the object creation logic becomes complex.
When a class needs to delegate the instantiation of subclasses.
When a system needs to support various product types without changing client code.

Simple Factory Method Concept (Pseudocode)

Logistics (abstract class) 

| 

|-- RoadLogistics (factory class) --> RoadTransport (truck) 

|-- SeaLogistics (factory class) --> SeaTransport (ship)
