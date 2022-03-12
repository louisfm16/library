// ! Must have the equal or greater amount of unique colors than there are books
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
  renderBooksInLibrary();
});

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

  // Display Book function here
}

function generateRandBG(prevColor) {
  let hexColor = bookColors[Math.floor(Math.random() * bookColors.length)];
  
  return hexColor === prevColor ? generateRandBG(prevColor) : hexColor;
}

function generateBook(title, author, prevBookBGColor) {
  let bookEl = document.createElement('div');
  let titleEl = document.createElement('h3');
  let authorEl = document.createElement('h4');

  bookEl.classList.add('book')

  titleEl.classList.add('book--title');
  titleEl.innerText = title;

  authorEl.classList.add('book--author');
  authorEl.innerText = author;

  bookEl.appendChild(titleEl);
  bookEl.appendChild(authorEl);
  
  bookEl.style.background = generateRandBG(prevBookBGColor);

  return bookEl;
}

function renderBooksInLibrary() {
  let bookshelfEl = document.getElementById('bookshelf-grid'); // #bookshelf-grid holds all book instances
  bookshelfEl.innerHTML = '';

  // * Note: Index added to implemement unique colors, still working on it!
  myLibrary.forEach(book => {
    // Grab the backround of the lattest book appended if one exists
    let prevBookBGColor = bookshelfEl.lastChild ? bookshelfEl.lastChild.style.background : '#000';

    bookshelfEl.appendChild(generateBook(book.title, book.author, prevBookBGColor));
  });
}


// const myBook = new Book('Eloquent Javascript', 'Marijm Haverbeke', 450, false);
// console.log(myBook.info());