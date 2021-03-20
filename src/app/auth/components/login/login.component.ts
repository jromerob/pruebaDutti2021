import { takeWhile } from 'rxjs/operators';
import { AuthService } from './../../services/auth.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm: FormGroup;
  dataLoading = false;
  errorMsg: string;
  invalid = false;
  alive = true;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
    this.authService.authState$
      .pipe(takeWhile(() => this.alive))
      .subscribe((loginResponse) => {
        this.dataLoading = false;
        if (loginResponse.user) {
          this.router.navigate(['/principal/ships']);
        } else {
          this.errorMsg = loginResponse.error;
        }
      });
  }

  ngOnDestroy(): void {
    this.alive = false;
  }

  loginUser() {
    if (this.loginForm.invalid) {
      return;
    }
    this.dataLoading = true;
    this.authService.logIn(
      this.loginForm.get('username').value,
      this.loginForm.get('password').value
    );
  }
}
