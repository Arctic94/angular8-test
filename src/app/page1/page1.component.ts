import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {
  
  public formGroup: FormGroup;
  public max: number = 15;
  public min: number = 3;
  public phoneLength: number = 9;
  public errorName: boolean = false;
  public errorEmail: boolean = false;
  public errorPhone: boolean = false;
  public validForm: boolean = false;
  public userData: any;
  constructor(
    public formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm(){
    
    this.formGroup = this.formBuilder.group({
      name: ['',[Validators.required, Validators.minLength(this.min), Validators.maxLength(this.max)]],
      email: ['',[Validators.required, Validators.email]],
      phone: ['',[Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(this.phoneLength), Validators.maxLength(this.phoneLength)]]
    });
  }

  validate() {
    console.log(this.formGroup); 
    this.getError('name',true)
    this.getError('email',true)
    this.getError('phone', true)
    if (this.formGroup.status == 'VALID') {
      console.log("val");
      this.validForm = true
      this.userData = this.formGroup.value
      console.log(this.userData);
      this.formGroup.reset()

    }
  }

  getError(controlName: string, fromSubmit: boolean): string {
    console.log("aca");
    let error = '';
    const control = this.formGroup.get(controlName);
    if (!fromSubmit) {
      
      if (control.touched && control.errors != null) {
        error = JSON.stringify(control.errors);
        
      }
    } else {
      
      if (control.errors != null) {
        control.markAllAsTouched()
        error = JSON.stringify(control.errors);
      }
    }
    
    
    return error;
  }

}
