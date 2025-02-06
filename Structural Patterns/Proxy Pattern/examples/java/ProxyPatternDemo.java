// Subject interface
interface Service {
    void request();
}

// RealSubject class (actual implementation)
class RealService implements Service {
    public void request() {
        System.out.println("Real service is processing the request...");
    }
}

// Proxy class (controls access to RealService)
class ProxyService implements Service {
    private RealService realService;

    public void request() {
        if (realService == null) {
            realService = new RealService();
        }
        System.out.println("Proxy: Pre-processing request");
        realService.request();
        System.out.println("Proxy: Post-processing request");
    }
}

// Client
public class ProxyPatternDemo {
    public static void main(String[] args) {
        Service proxyService = new ProxyService();
        proxyService.request();
    }
}
