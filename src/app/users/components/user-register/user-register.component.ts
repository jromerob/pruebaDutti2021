import { UserModel } from './../../models/user.model';
import { UsersService } from './../../services/users.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

// JSON
import usersList from 'src/assets/json/users.json';
import { take, takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss'],
})

// TODO validar que el email no existe
export class UserRegisterComponent implements OnInit, OnDestroy {
  registerForm: FormGroup;
  dataLoading = false;
  user = new UserModel();
  alive = true;
  error = '';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private usersService: UsersService
  ) {}

  ngOnInit(): void {
    // Creamos el formgroup con el modelo de usuario
    this.registerForm = this.fb.group(this.user);
    this.registerForm.controls.firstName.setValidators([
      Validators.required,
      Validators.minLength(3),
    ]);
    this.registerForm.controls.lastName.setValidators([
      Validators.required,
      Validators.minLength(3),
    ]);
    this.registerForm.controls.userName.setValidators([
      Validators.required,
      Validators.minLength(3),
    ]);
    this.registerForm.controls.email.setValidators([
      Validators.required,
      Validators.minLength(6),
    ]);
    this.registerForm.controls.password.setValidators([
      Validators.required,
      Validators.minLength(6),
    ]);

    // actualizamos el modelo en los cambios
    this.registerForm.valueChanges
      .pipe(takeWhile(() => this.alive))
      .subscribe((changes) => (this.user = changes));
  }

  ngOnDestroy(): void {
    this.alive = false;
  }

  async registerUser() {
    this.error = '';
    if (this.registerForm.invalid) {
      return;
    }

    if (await this.usersService.exists(this.user.userName)) {
      this.error = 'El usuario ya existe';
      return;
    }

    try {
      await this.usersService.create(this.user);
      console.log('User Registered -->', this.user);
      // TODO Navegar a login o hacer login auto
      this.router.navigate(['/principal/ships']);
    } catch (error) {
      console.log(error);
    }
  }
}
