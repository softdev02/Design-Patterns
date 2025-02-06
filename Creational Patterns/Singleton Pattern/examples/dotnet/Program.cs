using System;

namespace SingletonPatternExample
{
    public class AppSettings
    {
        // Static instance to hold the single settings instance
        private static AppSettings instance;

        // Lock object for thread-safety
        private static readonly object lockObject = new object();

        //settings Properties 
        public string ApplicationName { get; set; }
        public string Version { get; set; }
        public string ApiBaseUrl { get; set; }
        private AppSettings()
        {
            ApplicationName = "MyApp";
            Version = "1.0.0";
            ApiBaseUrl = "https://api.myapp.com";
            Console.WriteLine("Application settings initialized.");
        }
        public static AppSettings GetAppSettings(){
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

    public static class Program
    {
        static void Main(string[] args)
        {
            AppSettings settings1 = AppSettings.GetAppSettings();
            settings1.DisplaySettings();
            AppSettings settings2 = AppSettings.GetAppSettings();
            settings2.DisplaySettings();
            Console.WriteLine($"Are both instances equal? {settings1 == settings2}");
        }
    }
}
