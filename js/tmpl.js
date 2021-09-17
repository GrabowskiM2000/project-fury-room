
var basicFontSizeData = [];
        $('.font').each(function() {
            basicFontSizeData.push(parseFloat($(this).css('font-size')));
        });
        $('.myButton').on('click', function() {
            if($(this).data('reset') == 'reset'){
                $('.font').each(function(i) {
                    $(this).css('font-size', basicFontSizeData[i] + 'px');
                });

            } else if($(this).data('incress') == 'incress' && (parseFloat($(this).css('font-size'))) < 30){
                $('.font').each(function(i) {
                    $(this).css('font-size', (parseFloat($(this).css('font-size')) + 5) + 'px');
                });

            } else if($(this).data('decress') == 'decress' && (parseFloat($(this).css('font-size'))) > 17){
                $('.font').each(function(i) {
                    $(this).css('font-size', (parseFloat($(this).css('font-size'))- 5)  + 'px');
                });
            }
        });
        $('.myButton1').on('click',function(){
          jQuery( ".blackline::before , span , section , header , footer , .offerbg , body , a" ).toggleClass( "contrast-black" )
          jQuery( "*" ).toggleClass( "contrast-yellow" )
       });