$(document).ready(function () {
    $(document).ready(function(){
        $('[data-toggle="tooltip"]').tooltip();   
      });

      
    $(".copybtn").click(function () {
        var txt = $(this).parent().find(".copyarea").html();
        txt = RemoveHtmlTags(txt);
        CopyToClipboard(txt.trim());

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

})
function CopyToClipboard(txt) {
    var $temp = $("<textarea>")
    $("body").append($temp);
    $temp.val(txt).select();
    document.execCommand("copy");
    $temp.remove();
}

function RemoveHtmlTags(html) {
    return html.replace(/<br(.|)?>/gm, "neeraj").replace(/<[^>]*>/gm, "").replace(/neeraj/gm, "\n").replace(/&nbsp;/gm, " ");
}

    

     function AnimateToolCopyBtn(){
        var copyBtn = $('.toolCopyBtn');
        copyBtn.fadeIn("slow",()=>{
            copyBtn.text("Copied!");
        })
    
        copyBtn.fadeOut("slow",()=>{
            copyBtn.html(`Copy <i class="fa fa-copy"></i>`);
        })
    
        copyBtn.fadeIn();
    
    
     }


