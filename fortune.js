const xhrRequest = new XMLHttpRequest();

// Helloacm is a fortune api that has a database of quotes. https://helloacm.com/fortune/
function getFortune() {
    xhrRequest.open('GET', 'https://uploadbeta.com/api/fortune/');
    //http://api.usno.navy.mil/moon/phase?year=YEAR
    //https://api.nasa.gov/planetary/apod?api_key=mzw41bHWq1U0pZ8YuVtPkTv9CfLNM89Es2wAOcjD

    xhrRequest.onreadystatechange = function() {
        if (xhrRequest.readyState === 4 && xhrRequest.status === 200) {
            parsedData = JSON.parse(xhrRequest.responseText);
            console.log(parsedData);
//end of  api request

//this function is something I found on http://stackoverflow.com/questions/8053683/display-a-sentence-one-character-at-a-time
//from user James Allerdice. It displays text one letter at a time
            (function($) {
                $.fn.writeText = function(content) {
                    var contentArray = content.split(""),
                        current = 0,
                        elem = this;
                    setInterval(function() {
                        if (current < contentArray.length) {
                            elem.text(elem.text() + contentArray[current++]);
                        }
                    }, 100);
                };

            })(jQuery);
            $('#quote').text("")
            $("#quote").writeText(parsedData)


        }
    }
    xhrRequest.send();
}

