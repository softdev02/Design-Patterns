import java.util.ArrayList;
import java.util.List;

// Component interface
interface Item {
    void showDetails();
}

class Product implements Item {
    private String name;

    public Product(String name) {
        this.name = name;
    }

    @Override
    public void showDetails() {
        System.out.println("Product: " + name);
    }
}

// Composite class: Represents a box containing other items
class Box implements Item {
    private String name;
    private List<Item> items = new ArrayList<>();

    public Box(String name) {
        this.name = name;
    }

    public void add(Item item) {
        items.add(item);
    }

    public void remove(Item item) {
        items.remove(item);
    }

    @Override
    public void showDetails() {
        System.out.println("Box: " + name);
        for (Item item : items) {
            item.showDetails();
        }
    }
}

// Client code
public class CompositePatternExample {
    public static void main(String[] args) {
        // Leaf products
        Item hammer = new Product("Hammer");
        Item phone = new Product("Phone");
        Item headphones = new Product("Headphones");
        Item charger = new Product("Charger");
        Item receipt = new Product("Receipt");

        // Composite box containing products
        Box smallBox1 = new Box("Small Box 1");
        smallBox1.add(hammer);

        Box smallBox2 = new Box("Small Box 2");
        smallBox2.add(phone);
        smallBox2.add(headphones);
        smallBox2.add(charger);

        Box largeBox = new Box("Large Box");
        largeBox.add(smallBox1);
        largeBox.add(smallBox2);
        largeBox.add(receipt);

        // Display the details of the entire order
        largeBox.showDetails();
    }
}
