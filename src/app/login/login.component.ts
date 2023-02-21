import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private _route: Router,
    private _authService : AuthService
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  get f() { return this.loginForm.controls; }


  onSubmit() {
    this.submitted = true;
    
    
    if (this.loginForm.valid) {
      this._authService.setUser(this.loginForm.value.email);
      this._route.navigate(['/product']);
    } else {
      alert('Invalid Credential');
      return;
    }
  }

}
