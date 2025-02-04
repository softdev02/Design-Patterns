**🧩 Bridge Pattern**

**Definition:**

Bridge is a structural design pattern that lets you split a large class or a set of closely related classes into two separate hierarchies— **abstraction and implementation** — which can be developed independently of each other.

    +------------------------+
    |  Shape (Abstraction)   |
    +------------------------+
    | + draw(): void         |
    +------------------------+
                 ▲
                 |
 +-----------------------------+
 |    Circle, Rectangle        |
 |  (Refined Abstraction)      |
 +-----------------------------+
 | + draw(): void              |
 +-----------------------------+
                 |
                 ▼
    +------------------------+
    |   Color (Implementor)   |
    +------------------------+
    | + applyColor(): void    |
    +------------------------+
                 ▲
                 |
  +---------------------------+
  |   Red, Blue (Concrete     |
  |      Implementor)         |
  +---------------------------+
  | + applyColor(): void      |
  +---------------------------+



**🔍 How It Works**

**Abstraction**: The high-level interface for client usage.

**Refined Abstraction**: Extends the Abstraction and may add additional operations.

**Implementor (Bridge)**: Declares the interface for implementation classes.

**Concrete Implementor**: Provides the specific implementation of the methods declared in the bridge interface.


**🌟 Benefits of Bridge Pattern**

**Decoupling Abstraction and Implementation**: Promotes independent development and maintenance.

**Increased Flexibility**: Easier to extend both abstractions and implementations.

**Improved Scalability**: Adding new implementations doesn't require changing the abstraction layer.

**Reduces Code Complexity**: Avoids excessive inheritance hierarchies.
