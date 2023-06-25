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
  emailFormValueChangesSubscription!: Subscription;
  emailFormErrorDescription: string = '';
  emailFormIsSending = false;
  formData: FormData = new FormData();

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.emailForm = this.formBuilder.group({
      name: [''],
      email: ['', [Validators.required, Validators.email]],
      content: ['', [Validators.required, Validators.maxLength(1000)]],
      files: [''],
    });
  }

  ngOnInit() {
    this.emailFormValueChangesSubscription =
      this.emailForm.valueChanges.subscribe((value) => {});
  }
  ngOnDestroy() {
    this.emailFormValueChangesSubscription.unsubscribe();
  }

  submitForm() {
    if (this.checkValidatorsForEmailForm()) return;
    this.formData.append('data', JSON.stringify(this.emailForm.value));
    this.http.post('http://localhost:3000/email', this.formData).subscribe(
      (response) => {
        console.log('File uploaded successfully:', response);
      },
      (error) => {
        console.error('Error uploading file:', error);
      }
    );
  }
  private checkValidatorsForEmailForm() {
    if (this.emailForm.valid) {
      this.emailFormErrorDescription = '';
      return false;
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
    for(let fileNumber=0;fileNumber<files.length;fileNumber++){
        console.log(files[fileNumber].name);
       this.formData.append(files[fileNumber].name, files[fileNumber]);
    }
  }

// convertFormGroupToFormData(formGroup: FormGroup): FormData {
//   const formData = new FormData();

//   Object.keys(formGroup.controls).forEach(key => {
//     const control = formGroup.get(key);

//     if (control instanceof FileList) {
//       const fileList: FileList = control.value;
//       for (let i = 0; i < fileList.length; i++) {
//         formData.append(key, fileList[i]);
//       }
//     } else if (control instanceof File) {
//       formData.append(key, control.value);
//     }
//   });
//   return formData;
// }

}
