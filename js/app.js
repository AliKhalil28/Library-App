console.log("This is Project 2");

// Todoes
// 1. Store all the data in localStorage
// 2. Give another colume as an option 
// 3. Add a scroll bar to the table

function Book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
}

//Display Constructor
function Display() {

}

//Add Method to Display prototype
Display.prototype.add = function (book) {
    console.log("Adding to UI")
    let tableBody = document.getElementById('tableBody');
    let uiString = `<tr>
                                        <td>${book.name}</td>
                                        <td>${book.author}</td>
                                        <td>${book.type}</td>
                                 </tr>`;
    tableBody.innerHTML += uiString;
}

//Implement the Clear Function
Display.prototype.clear = function () {
    let libraryForm = document.getElementById('libraryForm');
    libraryForm.reset();
}

//Implement the validate function
Display.prototype.validate = function (book) {
    if (book.name.length > 0 && book.author.length > 0) {
        return true;
    }
    else {
        return false;
    }
}

Display.prototype.show = function (type, displaymessage) {
    let message = document.getElementById('message');
    message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                            <strong>Message: </strong> ${displaymessage}
                        </div>`;
    setTimeout(function () {
        message.innerHTML = '';
    }, 2000);
}





// Add submit Event Listener to liraryForm
let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e) {
    e.preventDefault();
    console.log('You submit Library Form');
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;
    //Type

    let fiction = document.getElementById('fiction');
    let programming = document.getElementById('programming');
    let cooking = document.getElementById('cooking');
    //Local Storage
    let type

    if (fiction.checked) {
        type = fiction.value;
    }
    else if (programming.checked) {
        type = programming.value;
    }
    else if (cooking.checked) {
        type = cooking.value;
    }

    let book = new Book(name, author, type);
    console.log(book);

    let display = new Display();

    if (display.validate(book)) {
        display.add(book);
        display.clear();
        display.show('success', 'Book Added Successfully');
    }
    else {
        //Show error to the user
        display.show('danger', 'Please enter valid name and author');
    }
}
