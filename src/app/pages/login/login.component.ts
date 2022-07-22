import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import {
  ConfirmValidParentMatcher,
  CustomValidator,
} from 'src/app/services/login/custom.validator';
import { LoginService } from 'src/app/services/login/login.service';
import { SignUpComponent } from '../sign-up/sign-up.component';

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
    public dialog: MatDialog
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
      if (
        this.loginService.users.filter(
          (userData) =>
            userData.email === user.email && userData.password === user.password
        ).length
      ) {
        this.router.navigate(['home']);
        console.log(
          this.loginService.users.filter(
            (userData) =>
              userData.email === user.email &&
              userData.password === user.password
          )
        );

        alert('home');
        this.dialog.closeAll();
        return;
      } else {
        console.log(
          this.loginService.users.filter(
            (userData) =>
              userData.email === user.email &&
              userData.password === user.password
          )
        );

        this.NotFoundUser = true;
        this.loginForm.addValidators(CustomValidator.passwordMatch);
        this.loginForm.updateValueAndValidity();
        alert('signup');
      }
    } else {
      if (
        this.loginService.users.filter(
          (userData) => userData.email === user.email
        ).length
      ) {
        alert('user already exist!');
        return;
      }

      this.loginService.addUser(user);
      this.NotFoundUser = false;
      this.loginForm.clearValidators();
      this.loginForm.updateValueAndValidity();
    }
    // this.dialog.closeAll();
    // this.dialog.open(LoginComponent, {
    //   maxWidth: '100vw',
    //   maxHeight: '100vh',
    //   height: '50%',
    //   width:
    //     this.screenWidth < 450
    //       ? '75%'
    //       : this.screenWidth > 450 && this.screenWidth < 800
    //       ? '400px'
    //       : '500px',
    // });
  }
}
