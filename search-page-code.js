
    var urlParams = new URLSearchParams(window.location.search);
    var searchQuery = urlParams.get('query');
    var searchHeading = document.querySelector('.search-heading');

$(".search-result-item:contains(/customers/)").addClass("customerfilter");
$(".search-result-item:contains(/articles/)").addClass("articlesfilter");
$(".search-result-item:contains(/guides/)").addClass("guidesfilter");
$(".search-result-item:contains(/glossary/)").addClass("glossaryfilter");
$(".search-result-item:contains(/platform/)").addClass("platformfilter");

$(".search-result-item:contains(/marketplace)").addClass("platformfilter");
$(".search-result-item:contains(/company)").addClass("platformfilter");
$(".search-result-item:contains(/pricing)").addClass("platformfilter");
$(".search-result-item:contains(/resources)").addClass("platformfilter");
$(".search-result-item:contains(/book-a-demo)").addClass("platformfilter");
$(".search-result-item:contains(/policies)").addClass("platformfilter");
$(".search-result-item:contains(/partnerstack-partner-program)").addClass("platformfilter");

//flag some items as top listing items
$(".search-result-item:contains(65,000+)").addClass("topfilter");
$(".search-result-item:contains(company)").addClass("topfilter");
$(".search-result-item:contains(/pricing)").addClass("topfilter")
$(".search-result-item:contains(/book-a-demo)").addClass("topfilter");
$(".search-result-item:contains(legal)").addClass("topfilter");
$(".search-result-item:contains(Certified Partner)").addClass("topfilter");

//Add background images to results without images
$(".w-dyn-bind-empty").attr("src", "https://uploads-ssl.webflow.com/637b90ceaf45f5d5053f6f20/638f55967b291e7d4b8a6163_search-default-image.webp");
$(".search-result-image").removeClass("w-dyn-bind-empty");


$("#filters :checkbox").click(function() {

    var chxboxname = $(this).attr("name");
    $(".search-result-item").hide();
    $(".search-result-item").removeClass("searchfilter");
    $("#filters :checkbox:checked").each(function() {

        $("." + $(this).attr('name')).fadeIn();
        $("." + $(this).attr('name')).addClass("searchfilter");

        //Sort order for search results 
        $.fn.orderChildren = function(order) {
            this.each(function() {
                var el = $(this);
                for (var i = order.length - 1; i >= 0; i--) {
                    el.prepend(el.children(order[i]));
                }
            });
            return this;
        };

        //Sort order for search results
        $(".search-result-items").orderChildren([
            ".platformfilter",
            ".customerfilter",
            ".guidesfilter",
            ".articlesfilter",
            ".glossaryfilter"
        ]);

        //pagination for flters
        // var items = $(".search-result-items .search-result-item." + $(this).attr('name'));
        var items = $(".searchfilter");
        var numItems = items.length;
        var perPage = 12;
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

    //check to see if the fliter checkbox is checked
    if ($('#filters :checkbox').filter(':checked').length < 1) {
        $(".search-result-item").show();
        //hide no mathching results text
        $(".no-result-items").hide();

        //Sort order for search results 
        $.fn.orderChildren = function(order) {
            this.each(function() {
                var el = $(this);
                for (var i = order.length - 1; i >= 0; i--) {
                    el.prepend(el.children(order[i]));
                }
            });
            return this;
        };

        //Sort order for search results
         $(".search-result-items").orderChildren([
            ".platformfilter",
            ".customerfilter",
            ".guidesfilter",
            ".articlesfilter",
            ".glossaryfilter"
        ]);

        //pagination for all items
        var items = $(".search-result-items .search-result-item");
        var numItems = items.length;
        var perPage = 12;
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

//Capture the query string from the URL and insert it into the header
document.addEventListener('DOMContentLoaded', function() {
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
    var perPage = 12;
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

     //Hide all results
    $(".search-result-item").hide();
    //Show all checked results
    $("#filters :checkbox:checked").each(function() {

        $("." + $(this).attr('name')).fadeIn();
        $("." + $(this).attr('name')).addClass("searchfilter");


                //Check for platform words
        var names_arr = ['Partner Recruitment','partner recruitment','','','',''];

       var index = $.inArray(searchQuery, names_arr);
                if (index != -1) {
        
         //Sort order for search results 
        $.fn.orderChildren = function(order) {
            this.each(function() {
                var el = $(this);
                for (var i = order.length - 1; i >= 0; i--) {
                    el.prepend(el.children(order[i]));
                }
            });
            return this;
        };

        //Sort order for search results
         $(".search-result-items").orderChildren([
            ".platformfilter",
            ".customerfilter",
            ".guidesfilter",
            ".articlesfilter",
            ".glossaryfilter"
        ]);

                console.log('Partner Recruitment exists in the array at index ' + index);
                } else {
                 console.log('Partner Recruitment does not exist in the array');
         
          //Sort order for search results 
        $.fn.orderChildren = function(order) {
            this.each(function() {
                var el = $(this);
                for (var i = order.length - 1; i >= 0; i--) {
                    el.prepend(el.children(order[i]));
                }
            });
            return this;
        };

        //Sort order for search results
        $(".search-result-items").orderChildren([
            ".topfilter",
            ".platformfilter",
            ".customerfilter",
            ".guidesfilter",
            ".articlesfilter",
            ".glossaryfilter"
        ]);
        
                }
  
        //pagination for flters
        var items = $(".searchfilter");
        var numItems = items.length;
        var perPage = 12;
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

    });
}

