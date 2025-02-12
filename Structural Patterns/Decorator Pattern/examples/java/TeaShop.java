interface Tea {
    String getDescription();
}

class PlainTea implements Tea {
    @Override
    public String getDescription() {
        return "Plain tea";
    }
}

// Abstract Decorator
abstract class TeaDecorator implements Tea {
    protected Tea tea;

    public TeaDecorator(Tea tea) {
        this.tea = tea;
    }

    @Override
    public String getDescription() {
        return tea.getDescription();
    }

}

class LowSugar extends TeaDecorator {
    public LowSugar(Tea tea) {
        super(tea);
    }

    @Override
    public String getDescription() {
        return super.getDescription() + " with Low Sugar";
    }
}

class HighSugar extends TeaDecorator {
    public HighSugar(Tea tea) {
        super(tea);
    }

    @Override
    public String getDescription() {
        return super.getDescription() + " with High Sugar";
    }
}

public class TeaShop {
    public static void main(String[] args) {
        Tea plainTea = new PlainTea();
        System.out.println(plainTea.getDescription());

        Tea lowSugarTea = new LowSugar(new PlainTea());
        System.out.println(lowSugarTea.getDescription());

        Tea highSugarTea = new HighSugar(new PlainTea());
        System.out.println(highSugarTea.getDescription());
    }
}
