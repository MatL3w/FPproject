import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  isFixed: boolean = false;
  scrollDistance: number = 20;
  @HostListener('window:scroll')
  onScroll() {
    if (window.pageYOffset > this.scrollDistance) {
      this.isFixed = true;
    } else {
      this.isFixed = false;
    }
  }
}
