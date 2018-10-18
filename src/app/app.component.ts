import { Component } from '@angular/core';
import { SwUpdatesService } from './core/services/sw-updates.service';
import { LocationService } from './core/services/location.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'docs';
  constructor(
    private swUpdates: SwUpdatesService,
    private location: LocationService
  ) {

  }
}
