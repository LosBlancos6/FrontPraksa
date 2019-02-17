import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.createForm();
   }

  ngOnInit() {
  }

  private createForm(): FormGroup {
    return this.formBuilder.group({
      'username': ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(3)])],
    })
  }

  public get username(){
    return this.loginForm.get('username');
  }

  public get password(){
    return this.loginForm.get('password');
  }

  public onLogin(){
    console.log(this.loginForm.value);
    this.authService.login(this.loginForm.value).subscribe(
      response => {
        console.log(response);
        localStorage.setItem('token', response.token);
        this.router.navigateByUrl('app');
      },
      error => {
        console.log(error);
        alert(error.error);      }
    )
  }



}
