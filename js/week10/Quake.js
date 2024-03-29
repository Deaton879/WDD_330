// Model for Team Activity Week 10

import { getJSON } from './utilities.js';

export default class Quake {
  constructor() {
    this.baseUrl =
      'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson';
    // store the last batch of retrieved quakes in the model.  I don't always do this...in this case the api doesn't have an endpoint to request one quake.
    this._quakes = [];
  }
  async getEarthQuakesByRadius(position, radius = 100) {
    this._quakes = await getJSON(
      // this.baseUrl +
      //   `&starttime=2019-01-01&endtime=2019-03-02&latitude=${
      //     position.lat
      //   }&longitude=${position.lon}&maxradiuskm=${radius}`
      'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-03-02&latitude=43.814540699999995&longitude=-111.78491029999999&maxradiuskm=100'
    );
    return this._quakes;
  }
  getQuakeById(id) {
    return this._quakes.features.filter(item => item.id === id)[0];
  }
}
          