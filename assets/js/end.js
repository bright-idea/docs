$(document).ready(function () {
    $('ul.tabs li').click(function () {
        var tab_id = $(this).attr('data-tab');
        var data_class =$(this).attr('data-class'); 


        
        $('[data-class="'+data_class+'"]').removeClass('current');
        $('[data-class="'+data_class+'"]').removeClass('current');
        $('.' + tab_id+'[data-class="'+data_class+'"]').addClass('current');
        $(this).addClass('current');

    });
});


$(document).ready(function () {
    $('.btn-method-select').click(function () {
        var targit =$(this).attr('data-targit');
        $('div.CodeSections').removeAttr('style');
        $('div.CodeSections').attr('style','display: none;');
        $('div.CodeSections[data-targit="'+targit+'"]').removeAttr('style');
        //var me = $('#methods');
        //me.html = 
        
        
    });
});