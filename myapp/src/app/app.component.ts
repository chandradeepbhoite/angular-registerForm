import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chandradeep myapp';
  integerRegex= /^\d+$/;
  // emailRegex='^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'
  registerForm= new FormGroup({
    fname: new FormControl('',[Validators.required,Validators.maxLength(32),Validators.pattern("^[a-zA-Z]+$")]),
    lname: new FormControl('',[Validators.required,Validators.maxLength(32),Validators.pattern("^[a-zA-Z]+$")]),
    age: new FormControl('',[Validators.required,Validators.max(60), Validators.min(18),Validators.pattern(this.integerRegex)]),
    mobile: new FormControl('',[Validators.required,Validators.maxLength(10),Validators.minLength(10),Validators.pattern(this.integerRegex)]),
    email: new FormControl('',[Validators.required,Validators.maxLength(32),Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
    password: new FormControl('',[Validators.required,Validators.maxLength(32),Validators.minLength(8)]),
    confirm_password: new FormControl('',[Validators.required,Validators.maxLength(32),Validators.minLength(8)]),
  })
  getControl(name: any): AbstractControl | null{
      return this.registerForm.get(name)
  }

  registerfn(){ 
    console.log(this.registerForm.value)
    if (this.registerForm.valid) {
      alert("FORM IS SUBMITTED Successfully");
    }
    else{
      alert("form is not submitted")
    }
   
    this.registerForm.reset();
  }
}
