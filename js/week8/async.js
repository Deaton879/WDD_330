//Star Wars API - people
const _apiURL = "https://pokeapi.co/api/v2/";


async function fetchAPI(_apiURL) {
    
    try {
        const response = await fetch(_apiURL);

        if (!response.ok) {
            throw Error(response.statusText);
        } else {
            const fetchJson = await response.json();
            return fetchJson;
        }
    } catch (error) {
        console.log(error);
    }
}


function getPeople(url) {
    return fetchAPI(url);
}

function renderPokemon(pokemon) {
    
}
// fetchAPI(_apiURL);
//     fetch(x)
//     .then((response) => response.json())
//     .then((people) => {

//         console.log(people);

//         const parent = document.getElementById('starwars');    
//         for(let i = 0; i <= 10; i++) {
//             let container = document.createElement('p');
//             container.innerHTML = people.results[i].name;
//             parent.appendChild(container);
//         }
//         document.getElementById('prev').setAttribute('title', people.prev);
//         document.getElementById('next').setAttribute('title', people.next);
            
//     });

