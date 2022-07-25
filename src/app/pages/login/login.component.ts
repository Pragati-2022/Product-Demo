import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { AuthService } from 'src/app/services/auth/auth.service';
import {
  ConfirmValidParentMatcher,
  CustomValidator,
} from 'src/app/services/login/custom.validator';
import { LoginService } from 'src/app/services/login/login.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  screenWidth!: number;
  NotFoundUser = false;
  confirmValidParentMatcher = new ConfirmValidParentMatcher();

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router,
    public dialog: MatDialog,
    private auth: AuthService,
    private toast: HotToastService
  ) {
    this.initializeForm();
  }

  ngOnInit(): void {}

  initializeForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      confirmPassword: [''],
      password: ['', [Validators.required]],
    });
  }

  get _loginForm() {
    return this.loginForm.controls;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
  }

  onSubmit() {
    const user = {
      email: this._loginForm['email'].value,
      password: this._loginForm['password'].value,
    };

    if (!this.NotFoundUser) {
      // if (
      //   this.loginService.users.filter(
      //     (userData) =>
      //       userData.email === user.email && userData.password === user.password
      //   ).length
      // ) {
      //   this.router.navigate(['home']);
      //   this.auth.login(user.email, user.password);
      //   console.log(
      //     this.loginService.users.filter(
      //       (userData) =>
      //         userData.email === user.email &&
      //         userData.password === user.password
      //     )
      //   );

      //   alert('home');
      //   this.dialog.closeAll();
      //   return;
      // } else {
      //   console.log(
      //     this.loginService.users.filter(
      //       (userData) =>
      //         userData.email === user.email &&
      //         userData.password === user.password
      //     )
      //   );

      //   this.NotFoundUser = true;
      //   this.loginForm.addValidators(CustomValidator.passwordMatch);
      //   this.loginForm.updateValueAndValidity();
      //   alert('signup');
      // }

      this.auth
        .login(user.email, user.password)
        .pipe(
          this.toast.observe({
            success: 'Logged in successfully',
            loading: 'Logging in...',
            error: ({ message }) => `There was an error: ${message}`,
          })
        )
        .subscribe(
          (result) => {},
          (error) => {
            this.NotFoundUser = true;
            this.loginForm.addValidators(CustomValidator.passwordMatch);
            this.loginForm.updateValueAndValidity();
            console.log(error);
          },
          () => {
            this.router.navigate(['home']);
            this.dialog.closeAll();
          }
        );
    } else {
      // if (
      //   this.loginService.users.filter(
      //     (userData) => userData.email === user.email
      //   ).length
      // ) {
      //   alert('user already exist!');
      //   return;
      // }

      // this.loginService.addUser(user);
      // this.auth.createUser(user);
      // this.NotFoundUser = false;
      // this.loginForm.clearValidators();
      // this.loginForm.updateValueAndValidity();

      this.auth
        .createUser(user)
        .pipe(
          this.toast.observe({
            success: 'Congrats! You are all signed up',
            loading: 'Signing up...',
            error: ({ message }) => `${message}`,
          })
        )
        .subscribe(
          (result) => {},
          (error) => {
            console.log(error);
          },
          () => {
            this.NotFoundUser = false;
            this.loginForm.clearValidators();
            this.loginForm.updateValueAndValidity();
          }
        );
    }
  }
}
