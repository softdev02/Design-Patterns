// Component interface
interface FileSystemComponent {
  showDetails(indent?: string): void;
}

// Leaf class: FileLeaf
class FileLeaf implements FileSystemComponent {
  constructor(private name: string) {}

  showDetails(indent: string = ""): void {
    console.log(`${indent}- File: ${this.name}`);
  }
}

// Composite class: Folder
class Folder implements FileSystemComponent {
  private children: FileSystemComponent[] = [];

  constructor(private name: string) {}

  add(component: FileSystemComponent): void {
    this.children.push(component);
  }

  remove(component: FileSystemComponent): void {
    this.children = this.children.filter(c => c !== component);
  }

  showDetails(indent: string = ""): void {
    console.log(`${indent}+ Folder: ${this.name}`);
    this.children.forEach(child => child.showDetails(indent + "   "));
  }
}

// ---- Usage ----
const file1 = new FileLeaf("file1.txt");
const file2 = new FileLeaf("file2.txt");
const file3 = new FileLeaf("file3.txt");

const subFolder = new Folder("Documents");
subFolder.add(file1);
subFolder.add(file2);

const rootFolder = new Folder("Root");
rootFolder.add(subFolder);
rootFolder.add(file3);

rootFolder.showDetails();
