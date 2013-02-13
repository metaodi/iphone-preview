var loadUrl = function(url, iframe) {
    if (! /^https?.*/.test(url.value)) {
        url.value = 'http://' + url.value;
    }
    console.log("Loading " + url.value);
    iframe.src = url.value;
};

var init = function() {
    var url = document.getElementById('url'),
        iphone = document.getElementById('iphone-iframe');
   
    url.onkeyup = function (e) {
        if (e.keyCode === 13) {
            loadUrl(url, iphone);
        }
    };
};
