<!--Pagination library -->
<
script src = "https://cdnjs.cloudflare.com/ajax/libs/simplePagination.js/1.4/jquery.simplePagination.min.js"
integrity = "sha512-J4OD+6Nca5l8HwpKlxiZZ5iF79e9sgRGSf0GxLsL1W55HHdg48AEiKCXqvQCNtA1NOMOVrw15DXnVuPpBm2mPg=="
crossorigin = "anonymous"
referrerpolicy = "no-referrer" > < /script>

<!--Search customizations -->
<
script >

    /// Add class to returned search items based on filter
    $(".search-result-item:contains(/customers/)").addClass("customerfilter");
$(".search-result-item:contains(/articles/)").addClass("articlesfilter");
$(".search-result-item:contains(/guides/)").addClass("guidesfilter");
$(".search-result-item:contains(/glossary/)").addClass("glossaryfilter");
$(".search-result-item:contains(/platform/)").addClass("platformfilter");


//Add background images to results without images
$(".w-dyn-bind-empty").attr("src", "https://uploads-ssl.webflow.com/637b90ceaf45f5d5053f6f20/63894cc25e4c1910add2f808_partnerstack-logo.webp");
$(".search-result-image").removeClass("w-dyn-bind-empty");


//filter search items with checkbox click
$("#filters :checkbox").click(function() {

    var chxboxname = $(this).attr("name");
    $(".search-result-item").hide();
    $(".search-result-item").removeClass("searchfilter");
    $("#filters :checkbox:checked").each(function() {

        $("." + $(this).attr('name')).fadeIn();
        $("." + $(this).attr('name')).addClass("searchfilter");


        //pagination for flters
        // var items = $(".search-result-items .search-result-item." + $(this).attr('name'));
        var items = $(".searchfilter");
        var numItems = items.length;
        var perPage = 5;
        items.slice(perPage).hide();
        $('#pagination-container').pagination({
            items: numItems,
            itemsOnPage: perPage,
            prevText: "&laquo;",
            nextText: "&raquo;",
            onPageClick: function(pageNumber) {
                var showFrom = perPage * (pageNumber - 1);
                var showTo = showFrom + perPage;
                items.hide().slice(showFrom, showTo).show();
            }
        });
        //Pagination end

        //Check to see if the number of items is 0. Display no matching itmes
        if (numItems <= 0) {
            $(".no-result-items").show();
        } else {
            $(".no-result-items").hide();
        }


    });

    //If no checkboxes are checked show all items
    if ($('#filters :checkbox').filter(':checked').length < 1) {
        $(".search-result-item").show();

        //pagination for all items
        var items = $(".search-result-items .search-result-item");
        var numItems = items.length;
        var perPage = 5;
        items.slice(perPage).hide();
        $('#pagination-container').pagination({
            items: numItems,
            itemsOnPage: perPage,
            prevText: "&laquo;",
            nextText: "&raquo;",
            onPageClick: function(pageNumber) {
                var showFrom = perPage * (pageNumber - 1);
                var showTo = showFrom + perPage;
                items.hide().slice(showFrom, showTo).show();
            }
        });


    }



});



//Add category links
//$(".resources .search-category").replaceWith("<a href='https://www.google.com'>Resources</></br></br>");
//$(".contact .search-category").replaceWith("<a href='https://www.yahoo.com'>Contacts</></br></br>");


//Capture the query string from the URL and insert it into the header
document.addEventListener('DOMContentLoaded', function() {
    var urlParams = new URLSearchParams(window.location.search);
    var searchQuery = urlParams.get('query');
    var searchHeading = document.querySelector('.search-heading');
    searchHeading.innerHTML = 'Search results for &lsquo;' + searchQuery + '&rsquo;';

    //Add search results total to header
    var searchResultsNum = $('.search-result-item').length;
    $('.search-heading').prepend(searchResultsNum + " ");


});




//Check to see if a specific word is in the referrer's url
var referrer = document.referrer;
if (referrer.indexOf('glossary') != -1) {
    $('#glossaryfilter').prop('checked', true);
    $('.glossary-chk div.w-checkbox-input').addClass("w--redirected-checked");
    $(".search-result-item").hide();
    $(".glossaryfilter").fadeIn();

    //pagination for all itmes
    var items = $(".search-result-items .search-result-item.glossaryfilter");
    var numItems = items.length;
    var perPage = 5;
    items.slice(perPage).hide();
    $('#pagination-container').pagination({
        items: numItems,
        itemsOnPage: perPage,
        prevText: "&laquo;",
        nextText: "&raquo;",
        onPageClick: function(pageNumber) {
            var showFrom = perPage * (pageNumber - 1);
            var showTo = showFrom + perPage;
            items.hide().slice(showFrom, showTo).show();
        }
    });
    // Paginanation end

} else {


    //Initialize Search Start with all items checked.
    $('#customerfilter').prop('checked', true);
    $('.customer-stories-chk div.w-checkbox-input').addClass("w--redirected-checked");
    $('#articlesfilter').prop('checked', true);
    $('.articles-chk div.w-checkbox-input').addClass("w--redirected-checked");
    $('#guidesfilter').prop('checked', true);
    $('.guides-chk div.w-checkbox-input').addClass("w--redirected-checked");
    $('#glossaryfilter').prop('checked', true);
    $('.glossary-chk div.w-checkbox-input').addClass("w--redirected-checked");
    $('#platformfilter').prop('checked', true);
    $('.platform-chk div.w-checkbox-input').addClass("w--redirected-checked");

    $(".search-result-item").hide();
    $(".customerfilter").fadeIn();
    $(".articlesfilter").fadeIn();
    $(".guidesfilter").fadeIn();
    $(".glossaryfilter").fadeIn();
    $(".platformfilter").fadeIn();







    //pagination for all itmes
    var items = $(".search-result-items .search-result-item");
    var numItems = items.length;
    var perPage = 5;
    items.slice(perPage).hide();
    $('#pagination-container').pagination({
        items: numItems,
        itemsOnPage: perPage,
        prevText: "&laquo;",
        nextText: "&raquo;",
        onPageClick: function(pageNumber) {
            var showFrom = perPage * (pageNumber - 1);
            var showTo = showFrom + perPage;
            items.hide().slice(showFrom, showTo).show();
        }
    });
    // Paginanation end


}



<
/script>