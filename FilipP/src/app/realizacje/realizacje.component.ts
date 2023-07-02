import { Component, HostListener } from '@angular/core';
declare var bootstrap: any;
@Component({
  selector: 'app-realizacje',
  templateUrl: './realizacje.component.html',
  styleUrls: ['./realizacje.component.css'],
})
export class RealizacjeComponent {
  @HostListener('window:click', ['$event'])
  onWindowClick(event: MouseEvent) {
    if (
      (event.target as HTMLElement).tagName == 'IMG' &&
      (event.target as HTMLElement).id != 'NavBarphoneIcon'
    ) {
      if (this.modalIsVisible === 'none') {
        this.modalIsVisible = 'block';
      } else {
        this.modalIsVisible = 'none';
      }
      this.pathToImage = (event.target as HTMLImageElement).src;
      console.log((event.target as HTMLImageElement).src);
      console.log((event.target as HTMLElement).id);
    } else {
      this.modalIsVisible = 'none';
    }
  }
  pathToImage: string = '';
  images: string[] = [
    '../../assets/realizacje/realizacje1.jpeg',
    '../../assets/realizacje/realizacje2.jpeg',
    '../../assets/realizacje/realizacje3.jpeg',
    '../../assets/realizacje/realizacje4.jpeg',
    '../../assets/realizacje/realizacje5.jpeg',
    '../../assets/realizacje/realizacje6.jpeg',
    '../../assets/realizacje/realizacje7.jpeg',
    '../../assets/realizacje/realizacje8.jpeg',
    '../../assets/realizacje/realizacje9.jpeg',
    '../../assets/realizacje/realizacje10.jpeg',
    '../../assets/realizacje/realizacje11.jpeg',
    '../../assets/realizacje/realizacje12.jpeg',
    '../../assets/realizacje/realizacje13.jpeg',
    '../../assets/realizacje/realizacje14.jpeg',
    '../../assets/realizacje/realizacje15.jpeg',
    '../../assets/realizacje/realizacje16.jpeg',
    '../../assets/realizacje/realizacje17.jpeg',
    '../../assets/realizacje/realizacje18.jpeg',
    '../../assets/realizacje/realizacje19.jpeg',
  ];
  modalIsVisible: string = 'none';
}
