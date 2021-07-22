// require("babel-core/register");
// require("babel-polyfill");

// const quoteController = {

//   baseUrl: 'https://api.quotable.io/',

//   async randomQuote() {
//     let url = this.baseUrl + 'random';
    
//     const response = await fetch(url)
//     const data = await response.json()
//     //  console.log(data)
//     return data;
//   }

// };

// Set local Storage marker to determine what the day is 
localStorage.setItem('marker', 0);

if(!localStorage.getItem('favorites')) {
  var array = [];

  localStorage.setItem("favorites", JSON.stringify(array));
}




