import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-occasions',
  templateUrl: './occasions.component.html',
  styleUrls: ['./occasions.component.scss'],
})
export class OccasionsComponent implements OnInit {
  occasions = [
    {
      name: 'Haldi And Mehndi',
      image:
        'https://cdn.ainabys4u.com/cms/e09c39f08006432883e78e0770af9610.jpg',
    },
    {
      name: 'Cocktail And Reception',
      image:
        'https://cdn.ainabys4u.com/cms/5cf6111fb72c4049a5670d55011c6fab.jpg',
    },
    {
      name: 'Roka And Phere',
      image:
        'https://cdn.ainabys4u.com/cms/a75ecad2d9174bafbb31d851e0ea149b.jpg',
    },
    {
      name: 'Brunches And Dinners',
      image:
        'https://cdn.ainabys4u.com/cms/0e80b1a4562d402ca39830e740a9d2aa.jpg',
    },
    {
      name: 'Pooja And Light Occasions',
      image:
        'https://cdn.ainabys4u.com/cms/466979809cd647a4b2b35bf6311e45d7.jpg',
    },
    {
      name: 'Casual And Office Wear',
      image:
        'https://cdn.ainabys4u.com/cms/dd7c15119f344b4e9a2762dce99eaf0b.jpg',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
