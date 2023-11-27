import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { passwordvalidator } from '../Validator/password';
import { UserService } from 'src/service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  
  submitStatus?:boolean=false;
  
  routeService: any;

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar,private userService:UserService,private router:Router) {
    
  }
 afterSubmit(){
  this.userService.registerUser(this.regform.value).subscribe((data)=>console.log(data),e=>alert("Network Errror"));
  
 this._snackBar.open('Congrats, you have submitted the form!!', 'success', {
    duration: 5000,
     panelClass: ['mat-toolbar', 'mat-primary']
   })
    this.router.navigateByUrl("/login");
  }

  favoriteSeason: string | undefined;
  seasons: string[] = ['Male', 'Female'];
  
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);


  // submitStream() {
  //   this._snackBar.open('Congrats, you have submitted the form!!', 'success', {
  //     duration: 5000,
  //     panelClass: ['mat-toolbar', 'mat-primary']
  //   })
  // }

  regform=this.fb.group({
    user_name:['',[Validators.required]],
    // LastName:['',[Validators.required,Validators.minLength(2)]],
    password:['',[Validators.pattern(/^(?=\D*\d)(?=[^a-z]*[a-z])(?=.*[$@$!%*?&])(?=[^A-Z]*[A-Z]).{8,30}$/),Validators.minLength(8)]],
      //Email:['',[Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9  !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~€£¥₩])(?=.*?[A-Z 0-9]).{8,}$"),Validators.required]],
      //Email:['',[Validators.pattern("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"),Validators.required]],
      email:['',[Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"),Validators.required]],
      // ConfirmPassword:['',[Validators.required]],
    // PhoneNumber:['',[Validators.pattern("0-9"),Validators.minLength(10)]],
    address:['',[Validators.required]],
    


},{validator:passwordvalidator})




  get firstname1() {
    return this['regform'].get('eventTitle');
  }
  get user_nameValidate(){
    return this.regform.get('user_name')
  }
  
  // get LastNameValidator(){
  //   return this.regform.get('LastName')
  // }

  get emailValidator(){
    return  this.regform.get('email')
  }
  get passwordValidator(){
    return this.regform.get('password');
  }
  get addressValidator(){
    return this.regform.get('address');
  }

  restForm(){
    this.regform.reset();
  }
  // afterSubmit(){
  //   console.log(typeof(this.regform.value))
  //   this.userService.registerUser(this.regform.value).subscribe({
  //     next:(data: any)=>{
  //       this.routeService.navigateByUrl("")
  //       alert("Registered Successfully")
  //       this.submitStatus=true;
  //     },error(_err: any) {
  //       alert("failed")
  //     },
  //   })
  // }


  // canDeactivate() {
  //   if (!this.submitStatus) {
  //     this.submitStatus = confirm("Are you sure you want to leave without registration ?");
  //   }
  //   return this.submitStatus;
  // }
}
