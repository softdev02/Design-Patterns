// Step 1: Prototype Interface
interface Prototype {
    Prototype clone();
}

// Step 2: Concrete Prototype Class
class Document implements Prototype {
    private String title;
    private String content;

    public Document(String title, String content) {
        this.title = title;
        this.content = content;
    }

    // Getter and Setter for title and content
    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    // Implement clone method
    @Override
    public Document clone() {
        return new Document(this.title, this.content);
    }

    public void display() {
        System.out.println("Title: " + title);
        System.out.println("Content: " + content);
    }
}

// Step 3: Client Code
public class PrototypePatternExample {
    public static void main(String[] args) {
        Document originalDoc = new Document("Prototype Pattern", "This is the content of the original document.");
        System.out.println("Original Document:");
        originalDoc.display();

        // Clone the document
        Document clonedDoc = originalDoc.clone();
        clonedDoc.setTitle("Cloned Document");
        System.out.println("\nCloned Document:");
        clonedDoc.display();
    }
}
