import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators,FormGroup } from '@angular/forms';
import { customValidation } from '../shared/custom.validators';


@Component({
  selector: 'app-customform',
  templateUrl: './customform.component.html',
  styleUrls: ['./customform.component.css']
})
export class CustomformComponent implements OnInit {

constructor(private builder:FormBuilder) { }

get name(){
    return this.customForm.get('name');
  }
get mobile(){
  return this.customForm.get('mobile');
}
get email(){
  return this.customForm.get('email');
}
get password(){
  return this.customForm.get('password');
}
get confirmPassword(){
  return this.customForm.get('confirmPassword');
}
get pan(){
  return this.customForm.get('pan');
}
 

  customForm=this.builder.group({

    name:["",[Validators.required,Validators.minLength(4),customValidation.customName()]],

    mobile:["",[Validators.required,Validators.minLength(10),Validators.maxLength(10),customValidation.customMobile()]],

    email:["",[Validators.required,Validators.email]],

    password:["",[Validators.required,Validators.minLength(8),Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)]],

    confirmPassword:["",[Validators.required]],
    
    pan:["",[Validators.required,customValidation.customPan()]]

  }, {validator:customValidation.PasswordValidator})

 passwordType : string='password';
 passwordShown : boolean=false;

  public togglePassword(){
   if(this.passwordShown){
     this.passwordShown=false;
     this.passwordType='password';
   }
   else{
    this.passwordShown=true;
    this.passwordType='text';
  }
 }

alert:boolean=false
closeAlert(){
  this.alert=false;
}

  ngOnInit() {
  }

onSubmit(){
  this.alert=true;
  console.log(this.customForm.value)
  this.customForm.reset({})
}

}