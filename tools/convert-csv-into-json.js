window.outputData = '';
window.fileData = '';
function showFile(input) {
    $('.upload_icon').addClass('d-none');
    $(".custom-loader").removeClass('d-none');
    let f = input.files[0];
    // getFileName(f)

    let filereader = new FileReader()
    filereader.readAsText(f)

    filereader.onloadstart = function (e) {

    }
    filereader.onprogress = function (e) {
        console.log(e)

    }
    filereader.onload = function () {
        fileData = filereader.result
        // $("#file_reading").text(fileData);
        $("#convert_csv_to_json_btn,#convert_new_file_btn").removeClass('d-none');
        $(".custom-loader").addClass('d-none');
        $(".check_mark").removeClass('d-none');
    };

    filereader.onerror = function () {
        console.warn(filereader.error);
    }

}



//click to upload button
$("#uploadButton").click(function () {
    $("#real_upload").trigger('click');
})

//Get csv file Name
function getFileName(f) {
    const fileName = f.name;
    $("#fileName").text(fileName);
}

//Filter csv data
function readable() {
    // console.log(file)
    let data = fileData.replace("\r", "").replace("'", "").replace(/"/gm, "").replace(/\r/gm, "").split('\n');
    const x = [];
    const rows = [];
    const headers = data[0].toString().split(",");


    for (let i = 1; i <= data.length; i++) {
        if (data[i] != undefined && data[i].length > 0) {
            x.push([data[i]])

        }
    }

    for (let i = 0; i <= x.length - 1; i++) {
        rows.push(x[i].toString().split(','))
    }


    return CreateObj(headers, rows)
}

//Create obj 
function CreateObj(header, rows) {
    const myobj = new Object()
    const header_length = header.length - 1;

    if (rows.length > 1) {
        for (let i = 0; i <= header_length; i++) {
            myobj[header[i]] = [];
        }
        for (let i = 0; i <= rows.length - 1; i++) {
            for (let j = 0; j <= header_length; j++) {
                myobj[header[j]].push(rows[i][j])
            }
        }
    } else {
        for (let i = 0; i <= rows.length - 1; i++) {
            for (let j = 0; j <= header_length; j++) {
                myobj[header[j]] = rows[i][j]
            }
        }
    }



    downloadJsonFile(myobj);
}

//download jsonfile
function downloadJsonFile(data) {

    const jsondata = JSON.stringify(data)

    const blob = new Blob([jsondata], { type: 'text/json;charset=utf-8' })
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.setAttribute('href', url);
    a.setAttribute('download', Date.now() + '.json');
    a.click();
}

//click to convert csv to json button


$("#convert_csv_to_json_btn").click(function () {
    // const start = performance.now();

    readable();
    // const end = performance.now();
    // console.log(`Execution time: ${end - start} ms`);
})

//click to convert new file button
$("#convert_new_file_btn").click(function(){
  location.reload();

})

