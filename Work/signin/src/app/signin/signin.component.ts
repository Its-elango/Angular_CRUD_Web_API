import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent {
  user: string = '';
  passwordValue: string = ''; 

  constructor(private router: Router) {}

  loginForm = new FormGroup({
    user: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });

  login() {
    if (this.loginForm.value.user === 'user@gmail.com' && this.loginForm.value.password === 'pass') {
      this.router.navigateByUrl('/user/home');
    } else if (this.loginForm.value.user === 'admin@gmail.com' && this.loginForm.value.password=== 'pass') {
      this.router.navigateByUrl('/admin/home');
    } else {
      alert('Incorrect username or password');
    }
  }

  get userControl() {
    return this.loginForm.get('user');
  }

  get password() {
    return this.loginForm.get('passwordValue');
  }
}
