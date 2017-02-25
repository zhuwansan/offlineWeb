/**
 * Created by zhuwansan on 16/7/3.
 */
    function save (){
        var name =  $('#name').val();
        var content = $('#content').val();
        if(name===''){
            window.location.href="index.html";
            return false;
        }else{
            localStorage.setItem(name,content);
            window.location.href="index.html";
        }
    }
$('#save').on('click',function(){
    save();
});
