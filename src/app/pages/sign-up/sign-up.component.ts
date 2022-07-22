import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ConfirmValidParentMatcher, CustomValidator } from 'src/app/services/login/custom.validator';
import { LoginService } from 'src/app/services/login/login.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  signUpForm!: FormGroup;
  screenWidth!: number;
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
    this.signUpForm = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
        confirmPassword: [''],
        password: ['', [Validators.required]],
      },
      { validator: CustomValidator.passwordMatch }
    );
  }

  get _signUpForm() {
    return this.signUpForm.controls;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
  }

  onSubmit() {
    const user = {
      email: this._signUpForm['email'].value,
      password: this._signUpForm['password'].value,
    };

    if (this.loginService.users.filter((userData) => userData === user)) {
      alert('user already exist!');
    }

    this.loginService.addUser(user);

    this.dialog.open(LoginComponent, {
      maxWidth: '100vw',
      maxHeight: '100vh',
      height: '50%',
      width:
        this.screenWidth < 450
          ? '75%'
          : this.screenWidth > 450 && this.screenWidth < 800
          ? '400px'
          : '500px',
    });
  }
}
