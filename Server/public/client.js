console.log('in client.js!!!!!!!!!!');

$(document).ready(onReady);


function onReady() {
    $('#moreAboutML').css({ display:'none' });
    $('#moreAboutML1').css({ display:'none' });
    $('#moreAboutMLq').css({ display:'none' });

    $(function() {
        var open = false;
        $('#footerSlideButtonq').click(function() {
            if(open === false) {
                $('#footerSlideContentq').animate({ height: '300px' });
                $(this).css('backgroundPosition', 'bottom left');
               
                open = true;
                $('#moreAboutMLq').css({ display:'block' });
            } else {
                $('#footerSlideContentq').animate({ height: '0px' });
                $(this).css('backgroundPosition', 'top left');
               

                open = false;
                $('#moreAboutMLq').css({ display:'none' });
            } 
        });		
    });

    $(function() {
        var open = false;
        $('#footerSlideButton').click(function() {
            if(open === false) {
                $('#footerSlideContent').animate({ height: '300px' });
                $(this).css('backgroundPosition', 'bottom left');
               
                open = true;
                $('#moreAboutML').css({ display:'block' });
            } else {
                $('#footerSlideContent').animate({ height: '0px' });
                $(this).css('backgroundPosition', 'top left');
               

                open = false;
                $('#moreAboutML').css({ display:'none' });
            } 
        });		
    });

    $(function() {
        
        var open = false;
        $('#footerSlideButton1').click(function() {
            if(open === false) {
                $('#footerSlideContent1').animate({ height: '200px' });
                $(this).css('backgroundPosition', 'bottom left');
                open = true;
                $('#moreAboutML1').css({ display:'block' });

            } else {
                $('#footerSlideContent1').animate({ height: '0px' });
                $(this).css('backgroundPosition', 'top left');
                open = false;
                $('#moreAboutML1').css({ display:'none' });

            } 
        });		
    });


    $(function() {
        
        var open = false;
        $('#footerSlideButton11').click(function() {
            if(open === false) {
                $('#footerSlideContent11').animate({ height: '200px' });
                $(this).css('backgroundPosition', 'bottom left');
                open = true;
                $('#moreAboutML11').css({ display:'block' });

            } else {
                $('#footerSlideContent11').animate({ height: '0px' });
                $(this).css('backgroundPosition', 'top left');
                open = false;
                $('#moreAboutML11').css({ display:'none' });

            } 
        });		
    });
   

    $(window).scroll(function() {
        var scrollTop = $(this).scrollTop();
      
        $('.header-overlay').css({
          opacity: function() {
            var elementHeight = $(this).height();
            return .4 - (scrollTop -elementHeight  ) / elementHeight;
          }
        });
      });

      $(window).scroll(function() {
        var scrollTop = $(this).scrollTop();
      
        $('.header-overlay2').css({
          opacity: function() {
            var elementHeight = $(this).height();
            return 1 + (scrollTop -elementHeight  ) / elementHeight;
          }
        });
      });

      
}

