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
