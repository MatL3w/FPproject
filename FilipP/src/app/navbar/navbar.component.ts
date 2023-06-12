import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  isNavbarExpanded: boolean = false;
  toggleNavbar() {
    this.isNavbarExpanded = !this.isNavbarExpanded;
  }
}
