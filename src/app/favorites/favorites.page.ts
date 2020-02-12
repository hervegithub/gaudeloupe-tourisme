import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {

  slideOpts = {
    slidesPerView: 1.3,
    initilSlide: 1,
  };

  constructor( private route: Router) { }

  ngOnInit() {
  }

  OnCircuitListe(){
    this.route.navigateByUrl("circuit-list");
  }

  onActivityPage() {
    this.route.navigateByUrl('tabs/activities');
  }

  onPlacesPage() {
    this.route.navigateByUrl('places');
  }

  OnPlaceDescription( ){
    this.route.navigateByUrl('place-description');
  }

  onFavoritePage() {
    this.route.navigateByUrl('circuit-list');
  }

  onMapPage() {
    this.route.navigateByUrl('map');
  }

}
