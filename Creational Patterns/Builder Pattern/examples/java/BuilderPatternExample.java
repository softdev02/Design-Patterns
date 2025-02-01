// Product Class
class House {
    private int windows;
    private int doors;
    private int rooms;
    private boolean hasGarage;
    private boolean hasSwimmingPool;
    private boolean hasStatues;
    private boolean hasGarden;

    // Private Constructor to enforce building through Builder
    private House(HouseBuilder builder) {
        this.windows = builder.windows;
        this.doors = builder.doors;
        this.rooms = builder.rooms;
        this.hasGarage = builder.hasGarage;
        this.hasSwimmingPool = builder.hasSwimmingPool;
        this.hasStatues = builder.hasStatues;
        this.hasGarden = builder.hasGarden;
    }

    @Override
    public String toString() {
        return "House [Windows=" + windows +
               ", Doors=" + doors +
               ", Rooms=" + rooms +
               ", Garage=" + hasGarage +
               ", Swimming Pool=" + hasSwimmingPool +
               ", Statues=" + hasStatues +
               ", Garden=" + hasGarden + "]";
    }

    // Builder Class
    public static class HouseBuilder {
        private int windows;
        private int doors;
        private int rooms;
        private boolean hasGarage;
        private boolean hasSwimmingPool;
        private boolean hasStatues;
        private boolean hasGarden;

        public HouseBuilder setWindows(int windows) {
            this.windows = windows;
            return this;
        }

        public HouseBuilder setDoors(int doors) {
            this.doors = doors;
            return this;
        }

        public HouseBuilder setRooms(int rooms) {
            this.rooms = rooms;
            return this;
        }

        public HouseBuilder setGarage(boolean hasGarage) {
            this.hasGarage = hasGarage;
            return this;
        }

        public HouseBuilder setSwimmingPool(boolean hasSwimmingPool) {
            this.hasSwimmingPool = hasSwimmingPool;
            return this;
        }

        public HouseBuilder setStatues(boolean hasStatues) {
            this.hasStatues = hasStatues;
            return this;
        }

        public HouseBuilder setGarden(boolean hasGarden) {
            this.hasGarden = hasGarden;
            return this;
        }

        public House build() {
            return new House(this);
        }
    }
}

// Client Code
public class BuilderPatternExample {
    public static void main(String[] args) {
        House luxuryHouse = new House.HouseBuilder()
                .setWindows(4)
                .setDoors(2)
                .setRooms(4)
                .setGarage(true)
                .setSwimmingPool(true)
                .setStatues(true)
                .setGarden(true)
                .build();

        System.out.println(luxuryHouse);

        House simpleHouse = new House.HouseBuilder()
                .setWindows(4)
                .setDoors(2)
                .setRooms(4)
                .setGarage(true)
                .build();

        System.out.println(simpleHouse);
    }
}
