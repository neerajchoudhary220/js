$("#removehtmltagBtn").click(function(){
    var htmlcode = $("#htmlgtags").val();
    RemoveHtmlTags(htmlcode);
    $("#htmlgtags").val(RemoveHtmlTags(htmlcode));
})