5

const options= {day: "long", day: "numeric", month: "long", year:"numeric"};
          
document.getElementById('currentDate').textContent=new Date().toLocaleDateString("en-US", options);



const hambutton = document.querySelector(".ham");
hambutton.addEventListener("click", toggleMenu, false);

function toggleMenu() {
   /* document.getElementById("navigation").classList.toggle("hide");*/
    document.querySelector(".navigation").classList.toggle("responsive");
}

function showBanner() {
    var today= new Date();
    var wkday= today.getDay();
    if (wkday == 5){
    document.getElementById("popup").classList.toggle("noshow");
   
}
}
