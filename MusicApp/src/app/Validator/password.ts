import { AbstractControl } from "@angular/forms";
//Abstact

export function passwordvalidator(controlvalue:AbstractControl): {[key:string]:any} | null
{
    const password = controlvalue.get('password');
    const confirmpassword = controlvalue.get('conpassword');
      // console.log(controlvalue.get('username')?.value);
      // console.log(password?.value);
      // console.log(confirmpassword?.value);
    return (password && confirmpassword && password.value!=confirmpassword.value) ?{'mismatchname':true}:null
}
