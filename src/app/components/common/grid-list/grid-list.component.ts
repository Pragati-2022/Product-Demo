import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';

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
}
