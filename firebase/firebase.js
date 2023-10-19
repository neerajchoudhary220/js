
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCAUSKTqaZYhpozrQ4qSU5GCPXNvZXN81E",
    authDomain: "myfirstjsproject-3d08a.firebaseapp.com",
    projectId: "myfirstjsproject-3d08a",
    storageBucket: "myfirstjsproject-3d08a.appspot.com",
    messagingSenderId: "1078655661263",
    appId: "1:1078655661263:web:af0204210db139baf0f3ba",
    measurementId: "G-C9JH6CWTH2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

import {
    getDatabase,
    ref,
    set,
    onValue,
    get,
    child,
    update,
    remove,
} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";
const db = getDatabase();


//insert the data
function insetData(id, name, eml) {
    set(ref(db, `users/${id}`), {
        username: name,
        email: eml,
    })
        .then(() => {
            //   alert("succes");
        })
        .catch((err) => {
            alert(err);
        });
}

//update the data

function updateData(id, name, eml) {

    update(ref(db, `users/${id}`), {
        username: name,
        email: eml
    }).then(() => {
        console.log("Success");
    }).catch((err) => {
        console.log(err);
    })
}

//delete the data

function deleteData(id){
    remove(ref(db,`users/${id}`)).then(()=>{
        console.log("Success");
    }).catch((err)=>{
        console.log(err);
    })
}



//fetch data
const starCountRef = ref(db, "users");
onValue(starCountRef, (snapshot) => {
    $("#output").html('');
    const data = snapshot.val();
    $.each(data, function (indx, value) {
        let data = value;
        if (data) {
            $("#output").append(`id:${indx}<br>`);

            if (data.username) {
                $("#output").append(`Name:${data.username}<br>`);
            }
            if (data.email) {
                $("#output").append(`Email:${data.email}<br>`);

            }
            $("#output").append(`<button type="button" class="btn btn-danger deleteBtn" id="${indx}">Delete</button> <br>`);


        }
    });
});

//save btn click

$("#SaveBtn").click(function () {
    const id = $("#id").val();
    const name = $("#name").val();
    const email = $("#email").val();
    insetData(id, name, email);
});

//update button click
$("#updateBtn").click(function () {
    const id = $("#id").val();
    const name = $("#name").val();
    const email = $("#email").val();
    updateData(id,name,email);
});


//delete Button click
$("#output").on('click','.deleteBtn',function () {
    const id = $(this).attr('id');
    deleteData(id);
})

