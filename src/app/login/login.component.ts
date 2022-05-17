import { Component, OnInit } from '@angular/core';
;
import { User } from '../shared/user';
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  //declare a variables
  loginForm: FormGroup;
  isSubmitted= false;
  error: string='';

  //user Object
  loginUser: User;
  constructor(private authService: AuthService, private router: Router,
     private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    //create a reactive form
    this.loginForm=this.formBuilder.group({
      //formControl Name
      userName: ['',[Validators.required]],
      password: ['',[Validators.required]]

    });
  }


  //get all controls for validation
  get formControls(){
    return this.loginForm.controls;
  }

  //check credentials
  loginCredentials(){
    console.log(this.loginForm.value);
    this.isSubmitted=true;

    //form is invalid
    if(this.loginForm.invalid){
      this.error="Sorry! Invalid entry. Try again";
      return;
    }

    //form is valid
    if(this.loginForm.valid){
      //call webservice
      this.authService.loginVerify(this.loginForm.value).subscribe(
        response=>{
          this.error='';
          console.log(response);
          sessionStorage.setItem('USERNAME',response.userName);
          sessionStorage.setItem('ACCESS_ROLE',response.roleId.toString());

          if(response==null){
          this.error="Invalid user name and password";
        }
          //check the role and redirect to respective component
           else if(response.roleId===1){
             this.router.navigateByUrl('/admin')
            console.log("Administrator");
          }
          else if(response.roleId==2){
            this.router.navigateByUrl('/coordinator')
            console.log("Receptionist/coordinator")
          }
          else if(response.roleId==3){
            this.router.navigateByUrl('/manager')
            console.log("Manager")
          }
          else{
            this.error="Sorry! you are not allowed to access the system";
          }
        },

        error=>{
          console.log(error);
          this.error="Sorry! Invalid entry. Try again";

        }
      );
    }
  }

}



