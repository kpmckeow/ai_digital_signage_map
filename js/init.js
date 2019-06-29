let DEBUG = false;
let DEBUG_BORDER = "1px solid red";

// Initializes the initial state and position of elements on the page
function initPage() {
    if (DEBUG === true) {
        // $('html').css("border",DEBUG_BORDER);
        $('body').css("border", DEBUG_BORDER);
        $('.debug').css("border", DEBUG_BORDER);
    }

    $(window).resize(function() {
        resizePage();
    });

    resizePage();
    $('html').css("background-image", "url(images/ai_underwater_background.jpg)");

    $(".cluster").hide();
    initNavBars();
}

// Called whenever the viewport size changes
function resizePage() {
    setBody();
    setContent();
}

// Set the size of the body
function setBody() {
    let b = $('body');
    let w = $(window);
    let wx = w.innerWidth();
    let wy = w.innerHeight();
    b.outerWidth(wx);
    b.outerHeight(wy);
}

// Set the size of the content div. The height is dynamically set based on the height of the
// header and footer
function setContent() {
    let c = $('#content_div');
    let hy = $('#header_div').outerHeight();
    let fy = $('#footer_div').outerHeight();
    let wy = $(window).outerHeight();
    c.outerHeight(wy - fy - hy);
}