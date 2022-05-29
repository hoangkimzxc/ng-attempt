import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1>Welcome to Codersx</h1>
    <app-hello></app-hello>
    <app-hi></app-hi>
    <app-howdy></app-howdy>`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ng-coders-tokyo';
}
