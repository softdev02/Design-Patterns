using System;

namespace FactoryMethodPattern
{
    interface ILaptop
    {
        string GetSpecification();
    }

    class GamingLaptop : ILaptop
    {
        public string GetSpecification()
        {
            return "Gaming Laptop: High-performance CPU, Dedicated GPU.";
        }
    }

    class BusinessLaptop : ILaptop
    {
        public string GetSpecification()
        {
            return "Business Laptop: Lightweight and Long Battery Life.";
        }
    }

    abstract class LaptopFactory
    {
        public abstract ILaptop CreateLaptop();
    }

    class GamingLaptopFactory : LaptopFactory
    {
        public override ILaptop CreateLaptop()
        {
            return new GamingLaptop();
        }
    }

    class BusinessLaptopFactory : LaptopFactory
    {
        public override ILaptop CreateLaptop()
        {
            return new BusinessLaptop();
        }
    }

    public static class Program
    {
        static void Main(string[] args)
        {
            LaptopFactory gamingLaptopFactory = new GamingLaptopFactory();
            ILaptop gamingLaptop = gamingLaptopFactory.CreateLaptop();
            Console.WriteLine(gamingLaptop.GetSpecification());

            LaptopFactory businessLaptopFactory = new BusinessLaptopFactory();
            ILaptop businessLaptop = businessLaptopFactory.CreateLaptop();
            Console.WriteLine(businessLaptop.GetSpecification());
        }
    }
}
