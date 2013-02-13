module("Submit", {
    setup: function() {
        this.mockUrl = { value: '' };
        this.mockFrame = { src: '' };
    }
});
test("loadUrl without http", function() {
    this.mockUrl.value = 'www.readmore.ch';

    loadUrl(this.mockUrl, this.mockFrame);
    equal('http://www.readmore.ch', this.mockUrl.value, 'The url should be  http://www.readmore.ch');
    equal('http://www.readmore.ch', this.mockFrame.src, 'The frame should point to http://www.readmore.ch');
});

test("loadUrl with http", function() {
    this.mockUrl.value = 'http://www.readmore.ch';

    loadUrl(this.mockUrl, this.mockFrame);
    equal('http://www.readmore.ch', this.mockUrl.value, 'The url should be  http://www.readmore.ch');
    equal('http://www.readmore.ch', this.mockFrame.src, 'The frame should point to http://www.readmore.ch');
});

test("loadUrl with https", function() {
    this.mockUrl.value = 'https://www.readmore.ch';

    loadUrl(this.mockUrl, this.mockFrame);
    equal('https://www.readmore.ch', this.mockUrl.value, 'The url should be  https://www.readmore.ch');
    equal('https://www.readmore.ch', this.mockFrame.src, 'The frame should point to https://www.readmore.ch');
});

