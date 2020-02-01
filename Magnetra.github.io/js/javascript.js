          
const options= {year:"numeric"};
          
document.getElementById('currentdate').textContent=new Date().toLocaleDateString("en-US", options);
         
document.getElementById('lastmod0').textContent=document.lastModified;