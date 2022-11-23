const field = document.querySelector('textarea');
const adicionar = document.querySelector('adicionar');
let estilos = [];

function createText() {
    let typedText = field.value;
    const data = {
      text: typedText,
      styles: estilos
    }
    const getList = JSON.parse(localStorage.getItem('myList')) || [];
    localStorage.setItem('myList',JSON.stringify([...getList, data]));
    const node = document.createElement("li");
    const textnode = document.createTextNode(typedText);
    estilos.forEach((estilo) => {
    node.classList.add(estilo);
    })
    node.appendChild(textnode);
    document.getElementById("myList").appendChild(node); 
}

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
    document.getElementById("myList").remove();
    localStorage.removeItem('myList');
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

/*darkmodde
function darkmodde() {
    document.body.classList.toggle("darkmodde");
}
*/


//const getList = JSON.parse(localStorage.getItem('myList')) || [];//pegar do local storage
//localStorage.setItem('myList',JSON.stringify(getList)); //salvar no local storage







