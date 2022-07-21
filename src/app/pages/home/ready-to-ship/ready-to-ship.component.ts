import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ready-to-ship',
  templateUrl: './ready-to-ship.component.html',
  styleUrls: ['./ready-to-ship.component.scss'],
})
export class ReadyToShipComponent implements OnInit {
  products = [
    {
      image:
        'https://cdn.ainabys4u.com/cms/f063812808544ef08886ee14b06123fa.jpg',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
