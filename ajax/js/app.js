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
                    "<td>" + "<a href='./details.html?bookId=" + item.bookId + "'> " + item.title + "</a>" + "</td>" +
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
