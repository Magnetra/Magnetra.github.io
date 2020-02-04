5
//const options={minute: "numeric", hour: "numeric", day: "numeric", month: "long", }
const options= {day: "long", day: "numeric", month: "long", year:"numeric"};
          
document.getElementById('currentDate').textContent=new Date().toLocaleDateString("en-US", options);
// const modoptions ={ second: "numeric", minute: "numeric", hour: "numeric", day: "numeric", month:"numeric", year: "numeric"};
//document.getElementById('lastModified').textContent=new Date(document.lastModified);
//document.getElementById('lastModified').textContent=document.lastModified;


const hambutton = document.querySelector(".ham");
hambutton.addEventListener("click", toggleMenu, false);

function toggleMenu() {
   /* document.getElementById("navigation").classList.toggle("hide");*/
    document.querySelector(".navigation").classList.toggle("responsive");
}


