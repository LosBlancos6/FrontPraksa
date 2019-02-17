import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

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
      'name': ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      'surrname': ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      'username': ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      'address': ['', Validators.compose([Validators.required, Validators.minLength(3)])],
    })
  }

  public get name(){
    return this.loginForm.get('name');
  }

  public get surrname(){
    return this.loginForm.get('surrname');
  }

  public get username(){
    return this.loginForm.get('username');
  }

  public get password(){
    return this.loginForm.get('password');
  }

  public get address(){
    return this.loginForm.get('address');
  }

  public onRegister(){
    console.log(this.loginForm.value);
  }

}
