import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.page.html',
  styleUrls: ['./hotels.page.scss'],
})
export class HotelsPage implements OnInit {

  slideOpts = {
    slidesPerView: 1.3,
    initilSlide: 1,
  };

  constructor() { }

  ngOnInit() {
  }

}
