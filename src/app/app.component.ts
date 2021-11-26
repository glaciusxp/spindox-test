import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`,
  host: {
    '[class.flex-col]': 'true'
  } 
})
export class AppComponent {
  title = 'Spindox Test - Andrea Persano';

  constructor() {}
}
