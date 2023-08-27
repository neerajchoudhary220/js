$(document).ready(function () {
    $("#removejscommentbtn").click(function () {
        $("#jscode").val(removejscomment($("#jscode").val()));
    })
})

function removejscomment(txt) {
    return txt.replace(/\/\/((.|\n)*?.*)/gm, "")
}

$(".toolCopyBtn").click(function(){
    var txt =  $("#jscode").val();
    CopyToClipboard(txt);
    AnimateToolCopyBtn();
 })