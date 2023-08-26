$(document).ready(function () {

    $(".copybtn").click(function () {
        var txt = $(this).parent().find(".copyarea").text();
        CopyToClipboard(txt);
        var copied = $(this).parent().find(".badge")

        var self = $(this);
        self.removeClass('text-secondary');
        self.addClass('text-success');

        copied.fadeIn("slow", () => {
            self.removeClass('text-success');
        });
        copied.fadeOut("slow",()=>{
            self.addClass('text-secondary')
        });


    });

    // $(this).tooltip();


    function CopyToClipboard(txt) {
        var $temp = $("<input>")
        $("body").append($temp);
        $temp.val(txt).select();
        document.execCommand("copy");
        $temp.remove();
    }
})