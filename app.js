let bookColors = [
  '#a0ced9', '#b7adcf', '#e9c46a', 
  '#f4a261', '#e76f51', '#3A4F41', 
  '#4F5D75', '#545863', '#134074', 
  '#004643', '#DC965A', '#E9806E'];
let myLibrary = [
  {
    title: 'Eloquent Javascript',
    author: 'Marijm Haverbeke',
    pageCount: 450,
    isRead: false
  },
  {
    title: 'CSS Secrets',
    author: 'Lea Verou',
    pageCount: 354,
    isRead: true
  },
  {
    title: 'The Designer\'s Dictionary of color',
    author: 'Sean Adams',
    pageCount: 256,
    isRead: false
  }
];

function Book(title, author, pageCount, isRead) {
  // the constructor...
  // this.title = title;
  // this.author = author;
  // this.pageCount = pageCount;
  // this.isRead = isRead;

  // this.info = function() {
  //   return `${this.title} by ${this.author}, ${this.pageCount} pages, ${this.isRead ? 'already read' : 'not read yet'}`;
  // }
}

function addBookToLibrary() {
  // do stuff here
}

// const myBook = new Book('Eloquent Javascript', 'Marijm Haverbeke', 450, false);
// console.log(myBook.info());