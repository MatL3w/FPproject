import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Util } from '../util.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
})
export class BodyComponent {
  modalIsVisible: string = 'none';
  communicateWasShowed=false;
  constructor(private router: Router,private util:Util) {}
  ngOnInit(): void {
    console.log(this.util.communicateWasShowed);
    if(!this.util.communicateWasShowed){
    setTimeout(() => {
      this.modalIsVisible = 'grid';
      this.util.communicateWasShowed = true;
    }, 2000);
    }
  }
  closeModal() {
    this.modalIsVisible = 'none';
  }
  redirectToContact(){
    this.router.navigate(['/kontakt']);
  }
}
