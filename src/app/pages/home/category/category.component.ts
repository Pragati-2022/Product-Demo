import { Component, OnInit } from '@angular/core';
import { ConstantsClass } from 'src/app/constants/constants';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  public constant;
  i = {};
  categories = [
    {
      image:
        'https://cdn.ainabys4u.com/cms/8f825c5c30ab4c009db2ec245a99e7db.jpg',
      name: 'Jumpsuit',
    },
    {
      image:
        'https://cdn.ainabys4u.com/cms/037a0cc335ed4687a6b51b242cef99ab.jpg',
      name: 'Drapes & Sarees',
    },
    {
      image:
        'https://cdn.ainabys4u.com/cms/7c5f5a1c9cce408f935c03206e657e6b.jpg',
      name: 'Lehengas',
    },
    {
      image:
        'https://cdn.ainabys4u.com/cms/7f891253af6245ac8b5afea48a22bbbf.jpg',
      name: 'Kurta & Short tops',
    },
    {
      image:
        'https://cdn.ainabys4u.com/cms/c269582ee7e74ab5a024fe330ff3c458.jpg',
      name: 'Indo-Westerns',
    },
    {
      image:
        'https://cdn.ainabys4u.com/cms/1eb30968ed8d4921b2564417b0ec6295.jpg',
      name: 'Sharara Set',
    },
    {
      image:
        'https://cdn.ainabys4u.com/cms/488f7958c9af4a34b57c03c6ef46f903.jpg',
      name: 'Dresses',
    },
    {
      image:
        'https://cdn.ainabys4u.com/cms/c55f0860acc3431cac77599a37cd8ccc.jpg',
      name: 'Kurta Pant Set',
    },
  ];
  constructor() {
    this.constant = ConstantsClass;
  }

  ngOnInit(): void {}
}
