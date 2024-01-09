let myLibrary = [];
let mainDashboard;

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
  // Create the library DB
  myLibrary = [
    new Book(
      title = 'Eloquent Javascript',
      author = 'Marijm Haverbeke',
      pageCount = 450,
      isRead = false
    ),
    new Book(
      'CSS Secrets',
      'Lea Verou',
      354,
      true
    ),
    new Book(
      'The Designer\'s Dictionary of color',
      'Sean Adams',
      256,
      false
    ),
    new Book(
      'Dracula',
      'Bram Stoker',
      418,
      true
    ),
    new Book(
      'Masonry',
      'William Schnoebelen',
      286,
      false
    )
  ];

  // renderBooksInLibrary();
  mainDashboard = document.getElementById('dashboard--main-row');

  rerenderBooks();
});

function rerenderBooks() {
  mainDashboard.innerHTML = '';

  myLibrary.forEach((book) => {
    mainDashboard.appendChild(CreateBook(book));
  });
}

function Book(title, author, pages, isRead) {
  // the constructor...
  this.id = getUID();
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;

  this.info = function() {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? 'already read' : 'not read yet'}`;
  }

  this.toggleRead = function() {
    this.isRead = !this.isRead;
    console.log(this.isRead);
  }
}

function addBookToLibrary() {
  

  // Display Book function here
}

function CreateBook(book) {
  console.log('Create Book start..... \n');

  // Create the book--item template Card
  let bookContainer = document.createElement('div');
  let bookCard = document.createElement('div');
  let bookBody = document.createElement('div');

  // Set the book-item template classes
  bookContainer.className = 'col-3 p-3 book--container';
  bookCard.className = 'book--item card';
  bookBody.className = 'card-body';
  // Append the the Card/body to the book item
  bookContainer.appendChild(bookCard).appendChild(bookBody);

/*
<h4 class="book--item-title">The Designer's Dictionary of color</h4>
<h6 class="book--item-author">Sean Adams</h6>
<p class="book--item-pages">256</p>
<div class="book--item-buttons">
  <span class="book--item-isRead">
      <input type="checkbox" class="btn-check" name="options-outlined" id="success-outlined" autocomplete="off">
      <label class="btn btn-sm btn-outline-success" for="success-outlined">Read</label>
  </span>
  <button type="button" class="btn btn-sm btn-danger book--item-delete">Delete</button>
</div>
*/

  // Create the book body elements
  let title = document.createElement('h4');
  let author = document.createElement('h6');
  let pages = document.createElement('p');
  let btnContainer = document.createElement('div');
  let isReadContainer = document.createElement('span');
  let isReadInput = document.createElement('input');
  let isReadLabel = document.createElement('label');
  let deleteBtn = document.createElement('button');

  // Set the book body classes
  title.className = 'book--item-title';
  author.className = 'book--item-author';
  pages.className = 'book--item-pages';
  btnContainer.className = 'book--item-buttons';
  isReadContainer.className = 'book--item-isRead';
  isReadInput.className = 'btn-check';
  isReadLabel.className = 'btn btn-sm btn-outline-success';
  deleteBtn.className = 'btn btn-sm btn-danger book--item-delete';

  // Attach the current book data to the book elements
  title.textContent = book.title;
  author.textContent = book.author;
  pages.innerHTML = `${book.pageCount} <i>pg\'s</i>`;
  isReadLabel.textContent = 'Read';
  deleteBtn.textContent = 'Delete';
  
  // Create the book body attributes & set them
  // Edit these attributes to display if a book was read or not
  let isReadInputAttributes = {type:'checkbox',name:'success-outlined',id:`success-outlined-${book.id}`,autocomplete:'off'};
  if (book.isRead) {isReadInputAttributes.checked="checked"}
  let isReadLabelAttributes = {for:`success-outlined-${book.id}`};
  let deleteBtnAttributes = {type:'button', 'data-UID': book.id};
  setAttributes(isReadInput, isReadInputAttributes);
  setAttributes(isReadLabel, isReadLabelAttributes);
  setAttributes(deleteBtn, deleteBtnAttributes);

  // To Do:
  // Create eventListeners for the isRead & Delete btns
  isReadInput.addEventListener("click", function(e) {
    e.preventDefault();

    // Toggle the books isRead boolean
    book.toggleRead();

    // Set the read checkbox based on the book.isRead boolean
    // isReadInput.bootstrapToggle('toggle');
  });

  deleteBtn.addEventListener("click", function(e) {
    e.preventDefault();
    let deleteBtn = e.target;
    let bookUID = deleteBtn.dataset.uid; 
    
    // Find the book within myLibrary first, delete it from the array
    myLibrary.splice(getIndexOf(bookUID), 1);

    // Find the book within the DOM and delete
    deleteBtn.closest(".book--container").remove();
  });

  // Append all the book body elements to the book body
  bookBody.append(title, author, pages, btnContainer);
  btnContainer.append(isReadContainer, deleteBtn);
  isReadContainer.append(isReadInput, isReadLabel);

  console.log('Create Book end..... \n');
  return bookContainer;
}

function setAttributes(element, attributes) {
  Object.keys(attributes).forEach(attr => {
    element.setAttribute(attr, attributes[attr]);
  });
}

function getUID() {
  return `id${Math.random().toString(16).slice(2)}`
}

function getIndexOf(uid) {
  return myLibrary.map(function(e) {return e.id}).indexOf(uid);
}

// Create a function(s) to add or remove the "checked" attribute from existing books
// Or better yet,
// Create an EventListener to update the book db when the Read checkbox is checked/unchecked