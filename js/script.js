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

function Book(author, title, tagline,pages,read) {
    if(!new.target){
        throw Error("You must use the new operator to call the constructor");
    }

    this.bookId = ++bookId;
    this.author = author;
    this.title = title;
    this.tagline = tagline;
    this.pages = pages;
    this.read = false;
}

// New Book
function addBookToLibrary (author, title, tagline, pages, read) {
    const newBook = new Book(author, title, tagline, pages, read);
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
    const read = false;

    // Validate input
    if(!author.value || !title.value || !tagline.value || isNaN(pages.value) || parseInt(pages.value) <= 0){
        alert("Please fill out all fields correcty.");
        return;
    }

    // Add Book
    addBookToLibrary(author.value, title.value, tagline.value, parseInt(pages.value), read);

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
addBookToLibrary("J.K. Rowling", "Harry Potter and the Sorcerer's Stone", "The magic begins.", 309, false);
addBookToLibrary("George Orwell", "1984", "Big Brother is watching.", 328, false);
addBookToLibrary("J.R.R. Tolkien", "The Hobbit", "In a hole in the ground there lived a hobbit.", 310, false);
addBookToLibrary("Jane Austen", "Pride and Prejudice", "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.", 279, false);
addBookToLibrary("F. Scott Fitzgerald", "The Great Gatsby", "In the end, we will remember not the words of our enemies, but the silence of our friends.", 180, false);
addBookToLibrary("Harper Lee", "To Kill a Mockingbird", "You never really understand a person until you consider things from his point of view.", 281, false);
addBookToLibrary("Mark Twain", "The Adventures of Huckleberry Finn", "A story of a boy and a runaway slave on a journey down the Mississippi River.", 366, false);
addBookToLibrary("Suzanne Collins", "The Hunger Games", "May the odds be ever in your favor.", 374, false);
addBookToLibrary("Ernest Hemingway", "The Old Man and the Sea", "A story of courage, endurance, and friendship with the sea.", 127, false);
addBookToLibrary("Stephen King", "The Shining", "All work and no play makes Jack a dull boy.", 659, false);



// View Books

function view(filteredBooks = myLibrary) {
    // Clear the container before appending new books
    booksContainer.innerHTML = "";

    if (filteredBooks.length > 0) {
        let firstDiv;
        // Loop through the library and create a new "first" div for every 6 books
        for (let i = 0; i < filteredBooks.length; i++) {
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
                    <p>${filteredBooks[i].author}</p>
                    <p>${filteredBooks[i].title}</p>
                    <p>${filteredBooks[i].tagline}</p>
                    <p>${filteredBooks[i].pages}</p>
                </div>
                <div class="zoom-button">
                    <button id="read-button-${filteredBooks[i].bookId}">Read</button>
                    <button id="delete-button-${filteredBooks[i].bookId}">Delete</button>
                </div>
            `;

            // Append the book div to the current "first" div
            firstDiv.appendChild(bookDiv);

            // Read Button
            const readButton = document.getElementById(`read-button-${filteredBooks[i].bookId}`);
            readButton.addEventListener("click", () => {
                if (filteredBooks[i].read === false) {
                    filteredBooks[i].read = true;
                    readButton.innerText = "Unread";
                } else {
                    filteredBooks[i].read = false;
                    readButton.innerText = "Read";
                }
            });

            // Delete Button
            const deleteButton = document.getElementById(`delete-button-${filteredBooks[i].bookId}`);
            deleteButton.addEventListener("click", () => {
                const bookIndex = myLibrary.findIndex(book => book.bookId === filteredBooks[i].bookId);
                myLibrary.splice(bookIndex, 1);
                view();
            });
        }
    }
}

// Apply Filter
applyFilterBtn.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent form submission

    const selectedFilter = document.querySelector('input[name="choose"]:checked');

    if (selectedFilter) {
        const filterValue = selectedFilter.id;

        let filteredBooks;
        if (filterValue === "read") {
            filteredBooks = myLibrary.filter(book => book.read === true);
        } else if (filterValue === "unread") {
            filteredBooks = myLibrary.filter(book => book.read === false);
        } else {
            filteredBooks = myLibrary;
        }

        view(filteredBooks);
    } else {
        alert("Please select a filter option.");
    }
});

// Clear Filter
clearFilterBtn.addEventListener("click", () => {
    // Reset the filter form and view
    filterForm.reset();
    view(); // Show all books again
});

view();



