var Submit = function() {
    var me = this;

    me.loadUrl = function(url, iframe) {
        if (! /^https?.*/.test(url.value)) {
            url.value = 'http://' + url.value;
        }
        console.log("Loading " + url.value);
        iframe.src = url.value;
    };

    me.init = function() {
        var url = document.getElementById('url'),
            iphone = document.getElementById('iphone-iframe');
       
        url.onkeyup = function (e) {
            if (e.keyCode === 13) {
                me.loadUrl(url, iphone);
            }
        };
    };
};
