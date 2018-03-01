import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'

@Injectable()
export class WeatherProvider {

  apiKey = '339defd82f9a8fbc';
  URL;

  constructor(public http: Http) {
    console.log('Hello WeatherProvider Provider');
    this.URL = `http://api.wunderground.com/api/${this.apiKey}/conditions/q`
  }

   getWeather(city, state){
     return this.http.get(this.URL+'/'+state+'/'+city+'.json')
       .map(res => res.json());
   }

}
