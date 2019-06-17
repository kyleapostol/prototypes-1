var global_result;


$(document).ready(initializeApp);

function initializeApp(){
    $('button').click(getData);
}

function getData() {
    console.log('1) getData called from button click');
    var ajaxConfig = {
        dataType: 'json',
        url: 'http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/ws/RSS/topMovies/json',
        method: 'get',
        success: function (result) {
            console.log('2) AJAX Success function called, with the following result:', result),
                global_result = result;

            var firstMovieThirdImage = result.feed.entry[0]['im:image'][2].label;
            console.log('firstMovieThirdImage: ', firstMovieThirdImage);

            for (var movieImages = 0; movieImages < result.feed.entry.length; movieImages++) {
                var thirdMovieImage = result.feed.entry[movieImages]['im:image'][2].label;
                var image = $('<img>').attr('src', thirdMovieImage);
                var title = result.feed.entry[movieImages].title.label;
                console.log("grab the title: ", title);
                var text = $('<p>').text(title);
                 $('#main').append(image);
                 $('#main').append(text);
            }
        }
        
    }

            console.log('3) Making AJAX request');
            $.ajax(ajaxConfig);

            console.log('4) End of getData');
}