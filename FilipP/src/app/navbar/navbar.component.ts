import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  isNavbarExpanded: boolean = false;
  constructor(private router: Router) {}
  toggleNavbar() {
    this.isNavbarExpanded = !this.isNavbarExpanded;
  }
  redirectToMain() {
    this.router.navigate(['/']);
  }
  redirectToContact() {
    this.router.navigate(['/kontakt']);
  }
  redirectToCatalogs() {
    this.router.navigate(['/katalogi']);
  }
  redirectToCRealizacje() {
    this.router.navigate(['/realizacje']);
  }
}
