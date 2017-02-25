/**
 * Created by zhuwansan on 16/7/2.
 */
$(function(){

    var dogsStorage = window.localStorage;
    var detailSection = $('#details');

    $.each(dogsStorage,function(name,content){
        var detail_item = $('<div class="detail_item"></div>');
        var nameSpan = $('<span class="name"></span>');
        var contentSpan = $('<span class="content"></span>');
        var deletBtn = $('<button class="del">删除</button>')
        nameSpan.text(name);
        contentSpan.text(content);
        detail_item.append(nameSpan,contentSpan,deletBtn);
        detailSection.append(detail_item);
    });

    function load (filt) {
        if (filt) {
            $('span.name').parent().css('display', 'none');
            $('span.name:contains("' + filt + '")').parent().css('display', 'block');
        } else {
            $('span.name').parent().css('display', 'block');
        }
    }
    function del (that){
        var rmNode = $(that);
        var rmString = rmNode.siblings('.name')[0].innerHTML;
        window.localStorage.removeItem(rmString);
        rmNode.parent().remove();
    }
    $('#getDog').on('click',function(){
        var myDog = $('#myDog').val();
        load(myDog);
    });
    $('.del').on('click',function(){
        del(this);
    });


});


