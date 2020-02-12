import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-place-description',
  templateUrl: './place-description.page.html',
  styleUrls: ['./place-description.page.scss'],
})
export class PlaceDescriptionPage implements OnInit {

  isMap = false;

  slideOpts = {
    slidesPerView: 1,
    initialSlide: 0,
  };

  constructor() { }

  chowMap() {
    if (this.isMap) {
      this.isMap = false;
    }else {
      this.isMap = true;
    }
  }

  ngOnInit() {
  }

}
