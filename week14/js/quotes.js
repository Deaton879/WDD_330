const quoteController = {

  baseUrl: 'https://api.quotable.io/',

  async randomQuote() {
    let url = this.baseUrl + 'random';
    
    const response = await fetch(url)
    const data = await response.json()
    //  console.log(data)
    return data;
  }

};

export default quoteController;