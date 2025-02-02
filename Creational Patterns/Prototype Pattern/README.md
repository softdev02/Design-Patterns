**🧩 Prototype Pattern**

**Definition:**

The Prototype Design Pattern is a creational design pattern that allows creating new objects by copying existing ones (prototypes) rather than instantiating new objects from scratch. This is particularly useful when object creation is resource-intensive or involves complex configurations.

                   +--------------------+
                   |     Prototype       |
                   +--------------------+
                   | + clone(): Prototype|
                   +--------------------+
                            ▲
                            |
            +-----------------------------+
            |       Concrete Prototype    |
            |          (Document)         |
            +-----------------------------+
            | - title: String             |
            | - content: String           |
            +-----------------------------+
            | + Document(title, content)  |
            | + setTitle(title: String)   |
            | + setContent(content: String)|
            | + clone(): Prototype        |
            | + display(): void           |
            +-----------------------------+
                            ▲
                            |
                    +---------------+
                    |   Client       |
                    +---------------+
                    | main() Method  |
                    +---------------+


**🔍 How It Works**

**Prototype Interface**: Declares a method for cloning itself.

**Concrete Prototype Class**: Implements the cloning operation.

**Client**: Uses the prototype to create new objects by cloning the existing ones.

**🌟 Benefits of Prototype Pattern**

**Efficient Object Creation**: Saves resources by cloning existing objects instead of creating new ones from scratch.

**State Preservation**: Maintains the state of the original object in the clone.

**Simplifies Complex Construction**: Useful when the object creation process is complex or involves multiple configurations.

**Customizable**: Enables modifications in the cloned objects without affecting the original.

