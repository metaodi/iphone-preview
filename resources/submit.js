var init = function() {
    var urlSubmit = document.getElementById('url-submit'),
        urlForm = document.getElementById('url-form'),
        loadUrl;
    
    loadUrl = function() {
        var url = document.getElementById('url'),
            iphone = document.getElementById('iphone-iframe');
            
        if (! /^http(s)?:\/\/.*/.test(url)) {
            url.value = 'http://' + url.value;
        }
        iphone.src = url.value;
    }   
    urlForm.onsubmit = loadUrl;
}
window.onload = init;
