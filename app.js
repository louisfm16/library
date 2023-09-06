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

function docReady(fn) {
  // see if DOM is already available
  if (document.readyState === "complete" || document.readyState === "interactive") {
    // call on next available tick
    setTimeout(fn, 1);
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
} 

docReady(function () {
  // renderBooksInLibrary();
});

function Book(title, author, pages, read) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;

  this.info = function() {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? 'already read' : 'not read yet'}`;
  }
}

function addBookToLibrary() {
  // do stuff here

  // Display Book function here
}