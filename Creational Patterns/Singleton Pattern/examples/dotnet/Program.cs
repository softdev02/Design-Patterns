using System;

namespace SingletonPattern
{
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
