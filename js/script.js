const newBookBtn = document.getElementById("new-btn");
const filterForm = document.getElementById("filter-form");
const applyFilterBtn = document.getElementById("apply-btn");
const clearFilterBtn = document.getElementById("clear-btn");
const booksContainer = document.getElementById("books-container");
const viewMoreBtn = document.getElementById("view-btn")
const closeModalBtn = document.getElementById("close-modal");
const modalContent = document.getElementById("modal");
const inputForm = document.getElementById("input-form")

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
    const author = document.getElementById("author").value;
    const title = document.getElementById("title").value;
    const tagline = document.getElementById("tagline").value;

    // Add Book
    addBookToLibrary(author, title, tagline);

    // Clear input values
    author = "";
    title = "";
    tagline = "";

    // Close modal after submit
    modalContent.close();

})



// Filter Books

// Clear Books Filter

// View More Books

// Temporary Listed Books

