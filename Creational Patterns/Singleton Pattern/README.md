**🧩 What is Singleton Pattern?**

The Singleton Design Pattern ensures that a class has only one instance throughout the application and provides a global access point to that instance.
This is useful for managing shared resources such as configuration settings, logging, or database connections.

![image](https://github.com/user-attachments/assets/be739e7d-67b2-4087-b093-e6e0be96b41f)


**🔍 How It Works**

Private Constructor: Prevents instantiation using new.
Static Instance Property: Holds the single instance of the class.
Lazy Initialization: The instance is created only when it is first requested via getInstance().
Global Access: Allows access to the instance from anywhere in the application.

**🌟 Benefits of Singleton Pattern**

**Controlled Access**: Only one instance is created.

**Global Point of Access**: Easy to share common configurations or resources.

**Lazy Initialization**: Saves resources by creating the instance only when required.
This approach is widely adopted for use cases such as logging, configuration management, and caching.
