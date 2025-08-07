class DatabaseConnection {
    private static instance: DatabaseConnection | null = null;
    private connectionString: string;

    // Private constructor to prevent direct instantiation
    private constructor() {
        this.connectionString = "mongodb://localhost:27017/myapp";
    }

    // Public method to get the single instance
    public static getInstance(): DatabaseConnection {
        // Create instance if it doesn't exist (lazy initialization)
        if (!DatabaseConnection.instance) {
            DatabaseConnection.instance = new DatabaseConnection();
        }

        return DatabaseConnection.instance;
    }

    // Example method to demonstrate usage
    public connect(): void {
        console.log(`Connecting to database with connection string: ${this.connectionString}`);
    }

    // Example method to change connection string
    public setConnectionString(newConnection: string): void {
        this.connectionString = newConnection;
    }

    public getConnectionString(): string {
        return this.connectionString;
    }
}

// Usage example
function demonstrateSingleton() {
    // Get instance of DatabaseConnection
    const connection1 = DatabaseConnection.getInstance();
    const connection2 = DatabaseConnection.getInstance();

    // Verify both connections are the same instance
    console.log("Are both connections the same instance?", connection1 === connection2); // true

    // Using first connection
    connection1.connect();
    
    // Change connection string using first connection
    connection1.setConnectionString("mongodb://localhost:27017/newapp");
    
    // Second connection will have the updated connection string
    // because it's the same instance
    console.log("Connection2 string:", connection2.getConnectionString()); // shows updated connection
}

// Run the demonstration
demonstrateSingleton();
