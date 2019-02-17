import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder
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
  }



}
