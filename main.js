let photocnt = 1000;
let savingcnt = 600;
let commitcnt = 900;
let feedcnt = 1200;

document.addEventListener("DOMContentLoaded",()=>{

     const intervalId = setInterval(function() {
        photocnt++;
        feedcnt++;
        commitcnt++;
        savingcnt++;

               document.getElementById("count").innerHTML=photocnt;
               document.getElementById("count3").innerHTML=savingcnt;
               document.getElementById("count2").innerHTML=commitcnt;
               document.getElementById("count4").innerHTML=feedcnt;
               if(savingcnt == 1500){
                clearInterval(intervalId);
               }
   
       }, 1)

      
    
        

    
});