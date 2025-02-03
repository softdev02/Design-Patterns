**🧩 Adapter Pattern**

**Definition:**

Adapter design pattern is one of the structural design pattern and **its used so that two unrelated interfaces can work together**. The object that joins these unrelated interface is called an Adapter.

               +--------------------+
               |      XMLService     |
               +--------------------+
               | + getXMLData(): String |
               +--------------------+
                        ▲
                        |
          +-------------------------------+
          |       XMLToJSONAdapter         |
          |        (Adapter)               |
          +-------------------------------+
          | - xmlService: XMLService       |
          | + getJSONData(): String        |
          +-------------------------------+
                        ▲
                        |
                +--------------------+
                |     JSONService    |
                +--------------------+
                | + getJSONData(): String |
                +--------------------+
                        ▲
                        |
                 +--------------+
                 |   Client     |
                 +--------------+
                 | main() Method|
                 +--------------+


**🔍 How It Works**

**Adaptee**: XMLService provides XML data.

**Target**: JSONService defines the interface for JSON data retrieval.

**Adapter**: XMLToJSONAdapter converts the XML data to JSON format.

**🌟 Benefits of Adapter Pattern**

**Flexibility:** Allows easy integration of incompatible systems.

**Reusability:** Leverages existing code without modification.

**Decoupling:** Separates the client code from legacy implementations.

**Maintainability:** Makes it easier to manage and modify code in the long run.
