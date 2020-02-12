import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.page.html',
  styleUrls: ['./activities.page.scss'],
})
export class ActivitiesPage implements OnInit {

  segment = 'hotels';

  slideOpts = {
    slidesPerView: 1.3,
    initilSlide: 1,
  };

  constructor(
    private router: Router
  ) {

   }

  onCircuitListePage() {
    this.router.navigateByUrl('circuit-list');
  }

  onMapPage() {
    this.router.navigateByUrl('map');
  }

  onHotelsPage() {
    this.router.navigateByUrl( 'hotels');
  }

  ngOnInit() {
  }

}
