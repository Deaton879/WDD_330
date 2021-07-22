let parent = document.getElementById('favContainer');

let favorites = JSON.parse(localStorage.getItem('favorites'));

favorites.forEach(quote => {
    let qc = document.createElement('div');
    qc.setAttribute('class', 'quote-container');
    let contentP = document.createElement("p");
    contentP.setAttribute('class', 'content');
    let authorP = document.createElement("p");
    authorP.setAttribute('class', 'author');

    let divider = document.createElement('hr');

    contentP.innerHTML = quote.content;
    authorP.innerHTML = quote.author;
    qc.appendChild(contentP);
    qc.appendChild(authorP);
    
    parent.appendChild(qc);
    parent.appendChild(divider);
});

