import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cap',
  templateUrl: './cap.page.html',
  styleUrls: ['./cap.page.scss'],
})
export class CapPage implements OnInit {

  parcours = [
    {
      id: 1,
      name:"Parcours no1",
      description: "Circuit en automobile",
      main:"Les Chemins de Cap Excellence",
      isPlayed: false,
    },
    {
      id: 2,
      name: "Parcours no2",
      description : "Circuit pédestre",
      main:"A la découverte de la Ville de Pointe-à-Pitre",
      isPlayed: false,
    },
    {
      id: 3,
      name: "Parcours no3",
      description : "Circuit automobile et pédestre",
      main:"A la découverte de la Ville des Abymes",
      isPlayed: false,
    },
    {
      id: 4,
      name: "Parcours no4",
      description : "Circuit automobile et pédestre",
      main:"A la découverte de la Ville de Baie-Mahault",
      isPlayed: false,
    }
  ]

  constructor(private route :Router) { }

  onCircuitGame(id: number){
    this.parcours[id - 1].isPlayed = true;
    this.route.navigateByUrl('circuit-game');
  }

  ngOnInit() {
  }

}
