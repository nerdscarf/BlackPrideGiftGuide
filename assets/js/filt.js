//Filter function
$(document).ready(function(){
    $('.button').click(function(){
        const value = $(this).attr('data-filter');
            if (value =='all'){
                $('.product').show('1000');
            }
            else{
                $('.product').not('.'+value).hide('200')
                $('.product').filter('.'+value).show('200')
            }
        })
})


// Adds active class to selected button
$('.button').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
})