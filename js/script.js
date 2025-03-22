const newBookBtn = document.getElementById("new-btn");
const filterForm = document.getElementById("filter-form");
const applyFilterBtn = document.getElementById("apply-btn");
const clearFilterBtn = document.getElementById("clear-btn");
const booksContainer = document.getElementById("books-container");
const viewMoreBtn = document.getElementById("view-btn")

// Book Constructor

function Book(author, title, tagline) {
    if(!new.target){
        throw Error("You must use the new operator to call the constructor");
    }
    this.author = author;
    this.title = title;
    this.tagline = tagline;
}

// New Books

// Filter Books

// Clear Books Filter

// View More Books

// Temporary Listed Books

// Library Array

