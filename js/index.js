// $(document).ready(function () {
//     $("#arrow").click(function () { 
//         $(".card-block").collapse('toggle');
        
//     });
// });

var myVideo = document.getElementById("video1"); 

function playPause() { 
    if (myVideo.paused) 
        myVideo.play();
    else 
        myVideo.pause(); 
}

// والتي تظهر رسالة خطأ عندما يقوم المستخدم بإدخال معلومات خاطئة validate() شيفرة التابع

$(document).ready(function() {
    $(function () {
        $("#commentForm").validate();
    });
});