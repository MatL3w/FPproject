import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-kontakt',
  templateUrl: './kontakt.component.html',
  styleUrls: ['./kontakt.component.css'],
})
export class KontaktComponent {
  emailForm!: FormGroup;
  emailFormErrorDescription: string = '';
  emailFormIsSending = false;
  fileListInputElement!:HTMLInputElement;
  formData: FormData = new FormData();
  sendingEmail = false;
  emailSended = false;
  maxFilesize = 1024 * 1024 * 20;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.emailForm = this.formBuilder.group({
      name: [''],
      email: ['', [Validators.required, Validators.email]],
      content: ['', [Validators.required, Validators.maxLength(1000)]],
    });
  }
  ngOnInit() {
    this.emailSended = false;
  }
  ngOnDestroy() {
  }
  submitForm() {
    this.emailSended = false;
    this.mergeAllFormDataToOneForm();
    if (!this.checkValidatorsForEmailForm())return;
    this.sendingEmail = true;
    this.http
      .post('https://app.fpklima.pl/', this.formData)
      .subscribe(
        (response) => {
          console.log('File uploaded successfully:', response);
          this.sendingEmail = false;
          this.clearDataAfterEmailSend();
          this.emailSended = true;
        },
        (error) => {
          console.error('Error uploading file:', error);
          this.sendingEmail = false;
          this.clearDataAfterEmailSend();
        }
      );
      return false;
  }
  private checkValidatorsForEmailForm() {
    if (this.emailForm.valid) {
      this.emailFormErrorDescription = '';
      return true;
    }
    if (this.emailForm.get('email')?.errors) {
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
          'Wiadomośc jest za długa proszę użyć mniej niż 1000 znaków';
        return false;
      }
    }
    return true;
  }
  onFileSelected(event: any) {
    const files: FileList = event.target.files;
    let fileSize = 0;
    for(let fileNumber=0;fileNumber<files.length;fileNumber++){
       this.formData.append(files[fileNumber].name, files[fileNumber]);
       fileSize+=files[fileNumber].size;
    }
    this.fileListInputElement = event.target  as HTMLInputElement;
    if(this.maxFilesize<fileSize){
      this.emailFormErrorDescription ='Rozmiar załączonych plików jest zbyt duży (max 20 MB)';
      this.clearFormData();
    }else{
      this.emailFormErrorDescription ='';
    }
  }
  mergeAllFormDataToOneForm(){
    const keys = Object.keys(this.emailForm.value);
    for(let i=0;i<keys.length;i++){
      this.formData.append(keys[i], this.emailForm.value[keys[i]]);
    }
    return this;
  }
  clearDataAfterEmailSend(){
    this.emailForm.reset();
    this.clearFormData();
  }
  clearFormData(){
    if(this.fileListInputElement){
    this.formData = new FormData();
    this.fileListInputElement.files = null;
    this.fileListInputElement.value = '';
    }
  }
}
