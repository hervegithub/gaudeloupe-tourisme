import {Component, Input, OnInit} from '@angular/core';
import {Platform} from '@ionic/angular';

@Component({
  selector: 'app-description',
  templateUrl: './description.page.html',
  styleUrls: ['./description.page.scss'],
})
export class DescriptionPage implements OnInit {

  slideOpts = {
    slidesPerView: 1.3,
    initilSlide: 1,
  };

  iconColor = 'dark';

  hauteur: number;
  largeur: number;
  @Input() texte = 'Il se situe à 5 km en aval après la Grande rivière à Goyaves au carrefour Barbotteau, en direction de Vernou. Après une balade agréable, parfois glissante, on découvre subitement la cascade dans un magnifique écrin de verdure. Impressionnante, l\'eau se précipite d\'une douzaine de mètres dans un large et splendide bassin à l\'eau turquoise. Idéal pour prendre un bain rafraîchissant. La rivière La Lézarde est là, jonchée de grosses pierres offrant un lieu de choix pour s\'étendre au soleil. Attention, le saut peut être interdit d’accès au public par arrêté préfectoral';
  @Input() limit = 20;
  truncating = true;

  constructor( private platform: Platform) {
    this.hauteur = this.platform.height();
  }

  likePlace() {
    if (this.iconColor === 'dark') {
      this.iconColor = 'danger';
    } else {
      this.iconColor = 'dark';
    }
  }

  ngOnInit() {
  }

}
