import { Component } from '@angular/core';
declare var bootstrap: any;
@Component({
  selector: 'app-realizacje',
  templateUrl: './realizacje.component.html',
  styleUrls: ['./realizacje.component.css'],
})
export class RealizacjeComponent {
  images: string[] = [
    '../../assets/realizacje/realizacje1.jpeg',
    '../../assets/realizacje/realizacje2.jpeg',
    '../../assets/realizacje/realizacje3.jpeg',
    '../../assets/realizacje/realizacje4.jpeg',
    '../../assets/realizacje/realizacje6.jpeg',
  ];
  modalIsVisible:boolean =true;
}
