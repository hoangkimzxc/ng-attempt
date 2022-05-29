import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1 [ngClass]="{ 'with-border': withBorder, 'other-class': true }">
      {{ title }}
    </h1>
    <h1 [class.with-border]="withBorder">
      {{ title }}
    </h1>
    <h1 [ngStyle]="styleObj">
      {{ title }}
    </h1>
    <h1 [ngStyle]="{ color: textColor, background: backgroundColor }">
      {{ title }}
    </h1>
    <h1
      [textContent]="title"
      [style.color]="textColor"
      [style.background]="backgroundColor"
    ></h1>
    <img src="{{ imageSrc }}" />
    <img [src]="imageSrc" [class] [attr.id] />
  `,

  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // Access Modify
  title: string = 'Coders.Tokyo Updated';
  imageSrc = 'https://picsum.photos/200';
  textColor = 'tomato';
  backgroundColor = 'black';
  withBorder = true;

  styleObj = { color: this.textColor, background: this.backgroundColor };
}

// DataBinding
// 1. PropertyBinding
// 2. EventBinding
