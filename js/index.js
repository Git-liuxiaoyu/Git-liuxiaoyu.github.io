$(function (){
    var i=0;
    $("#img").click(function (){
        if(i==0){
            $("#imgwx").show(500);
            i++;
        }else {
            i--;
            $("#imgwx").hide(500);
        }
    })
});