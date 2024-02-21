import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [FormsModule,CommonModule,
    HttpClientModule],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css'
})
export class WeatherComponent {
  
  city : string = ' ';
  weatherData : any;

  constructor(private http :HttpClient) {}

  searchWeather(){
    if(this.city.trim() !==' '){
      const apiKey = "2aaff7838f80468ea97113036242102";
      const apiURL = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${this.city}&aqi=no`;
      this.http.get(apiURL).subscribe((data:any)=>{
        this.weatherData = data;
        console.log(this.weatherData)
      },(error)=>{
        console.log("Error fetchign weather data :" ,error);
      })
    }
  }
}
