const newBookBtn = document.getElementById("new-btn");
const filterForm = document.getElementById("filter-form");
const applyFilterBtn = document.getElementById("apply-btn");
const clearFilterBtn = document.getElementById("clear-btn");
const booksContainer = document.getElementById("books-container");
const viewMoreBtn = document.getElementById("view-btn")
const closeModalBtn = document.getElementById("close-modal");
const modalContent = document.getElementById("modal");
const inputForm = document.getElementById("input-form");

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

function Book(author, title, tagline,pages) {
    if(!new.target){
        throw Error("You must use the new operator to call the constructor");
    }

    this.bookId = ++bookId;
    this.author = author;
    this.title = title;
    this.tagline = tagline;
    this.pages = pages;
}

// New Book
function addBookToLibrary (author, title, tagline, pages) {
    const newBook = new Book(author, title, tagline, pages);
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
    const pages = document.getElementById("pages");

    // Add Book
    addBookToLibrary(author.value, title.value, tagline.value, pages.value);

    // Clear input values
    author.value = "";
    title.value = "";
    tagline.value = "";
    pages.value = "";

    // Close modal after submit
    modalContent.close();

    // View
    view();

})

// Temporary Listed Books
addBookToLibrary("J.K. Rowling", "Harry Potter and the Sorcerer's Stone", "The magic begins.", 309);
addBookToLibrary("George Orwell", "1984", "Big Brother is watching.", 328);
addBookToLibrary("J.R.R. Tolkien", "The Hobbit", "In a hole in the ground there lived a hobbit.", 310);
addBookToLibrary("Jane Austen", "Pride and Prejudice", "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.", 279);
addBookToLibrary("F. Scott Fitzgerald", "The Great Gatsby", "In the end, we will remember not the words of our enemies, but the silence of our friends.", 180);
addBookToLibrary("Harper Lee", "To Kill a Mockingbird", "You never really understand a person until you consider things from his point of view.", 281);
addBookToLibrary("Mark Twain", "The Adventures of Huckleberry Finn", "A story of a boy and a runaway slave on a journey down the Mississippi River.", 366);
addBookToLibrary("Suzanne Collins", "The Hunger Games", "May the odds be ever in your favor.", 374);
addBookToLibrary("Ernest Hemingway", "The Old Man and the Sea", "A story of courage, endurance, and friendship with the sea.", 127);
addBookToLibrary("Stephen King", "The Shining", "All work and no play makes Jack a dull boy.", 659);



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
                    <p>${myLibrary[i].pages}</p>
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



