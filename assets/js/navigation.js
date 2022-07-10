function navigateUrl(url,content){
    $.get(url,{},function(data){
       
        $("#" + content).html(data);
        window.scroll({
            top:0,
            behavior:"smooth"
        });
    });
}