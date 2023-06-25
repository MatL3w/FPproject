import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-kontakt',
  templateUrl: './kontakt.component.html',
  styleUrls: ['./kontakt.component.css'],
})
export class KontaktComponent {
  emailForm: FormGroup ;
  emailFormErrorDescription: string ='';
  formIsValid: boolean=false;
  constructor(private formBuilder: FormBuilder) {
    this.emailForm = this.formBuilder.group({
      name: [''],
      email: ['', [Validators.required, Validators.email]],
      content: ['', [Validators.required,Validators.maxLength(1000)]],
      files: ['',],
    });
    // this.emailForm.valueChanges.subscribe(value=>{

    // })
  }
  ngOnInit() {
  }

  submitForm() {
    if(this.checkValidatorsForEmailForm())return;

  }
  private checkValidatorsForEmailForm(){
    if (this.emailForm.valid) {
      console.log('valid', this.emailForm.valid);
      this.emailFormErrorDescription = '';
      return false;
    }
    if (this.emailForm.get('email')?.errors) {
      console.log(this.emailForm.get('email')?.errors);
      this.emailFormErrorDescription = 'Proszę podać prawdiłowy adres email';
      return false;
    }
    if (this.emailForm.get('content')?.errors) {
      if (this.emailForm.get('content')?.errors?.['required']) {
        this.emailFormErrorDescription = 'Proszę podać treść wiadomości';
        return false;
      }
      if (this.emailForm.get('content')?.errors?.['maxlength']) {
        this.emailFormErrorDescription =
          'Wiadomośc jest za długa proszę uzyć mniej niż 1000 znaków';
        console.log(this.emailForm.get('content')?.errors);
        return false;
      }
    }
    return true;
  }
}
