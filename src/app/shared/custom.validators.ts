import {AbstractControl} from '@angular/forms';

export class customValidation{

 static customName(){
  return function validateName(control:AbstractControl){
    const Name=/^[A-Za-z]+((\s)?([A-Za-z])+)*$/.test(control.value);
    // Mandatory single name, optional additional names, WITH spaces, WITHOUT special characters:
    return !Name?{ namePattern : control.value}:null;
  }
}

static customMobile(){
  return function validateMobile(control:AbstractControl){
    const Mob=/^[0-9]*$/.test(control.value);
    return !Mob?{ mobPattern:control.value}:null;
  }
}

static PasswordValidator(control:AbstractControl){
  const Password=control.get("password").value
  const ConfirmPassword=control.get("confirmPassword").value

  if (Password!==ConfirmPassword){
    return {
      'mismatch':ConfirmPassword
    }
  }
  else{
    return null;
  }
}

static customPan(){
  return function validatePan(control:AbstractControl){
    const Pan=/^[A-Z]{5}[0-9]{4}[A-Z]{1}/.test(control.value);
    return !Pan?{ panPattern:control.value}:null;
  }
}


}
