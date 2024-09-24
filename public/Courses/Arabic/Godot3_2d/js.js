let Coursebtn = document.getElementById("Coursebtn");
let Courseslist = document.getElementById("CoursesList");

var clicked = false

Coursebtn.onclick = function(){
    if(!clicked){
        clicked = true;
        Courseslist.classList.remove("hide");
    }
    else{
        clicked = false;
        Courseslist.classList.add("hide");
    }
}