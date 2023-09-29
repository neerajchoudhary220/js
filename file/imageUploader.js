$(document).ready(function (e) {
    $('#fileField').on('change', function (e) {
        const file = e.target.files[0];
        const url = window.URL.createObjectURL(file);
        const img = document.getElementById('DisplayImg')
        img.setAttribute('src', url)
        
      })

    $("#imageUploadBtn").click(function(){
        $('#fileField').trigger('click');
    })
})