import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WeatherComponent } from './weather/weather.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WeatherComponent, FormsModule],
  template: ` <app-weather> </app-weather> `,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'weather-app';
}
