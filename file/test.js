$(document).ready(function () {

    $(".copybtn").click(function () {
        var txt = $(this).parent().find(".copyarea").html();
        txt = RemoveHtmlTags(txt);
        CopyToClipboard(txt);

        var copied = $(this).parent().find(".badge")

        var self = $(this);
        self.removeClass('text-secondary');
        self.addClass('text-success');

        copied.fadeIn("slow", () => {
            self.removeClass('text-success');
        });
        copied.fadeOut("slow", () => {
            self.addClass('text-secondary')
        });


    });

    // $(this).tooltip();

 

    function CopyToClipboard(txt) {
        var $temp = $("<textarea>")
        $("body").append($temp);
        $temp.val(txt).select();
        document.execCommand("copy");
        $temp.remove();
    }
})

function RemoveHtmlTags(html) {
    return html.replace(/<br(.|)?>/gm, "neeraj").replace(/<[^>]*>/gm, "").replace(/neeraj/gm, "\n").replace(/&nbsp;/gm, " ");
}