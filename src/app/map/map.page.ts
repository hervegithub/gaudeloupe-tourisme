
import {Component, ViewChild, ElementRef, OnInit} from '@angular/core';
import L from 'leaflet';
import 'leaflet-routing-machine';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {
  map: L.map;
  center: L.PointTuple;
  startCoords = [16.1501062, -61.6772374];

  constructor(public platform: Platform) {
    this.center = this.startCoords;
    this.platform.ready().then(() => {
      this.leafletMap();
    });
  }

  leafletMap() {
    this.map = L.map('mapId',
        {
          center: this.center,
          zoom: 10
        });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '',
    }).addTo(this.map);

    const myIcon = L.icon({
      iconUrl: '../../assets/lieux.svg',
      iconSize: [30, 60],
      iconAnchor: [22, 94],
      popupAnchor: [-3, -76]
    });
    const marker = L.marker([16.2922074, -61.7297037], {icon: myIcon}).addTo(this.map);
  }

  ngOnInit(): void {
  }



}
