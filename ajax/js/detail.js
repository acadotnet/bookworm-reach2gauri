$(document).ready(function () {
    $.getJSON({
        url: "/data/books.json",
        success: function (data) {
            var urlBookId = getQueryParameterByName("bookId");
            var book;

            $.each(data.books, function (i, item) {
                if (item.id == urlBookId) {
                    book = new Book(item.id, item.title, item.author, item.isbn, item.coverUrl, item.genre);
                }
            });
            book.detailPage(data.genreAll);
        },
        error: function (request, status, errorThrown) {
            console.log(request);
            console.log(status);
            console.log(errorThrown);
        }
    });


});
