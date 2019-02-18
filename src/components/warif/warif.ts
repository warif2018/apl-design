import { Component } from '@angular/core';

/**
 * Generated class for the WarifComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'warif',
  templateUrl: 'warif.html'
})
export class WarifComponent {

  text: string;

  constructor() {
    console.log('Hello WarifComponent Component');
    this.text = 'Hello World';
  }

}
