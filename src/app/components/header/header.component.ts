import { Component, HostListener, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { ConstantsClass } from 'src/app/constants/constants';
import { LoginComponent } from 'src/app/pages/login/login.component';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  toggleMenu = false;
  public screenWidth: any;
  public screenHeight: any;
  public constant;

  constructor(
    private translate: TranslateService,
    public dialog: MatDialog,
    public auth: AuthService
  ) {
    this.constant = ConstantsClass;
  }

  ngOnInit() {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
  }

  openDialog() {
    const dialogRef = this.dialog.open(LoginComponent, {
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

  onLogout($event: Event) {
    this.auth.logout($event);
  }
}
