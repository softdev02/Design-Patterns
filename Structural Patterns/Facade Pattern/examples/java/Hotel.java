import java.util.Arrays;
import java.util.List;

enum FoodType {
    VEG, NON_VEG, DRINKS
}

class VegMenu {
    public List<String> getItems() {
        return Arrays.asList("Paneer Butter Masala", "Veg Biryani", "Curd Rice");
    }
}

class NonVegMenu {
    public List<String> getItems() {
        return Arrays.asList("Chicken Curry", "Mutton Biryani", "Grilled Chicken", "BBQ");
    }
}

class DrinksMenu {
    public List<String> getItems() {
        return Arrays.asList("Mango Lassi", "Cold Coffee", "Fresh Lime Soda");
    }
}

class OrderService {
    public void placeOrder(FoodType foodType, List<String> items) {
        System.out.println(foodType + " order placed: " + String.join(", ", items));
    }
}

class HotelService {
    private VegMenu vegMenu;
    private NonVegMenu nonVegMenu;
    private DrinksMenu drinksMenu;
    private OrderService orderService;

    public HotelService() {
        this.vegMenu = new VegMenu();
        this.nonVegMenu = new NonVegMenu();
        this.drinksMenu = new DrinksMenu();
        this.orderService = new OrderService();
    }

    public List<String> getMenu(FoodType foodType) {
        switch (foodType) {
            case VEG:
                return vegMenu.getItems();
            case NON_VEG:
                return nonVegMenu.getItems();
            case DRINKS:
                return drinksMenu.getItems();
            default:
                throw new IllegalArgumentException("Invalid Food Type");
        }
    }

    public void placeOrder(FoodType foodType, List<String> selectedItems) {
        orderService.placeOrder(foodType, selectedItems);
    }
}

public class Hotel {
    public static void main(String[] args) {
        HotelService hotelService = new HotelService();

        // Customer wants to see Menus
        System.out.println("Veg Menu: " + hotelService.getMenu(FoodType.VEG));
        System.out.println("Non-Veg Menu: " + hotelService.getMenu(FoodType.NON_VEG));
        System.out.println("Drinks Menu: " + hotelService.getMenu(FoodType.DRINKS));

        // Customer places orders
        hotelService.placeOrder(FoodType.VEG, Arrays.asList("Paneer Butter Masala", "Veg Biryani"));
        hotelService.placeOrder(FoodType.NON_VEG, Arrays.asList("Mutton Biryani"));
        hotelService.placeOrder(FoodType.DRINKS, Arrays.asList("Cold Coffee"));
    }
}
