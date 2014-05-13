var currentPageIndex = 0;

function getNextPage() {
    var pages = $('div.scrollable');
    currentPageIndex = (currentPageIndex + 1 >= pages.length) ? 0 : currentPageIndex + 1;
    
    return pages[currentPageIndex];
}

$("img.lazy").lazyload({
    effect : "fadeIn"
});