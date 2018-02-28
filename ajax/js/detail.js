$(document).ready(function () {
    $.getJSON({
        url: "/data/books.json",
        success: function (data) {
            var urlBookId = getQueryParameterByName("bookId");
            var book;
            $.each(data.books, function (i, item) {
                if (item.id == urlBookId) {
                    book = new Book(item.id, item.title, item.author, item.isbn, item.coverUrl);
                }
            });
            $("#breadCrumbTitle").append(book.title);
            $("#bookId").val(book.bookId);
            $("#bookTitle").val(book.title);
            $("#bookISBN").val(book.isbn);
            $("#bookCover").html('<img alt="" src="' + book.bookCover + '" />');

            if ($.type(book.author) === 'string') {
                $("#bookAuthor").append(book.author);
            } else {
                $("#bookAuthor").append('<ul>');
                var $list = $('#bookAuthor').find('ul');
                //function to place each Author on individual list item 
                $.each(book.author, function (i, authorName) {
                    $list.append('<li>' + authorName + '</li>');
                });
            }
        },
        error: function (request, status, errorThrown) {
            console.log(request);
            console.log(status);
            console.log(errorThrown);
        }
    });


});
