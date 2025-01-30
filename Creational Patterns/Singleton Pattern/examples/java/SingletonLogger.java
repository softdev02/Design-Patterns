public class SingletonLogger {

    // Static variable to hold the single instance
    private static SingletonLogger instance;

    // Private constructor to prevent instantiation
    private SingletonLogger() {
        // Optional: Initialize log configurations
        System.out.println("Logger initialized");
    }

    // Method to get the single instance (thread-safe with synchronized block)
    public static SingletonLogger getInstance() {
        if (instance == null) {
            synchronized (SingletonLogger.class) {
                if (instance == null) {
                    instance = new SingletonLogger();
                }
            }
        }
        return instance;
    }

    // Method to log messages
    public void log(String message) {
        System.out.println("Log: " + message);
    }

    public static void main(String[] args) {
        // Get the single instance of Logger and log messages
        SingletonLogger logger1 = SingletonLogger.getInstance();
        SingletonLogger logger2 = SingletonLogger.getInstance();

        logger1.log("This is the first log message.");
        logger2.log("This is the second log message.");

        // Verifying that both instances are the same
        System.out.println("Logger instances are the same: " + (logger1 == logger2));
    }
}
