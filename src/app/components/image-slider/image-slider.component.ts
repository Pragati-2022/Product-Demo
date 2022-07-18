import { Component, OnInit, ViewChild } from '@angular/core';
import { NgImageSliderComponent } from 'ng-image-slider';
import { ConstantsClass } from 'src/app/constants/constants';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss'],
  interpolation : ['((', '))']
})
export class ImageSliderComponent implements OnInit {
  public constant;
  @ViewChild('nav') slider!: NgImageSliderComponent;

  // images: Array<object> = [
  //   { image: 'https://picsum.photos/900/500?random&t=1' },
  //   { image: 'https://picsum.photos/900/500?random&t=4' },
  //   { image: 'https://picsum.photos/900/500?random&t=3' },
  // ];

  images = [
    {
      image:
        'https://cdn.ainabys4u.com/cms/9751aa409005482ea1ee47bbf825dd51.jpg',
      thumbImage:
        'https://cdn.ainabys4u.com/cms/9751aa409005482ea1ee47bbf825dd51.jpg',
    },
    {
      image:
        'https://cdn.ainabys4u.com/cms/1a0dc6fc050c48ba9654a12dfd89665d.jpg',
      thumbImage:
        'https://cdn.ainabys4u.com/cms/1a0dc6fc050c48ba9654a12dfd89665d.jpg',
    },
    {
      image:
        'https://cdn.ainabys4u.com/cms/15632fa549394fb29deaf13ccde420db.jpg',
      thumbImage:
        'https://cdn.ainabys4u.com/cms/15632fa549394fb29deaf13ccde420db.jpg',
    },
    {
      image:
        'https://cdn.ainabys4u.com/cms/06640f84b4df4064891d5ec5e619e717.jpg',
      thumbImage:
        'https://cdn.ainabys4u.com/cms/06640f84b4df4064891d5ec5e619e717.jpg',
    },
    {
      image:
        'https://cdn.ainabys4u.com/cms/a6de9dbf90114ce2ba78a79fe8f6788d.jpg',
      thumbImage:
        'https://cdn.ainabys4u.com/cms/a6de9dbf90114ce2ba78a79fe8f6788d.jpg',
    },
  ];
  constructor() {
    this.constant = ConstantsClass;
  }

  ngOnInit(): void {}
}
