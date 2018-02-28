class Book {
    constructor(bookId, title, author, isbn, bookCover) {
        this._bookId = bookId;
        this._title = title;
        this._author = author;
        this._isbn = isbn;
        this._bookCover = bookCover;
    }
    get bookId() {
        return this._bookId;
    }
    set bookId(IdValue) {
        this._bookId = IdValue;
    }
    get bookCover() {
        return this._bookCover;
    }
    set bookCover(bookCoverValue) {
        this._bookCover = bookCoverValue;
    }
    get title() {
        return this._title;
    }
    set title(titleValue) {
        this._title = titleValue;
    }
    get author() {
        return this._author;
    }
    set author(authorValue) {
        this._author = authorValue;
    }
    get isbn() {
        return this._isbn;
    }
    set isbn(isbnValue) {
        this._isbn = isbnValue;
    }
}
$(document).ready(function () {
    $.getJSON({
        url: "/data/books.json",
        success: function (data) {
            var bookArray = [];
            $.each(data.books, function (i, item) {
                var book = new Book(item.id, item.title, item.author, item.isbn, item.coverUrl)
                bookArray.push(book);
            });
            // console.log(bookArray);
            $.each(bookArray, function (i, item) {
                $("#tableBody").append("<tr>")
                    .append("<td>" + item.bookId + "</td> " +
                    "<td>" + "<img src=" + item.bookCover + " / >" + "</td>" +
                    "<td>" + "<a href='./details.html'> " + item.title + "</a>" + "</td>" +
                    "<td>" + item.author + "</td>" +
                    "<td>" + item.isbn + "</td>");
            });
        },
        error: function (request, status, errorThrown) {
            console.log(request);
            console.log(status);
            console.log(errorThrown);
        }
    });


});
