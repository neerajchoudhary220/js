window.outputData = '';
function showFile(input) {
    let f = input.files[0];
    getFileName(f)

    let filereader = new FileReader()
    filereader.readAsText(f)

    filereader.onload = function () {

        const fileResult = filereader.result
        $("#file_reading").text(fileResult);
        outputData = readable(fileResult)
        
        $("#convert_csv_to_json_btn").prop('disabled', false);


    };

    filereader.onerror = function () {
        console.warn(filereader.error);
    }

}


//Get csv file Name
function getFileName(f) {
    const fileName = f.name;
    $("#fileName").text(fileName);
}

//Filter csv data
function readable(file) {

    // console.log(file)
    let data = file.replace("\r", "").replace("'", "").replace(/"/gm, "").replace(/\r/gm, "").split('\n');
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
    return myobj;
    // downloadJsonFile(myobj)

}

//download jsonfile
function downloadJsonFile() {

    const jsondata = JSON.stringify(outputData)

    const blob = new Blob([jsondata], { type: 'text/json;charset=utf-8' })
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.setAttribute('href', url);
    a.setAttribute('download', Date.now() + '.json');
    a.click();
}

//click to convert csv to json button


$("#convert_csv_to_json_btn").click(function () {
    downloadJsonFile();
})