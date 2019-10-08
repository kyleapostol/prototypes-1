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

            console.log('firstMovieThirdImage: ', firstMovieThirdImage);


            }
        }
        
    }

            console.log('3) Making AJAX request');
            $.ajax(ajaxConfig);

            console.log('4) End of getData');
}