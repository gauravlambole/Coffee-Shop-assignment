import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private _route: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['user@gmail.com', [Validators.required, Validators.email]],
      password: ['User@123', [Validators.required, Validators.minLength(6)]]
    });
  }

  get f() { return this.loginForm.controls; }


  onSubmit() {
    this.submitted = true;

    if (
      this.loginForm.valid &&
      this.loginForm.value.email == 'user@gmail.com' &&
      this.loginForm.value.password == 'User@123'
    ) {
      this._route.navigate(['/product']);
    } else {
      alert('Invalid Credential');
      return;
    }
    
  }

}
