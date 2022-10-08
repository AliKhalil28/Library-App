console.log("This is Project 2 With ES6 Classes");

add(book)
class Book {
    constructor(name, author, type) {
        this.name = name;
        this.author = author;
        this.type = type;
    }
}

class Display {
    add(book) {
        let books = localStorage.getItem("books");
        if (books == null) {
            booksObj = [];
        }
        else {
            booksObj = JSON.parse(books);
        }
        let html = "";
        booksObj.forEach(function () {
            html += `<tr>
        <td>${element.name}</td>
        <td>${element.author}</td>
        <td>${element.type}</td>
 </tr>`
        })
        let tableBody = document.getElementById('tableBody');
        tableBody.innerHTML = html;
    }
    clear() {
        let libraryForm = document.getElementById('libraryForm');
        libraryForm.reset();
    }

    validate(book) {
        if (book.name.length > 0 && book.author.length > 0) {
            return true;
        }
        else {
            return false;
        }
    }
    show(type, showmsg, displaymessage) {
        let message = document.getElementById('message');
        message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                                <strong>${showmsg}: </strong> ${displaymessage}
                            </div>`;
        setTimeout(function () {
            message.innerHTML = '';
        }, 5000);
    }
}


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
        display.show('success', 'Success', 'Book Added Successfully');
    }
    else {
        //Show error to the user
        display.show('danger', 'Error', 'Please enter valid name and author');
    }

    let books = localStorage.getItem("books");
    if (books == null) {
        booksObj = [];
    }
    else {
        booksObj = JSON.parse(books);
    }
    let myObj = {
        name: book.name,
        author: book.author,
        type: book.element
    }
    booksObj.push(myObj);
    localStorage.setItem("booksObj", JSON.stringify(booksObj));
    name.value = " ";
    author.value = " ";
    type.value = " ";
    add(book)
}