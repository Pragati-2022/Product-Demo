import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ConstantsClass } from 'src/app/constants/constants';

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
  constructor(private translate: TranslateService) { 
    this.constant = ConstantsClass
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
}
