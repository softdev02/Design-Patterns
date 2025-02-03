// Adaptee - XML Service
class XMLService {
    public String getXMLData() {
        return "<book><title>Adapter Pattern</title><author>Bala</author></book>";
    }
}

// Target - JSON interface
interface JSONService {
    String getJSONData();
}

// Adapter - Converts XML to JSON
class XMLToJSONAdapter implements JSONService {
    private XMLService xmlService;

    public XMLToJSONAdapter(XMLService xmlService) {
        this.xmlService = xmlService;
    }

    @Override
    public String getJSONData() {
        String xmlData = xmlService.getXMLData();

        // Simple manual conversion for this example
        String title = xmlData.replaceAll(".*<title>(.*?)</title>.*", "$1");
        String author = xmlData.replaceAll(".*<author>(.*?)</author>.*", "$1");

        // Manual JSON construction
        return "{\n" +
                "  \"title\": \"" + title + "\",\n" +
                "  \"author\": \"" + author + "\"\n" +
                "}";
    }
}

// Client
public class AdapterPatternDemo {
    public static void main(String[] args) {
        XMLService xmlService = new XMLService();
        JSONService adapter = new XMLToJSONAdapter(xmlService);

        System.out.println("Converted JSON Data: " + adapter.getJSONData());
    }
}
