import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-places',
  templateUrl: './places.page.html',
  styleUrls: ['./places.page.scss'],
})
export class PlacesPage implements OnInit {

  placeIcons =[
    {
      id: 1, 
      icon: "../../assets/Icons/CHUTES.svg",
      desciprition : "chutes, rivières, plateaux"
    },
    {
      id: 2, 
      icon: "../../assets/Icons/parc.svg",
      desciprition : "parques, jardins, forets"
    },
    {
      id: 3, 
      icon: "../../assets/Icons/volcan.svg",
      desciprition : "volcans, paysages, panoramas"
    },
    {
      id: 4, 
      icon: "../../assets/Icons/plage.svg",
      desciprition : "plage, notisme, plonger"
    },
    {
      id: 5, 
      icon: "../../assets/Icons/iles.svg",
      desciprition : "iles, marais, mangrove"
    },
    {
      id: 6, 
      icon: "../../assets/Icons/architecture.svg",
      desciprition : "architecture, monument et moulin"
    },
    {
      id: 6, 
      icon: "../../assets/Icons/Production locales.svg",
      desciprition : "production local, artisanat, musée"
    },
  ]

  constructor(private route: Router) { }
  goToPlaceMap() {
    this.route.navigateByUrl('map');
  }

  ngOnInit() {
  }

}
