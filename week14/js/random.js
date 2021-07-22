// require("babel-core/register");
// require("babel-polyfill");

function initialize() {

    let parent = document.getElementById('random-quote');
  
    let contentP = document.createElement("p");
    contentP.setAttribute('id', 'content');
    let authorP = document.createElement("p");
    authorP.setAttribute('id', 'author');
  
    parent.appendChild(contentP);
    parent.appendChild(authorP);    
}

initialize()