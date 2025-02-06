using System;

namespace SingletonPattern
{
    public class AppSettings
    {
        // Static instance to hold the single settings instance
        private static AppSettings instance;

        // Lock object for thread-safety
        private static readonly object lockObject = new object();

        //settings Properties 
        public string ApplicationName { get; private set; }
        public string Version { get; private set; }
        public string ApiBaseUrl { get; private set; }

        private AppSettings()
        {
            ApplicationName = "MyApp";
            Version = "1.0.0";
            ApiBaseUrl = "https://api.myapp.com";
            Console.WriteLine("Application settings initialized.");
        }
        public static AppSettings GetAppSettings()
        {
            if (instance == null)
            {
                lock (lockObject)
                {
                    if (instance == null)
                    {
                        instance = new AppSettings();
                    }
                }
            }
            return instance;
        }
        public void DisplaySettings()
        {
            Console.WriteLine($"Application Name: {ApplicationName}");
            Console.WriteLine($"Version: {Version}");
            Console.WriteLine($"API Base URL: {ApiBaseUrl}");
        }

    }
}