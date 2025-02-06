**🧩 Proxy Pattern**

**Definition:**

Proxy is a structural design pattern that lets you provide a substitute or **placeholder for another object**. A proxy controls access to the original object, allowing you to perform something either before or after the request gets through to the original object.

    +--------------------+
    |   Subject          |
    +--------------------+
    | + request(): void  |
    +--------------------+
            ▲
            |
    +---------------------+
    |   RealSubject       |
    +---------------------+
    | + request(): void   |
    +---------------------+
            ▲
            |
    +---------------------+
    |   Proxy             |
    +---------------------+
    | + request(): void   |
    +---------------------+
            ▲
            |
    +---------------------+
    |    Client           |
    +---------------------+





**🔍 How It Works**

**Subject**: Defines the common interface (Service).

**RealSubject**: The actual service implementation (RealService).

**Proxy**: Controls access to the real service (ProxyService).

**Client**: Uses the proxy instead of directly accessing the real service.


🌟 Benefits of Proxy Pattern

**Access Control**: Restricts or manages access to the real subject.

**Lazy Initialization**: Defers object creation until needed, saving resources.

**Security**: Ensures validation and authentication before accessing the real object.

**Logging and Monitoring**: Tracks requests and activities for debugging and auditing.

**Performance Optimization**: Reduces latency with caching or optimized remote calls.

