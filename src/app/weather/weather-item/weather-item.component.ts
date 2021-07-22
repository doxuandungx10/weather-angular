import { Component, Input, OnInit } from '@angular/core';
import { WeatherItem } from './weather-item';
import { WeatherService } from '../weather.service';


@Component({
  selector: 'app-weather-item',
  templateUrl: './weather-item.component.html',
  styleUrls: ['./weather-item.component.scss']
})


export class WeatherItemComponent implements OnInit {
  @Input('item') weatherItem!: WeatherItem
  @Input() cityName: string = ''


  constructor(private _weatherService: WeatherService) { }

  ngOnInit() {
  }

  getDayNight() {

    console.log(this.weatherItem.isDay)
    if (new Date().valueOf() / 1000 < this.weatherItem.isDay) {
      // console.log('Day Time');
      return true
    } else {
      // console.log('Night Time');
      return false
    }
  }
}

