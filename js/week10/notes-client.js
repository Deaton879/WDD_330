const random = "https://api.quotable.io/random";
let quoteContainer = document.getElementById('quote');
let quote = new Array;

async function fetchRandom() {
    fetch(random)
    .then(response => response.json())
    .then(data => {
        quote = data;
        console.log(quote);
    });
}

function displayRandom() {
    quoteContainer.innerHTML = "";

    let item = document.createElement('p');
    
    item.classList.add('fancy');

    item.innerHTML = quote.content + "<br><br><b class='emphasis'>- " + quote.author + "</b>"; 
    
    quoteContainer.appendChild(item);
}