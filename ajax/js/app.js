$(document).ready(function () {
    $.getJSON({
        url: "/data/books.json",
        success: function (data) {
            var catalog = new Catalog();
            $.each(data.books, function (i, item) {
                var book = new Book(item.id, item.title, item.author, item.isbn, item.coverUrl);
                catalog.addBook(book);
            });
            catalog.build($("#tableBody"));
            catalog.buildCaption($('#tableCaption'));
        },
        error: function (request, status, errorThrown) {
            console.log(request);
            console.log(status);
            console.log(errorThrown);
        }
    });


});
