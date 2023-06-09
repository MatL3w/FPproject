import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'FilipP';
  isNavbarExpanded: boolean = false;
  toggleNavbar() {
    this.isNavbarExpanded = !this.isNavbarExpanded;
  }
}
