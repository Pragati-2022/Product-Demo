import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.scss']
})
export class TrendingComponent implements OnInit {
  categories = [
    {
      image : 'https://cdn.ainabys4u.com/cms/3f247395e4164be5b65b8e462826a2ca.jpg'
    },
    {
      image : 'https://cdn.ainabys4u.com/cms/acb76363ed6c450b851336f01d751cdc.jpg'
    },
    {
      image : 'https://cdn.ainabys4u.com/cms/188056501e6744e49467291a29eda354.jpg'
    },
    {
      image : 'https://cdn.ainabys4u.com/cms/aff86292a24744b3bbcfc8b626f30ea6.jpg'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
