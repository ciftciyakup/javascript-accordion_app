var accordion=document.querySelector("#accordion")

var titles=accordion.getElementsByTagName("h2")

for(i=0;i<titles.length;i++){
    titles[i].addEventListener("click",displayAccordion)
}

function displayAccordion(){
    content=this.nextSibling.nextSibling;
    
    if(content.style.display!="block"){
        content.style.display="block";
    }else{
        content.style.display="none";
    }
}