const field = document.querySelector('textarea');
const adicionar = document.querySelector('adicionar');
let estilos = [];

function createText() {
  let typedText = field.value;
  if (typedText === "" ) {
    return;
  }
  const node = document.createElement("li");
  const textnode = document.createTextNode(typedText);
  const data = {
      text: typedText,
      styles: estilos
    }
  const getList = JSON.parse(localStorage.getItem('myList')) || [];
    localStorage.setItem('myList',JSON.stringify([...getList, data]));
    
    estilos.forEach((estilo) => {
    node.classList.add(estilo);
    });

    document.getElementById("myList").appendChild(node);
    node.appendChild(textnode);
    
    field.value = "";

}
document.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    var enviar = document.getElementById("adicionar");
    enviar.click();
  }
});


  
window.onload = function() {
  const getList = JSON.parse(localStorage.getItem('myList')) || [];
    getList.forEach((item) => {
      const node = document.createElement("li");
      const textnode = document.createTextNode(item.text);
    item.styles.forEach((estilo) => {
    node.classList.add(estilo);
    })
        node.appendChild(textnode);
        document.getElementById("myList").appendChild(node);
    })
}


function removeText() {
  const remove = document.getElementById("myList");
  remove.removeChild(remove.lastElementChild)
  while(remove.firstChild){
    remove.removeChild(remove.firstChild);
    localStorage.removeItem('myList');
  }
}

function aplicarEstilos(estilo) {
  if
  (estilos.includes(estilo)){
  estilos = estilos.filter((estiloAtual) => estiloAtual !== estilo);
  }
  else{
  estilos.push(estilo);
}
}

/*darkmodde*/
function darkmode() {
    document.body.classList.toggle("darkmode");
}



const boldbtn = document.getElementById("boldbtn");
boldbtn.addEventListener("click", () => { 
  boldbtn.classList.toggle("clicked");
});

const italicbtn = document.getElementById("italicbtn");
italicbtn.addEventListener("click", () => { 
  italicbtn.classList.toggle("clicked");
});

const leftbtn = document.getElementById("leftbtn");
leftbtn.addEventListener("click", () => { 
  leftbtn.classList.toggle("clicked");
});

const centerbtn = document.getElementById("centerbtn");
centerbtn.addEventListener("click", () => { 
  centerbtn.classList.toggle("clicked");
});

const rightbtn = document.getElementById("rightbtn");
rightbtn.addEventListener("click", () => { 
  rightbtn.classList.toggle("clicked");
});















