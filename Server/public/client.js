console.log('in client.js!!!!!!!!!!');

$(document).ready(onReady);


function onReady() {
    
    $(function() {
        var open = false;
        $('#footerSlideButton').click(function() {
            if(open === false) {
                $('#footerSlideContent').animate({ height: '300px' });
                $(this).css('backgroundPosition', 'bottom left');
                open = true;
            } else {
                $('#footerSlideContent').animate({ height: '0px' });
                $(this).css('backgroundPosition', 'top left');
                open = false;
            } 
        });		
    });

   
}

