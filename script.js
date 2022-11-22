const field = document.querySelector('textarea');
const adicionar = document.querySelector('adicionar');


function createText() {
    let typedText = field.value;
    const node = document.createElement("li");
    const textnode = document.createTextNode(typedText);
     if(textarea.style.fontWeight == "bold" && textarea.style.fontStyle == "italic") {
        node.setAttribute("class", "bold %% italic");
    }
    else{
        node.setAttribute("class", "normal");
    }
    

    node.appendChild(textnode);
    document.getElementById("myList").appendChild(node);

   
}

function removeText() {
    document.getElementById("myList").removeChild(document.getElementById("myList").lastChild);
}



function bold(){
    if (document.getElementById("textarea").style.fontWeight=="bold"){
        document.getElementById("textarea").style.fontWeight="normal"
    }
    else{
        document.getElementById("textarea").style.fontWeight="bold"
    }
  
  }
  function italic(){
    if (document.getElementById("textarea").style.fontStyle=="italic"){
        document.getElementById("textarea").style.fontStyle="normal"
    }
    else{
        document.getElementById("textarea").style.fontStyle="italic"
    }
  
  }
  function left(){
    document.getElementById("textarea").style.textAlign = "left";
  
  }
  function center(){
  document.getElementById("textarea").style.textAlign = "center";
  
  }
  function right(){
  
    document.getElementById("textarea").style.textAlign = "right";
  
  }
  
  function f9(){
  
    document.getElementById("textarea").style.fontWeight = "normal";
    document.getElementById("textarea").style.textAlign = "left";
    document.getElementById("textarea").style.fontStyle = "normal";
    document.getElementById("textarea").style.textTransform = "capitalize";
    document.getElementById("textarea").value=" ";
  }
