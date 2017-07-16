import { Component } from '@angular/core';

@Component({
  selector: 'app-notfound',
  template:  `
  <div class="notfound-content">
  <md-card>
 
  <img md-card-image src="../assets/404-Error-Page.jpg" >

  <md-card-actions>
    <a md-button color="primary" routerLink="/">Go Home</a>
  </md-card-actions>
</md-card>
</div>
    `
})

export class PageNotFoundComponent {
  constructor() { }

}
