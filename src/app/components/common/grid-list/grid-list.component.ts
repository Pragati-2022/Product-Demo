import { Component, EventEmitter, HostListener, Input, OnChanges, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-grid-list',
  templateUrl: './grid-list.component.html',
  styleUrls: ['./grid-list.component.scss']
})
export class GridListComponent implements OnInit {
  @Input() products! : any[];
  @Input() rowHeight : any;
  @Input() cols!: number;

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {

    if(window.innerWidth < 768){
      console.log(this.cols);
      
      this.cols = 1;
      console.log(this.cols);
      
    }
  }
}
