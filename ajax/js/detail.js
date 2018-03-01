$(document).ready(function () {
    $.getJSON({
        url: "/data/books.json",
        success: function (data) {
            var urlBookId = getQueryParameterByName("bookId");
            var book;
            var tempGenre = '';

            $.each(data.books, function (i, item) {
                if (item.id == urlBookId) {
                    book = new Book(item.id, item.title, item.author, item.isbn, item.coverUrl);
                    tempGenre = item.genre;
                }
            });

            $("#breadCrumbTitle").append(book.title);
            $("#bookId").val(book.bookId);
            $("#bookTitle").val(book.title);
            $("#bookISBN").val(book.isbn);
            $("#bookCover").html('<img alt="" src="' + book.bookCover + '" />');
            book.buildAuthor("#bookAuthor");

            $.each(data.genreAll, function (i, itemGenre) {
                $('#bookGenre').append("<option>" + itemGenre + "</option>");
                if (itemGenre == tempGenre){
                    $('option:last').attr("selected", "selected");
                }
            });
        },
        error: function (request, status, errorThrown) {
            console.log(request);
            console.log(status);
            console.log(errorThrown);
        }
    });


});
