const newBookBtn = document.getElementById("new-btn");
const filterForm = document.getElementById("filter-form");
const applyFilterBtn = document.getElementById("apply-btn");
const clearFilterBtn = document.getElementById("clear-btn");
const booksContainer = document.getElementById("books-container");
const viewMoreBtn = document.getElementById("view-btn")
const closeModalBtn = document.getElementById("close-modal");
const modalContent = document.getElementById("modal");
const inputForm = document.getElementById("input-form");
const firstRow = document.getElementById("input-row");

// Dialog Modal
newBookBtn.addEventListener("click", () => {
    modalContent.showModal();
})

closeModalBtn.addEventListener("click", () => {
    modalContent.close();
})


// Library Array
const myLibrary = [];
let bookId = 0;

// Book Constructor

function Book(author, title, tagline) {
    if(!new.target){
        throw Error("You must use the new operator to call the constructor");
    }

    this.bookId = ++bookId;
    this.author = author;
    this.title = title;
    this.tagline = tagline;
}

// New Book
function addBookToLibrary (author, title, tagline) {
    const newBook = new Book(author, title, tagline);
    myLibrary.push(newBook);
}



// Form Input
inputForm.addEventListener("submit", (event) => {
    // Prevent form from submitting
    event.preventDefault();

    // Value declaration
    const author = document.getElementById("author");
    const title = document.getElementById("title");
    const tagline = document.getElementById("tagline");

    // Add Book
    addBookToLibrary(author.value, title.value, tagline.value);

    // Clear input values
    author.value = "";
    title.value = "";
    tagline.value = "";

    // Close modal after submit
    modalContent.close();

    // View
    view();

})

// Temporary Listed Books
addBookToLibrary("J.J.K Rowling", "Harry Potter", "Magic");
addBookToLibrary("J.J.K Rowling", "Harry Potter", "Magic");
addBookToLibrary("J.J.K Rowling", "Harry Potter", "Magic");
addBookToLibrary("J.J.K Rowling", "Harry Potter", "Magic");
addBookToLibrary("J.J.K Rowling", "Harry Potter", "Magic");
addBookToLibrary("J.J.K Rowling", "Harry Potter", "Magic");
addBookToLibrary("J.J.K Rowling", "Harry Potter", "Magic");
addBookToLibrary("J.J.K Rowling", "Harry Potter", "Magic");
addBookToLibrary("J.J.K Rowling", "Harry Potter", "Magic");

// View Books

function view() {
    // Clear the container before appending new books
    booksContainer.innerHTML = "";

    if (myLibrary.length > 0) {
        let firstDiv;
        // Loop through the library and create a new "first" div for every 6 books
        for (let i = 0; i < myLibrary.length; i++) {
            // Create a new "first" div every 6 books
            if (i % 6 === 0) {
                firstDiv = document.createElement('div');
                firstDiv.classList.add('first');
                booksContainer.appendChild(firstDiv); // Append "first" div to the container
            }

            // Create the book div
            const bookDiv = document.createElement("div");
            bookDiv.classList.add("zoom");

            // Add content for the book
            bookDiv.innerHTML = `
                <div class="book">
                    <p>${myLibrary[i].author}</p>
                    <p>${myLibrary[i].title}</p>
                    <p>${myLibrary[i].tagline}</p>
                </div>
                <button class="zoom-button">Read</button>
            `;

            // Append the book div to the current "first" div
            firstDiv.appendChild(bookDiv);
        }
    }
}

view();



// Filter Books

// Clear Books Filter

// View More Books



