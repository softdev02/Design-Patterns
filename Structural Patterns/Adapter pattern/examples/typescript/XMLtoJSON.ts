// Target Interface - Client wants JSON data
interface JSONParser {
  getJSON(): object;
}

// Adaptee - Provides XML data (incompatible with client)
class XMLDataProvider {
  getXML(): string {
    return `<user><id>101</id><name>Bala</name><role>Developer</role></user>`;
  }
}

// Adapter - Converts XML to JSON
class XMLtoJSONAdapter implements JSONParser {
  private xmlProvider: XMLDataProvider;

  constructor(xmlProvider: XMLDataProvider) {
    this.xmlProvider = xmlProvider;
  }

  getJSON(): object {
    const xml = this.xmlProvider.getXML();

    // Simple XML to JSON conversion (for demo)
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xml, "application/xml");

    const json: any = {};
    Array.from(xmlDoc.documentElement.childNodes).forEach((node) => {
      if (node.nodeType === Node.ELEMENT_NODE) {
        const el = node as Element;
        json[el.tagName] = el.textContent;
      }
    });

    return json;
  }
}

// Client Code
function displayData(parser: JSONParser) {
  console.log("Client received JSON:", parser.getJSON());
}

// Usage
const xmlProvider = new XMLDataProvider();
const adapter = new XMLtoJSONAdapter(xmlProvider);

displayData(adapter);
// ✅ Client received JSON: { id: "101", name: "Bala", role: "Developer" }
