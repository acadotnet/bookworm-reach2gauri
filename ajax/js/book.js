class Catalog {
    constructor() {
        this._books = [];
    }
    get books() {
        return this._books;
    }
    addBook(book) {
        this._books.push(book);
    }
    build(target) {
        var $tbody = $(target);

        $.each(this._books, function (b, book) {
            $tbody.append(book.toTableRow());
        });
    }
    buildCaption(caption) {
        var $caption = $(caption);
        $caption.append("Found " + this._books.length + " books");
    }
}

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
    get bookCover() {
        return this._bookCover;
    }
    get title() {
        return this._title;
    }
    get author() {
        return this._author;
    }
    get isbn() {
        return this._isbn;
    }
    toTableRow() {
        var $tr = $('<tr>');
        var $td = $('<td>');
        $tr.append("<td>" + this._bookId + "</td> ");
        $tr.append("<td>" + "<img src=" + this._bookCover + " / >" + "</td> ");
        $tr.append("<td>" + "<a href='./details.html?bookId=" + this._bookId + "'> " + this._title + "</a>" + "</td> ");
        $tr.append("<td>" + this._author + "</td> ");
        $tr.append("<td>" + this._isbn + "</td> ");

        return $tr;
    }
    buildAuthor(targetAuthor) {
        if (this._author.length == 1) {
            $(targetAuthor).append('<input readonly class="form-control-plaintext" id="author">');
            $('#author').val(this._author);
        } else {
            $(targetAuthor).append('<ul>');
            var $list = $(targetAuthor).find('ul');
            //function to place each Author on individual list item 
            $.each(this._author, function (i, authorName) {
                $list.append('<li>' + authorName + '</li>');
            });
        }

    }
}
