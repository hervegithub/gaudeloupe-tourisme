import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { SelectMultipleControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-circuit-game',
  templateUrl: './circuit-game.page.html',
  styleUrls: ['./circuit-game.page.scss'],
})
export class CircuitGamePage implements OnInit {

  btnColor= "primary";
  btnText= "Commencer";
  progression= 0.1;
  etape = 0;

  etapes = [
    {
      id : 0,
      description : "Vous êtes sur la magnifique Place de la Victoire. Une superficie d’un hectare face à la mer, créée en 1763 lors de la construction de la ville. Sur la place, sont érigés deux bustes d’anciens gouverneurs de la Guadeloupe, celui de Charles-Victor Frébault et celui d’un autre personnage illustre, ",
      question: "Quel est son nom ?",
      reponses:{
        type: "zone",
        choix:[],
      }
    },
    {
      id : 1,
      description : "Vous quittez la Place de la Victoire et vous vous dirigez vers le marché central (appelé aussi marché Saint-Antoine, ou aux épices) par la rue Léonard en passant devant le bel édifice du Comité de Tourisme des Iles de Guadeloupe. A proximité du marché, se trouve la fontaine publique dite “Couturier“, composée de plusieurs éléments, dont la statue de la jeune enfant à la corbeille au sommet ",
      question: "Mais combien d’enfants comptez-vous en tout ?",
      reponses:{
        type: "zone",
        choix:[],
      }
    },
    {
      id : 2,
      description : "Vous prenez la rue Frébault pour rejoindre la rue piétonne c’est la rue Saint-John Perse où se trouve la statue de Vélo,célèbre joueur de Ka (tambour). Prendre à droite la rue de Nozières jusqu’au Musée Saint-John Perse, nom du poète Alexis Léger, prix Nobel de littérature en 1960. Dans le jardin, se trouve une œuvre réalisée par le sculpteur Andras Beck",
      question: "Que représente cette œuvre ?",
      reponses:{
        type: "zone",
        choix:[],
      }
    }

  ];

  constructor( private alertController: AlertController) { }

  onChangeColor(){
    if (this.btnColor === "primary"){
      this.btnColor = "danger"
      this.btnText  = "Annuler"
    }else if (this.btnColor ==="danger"){
      this.btnColor = "primary";
      this.btnText = "Commencer"
    }else{
      console.log('erreur');
    }
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'La cap : Parcours no1',
      message: 'Circuit en automobile Les Chemins de Cap Excellence. <br> Voulez-vous commencer ce parcours?',
      buttons: [
        {
          text: 'Non',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Commencer',
          handler: () => {
            this.onChangeColor();
          }
        }
      ]
    });

    await alert.present();
  }

  onNextStep(){
    if(this.etape < this.etapes.length){
      this.etape ++;
      this.progression = this.progression + (1/(this.etapes.length));
    }
  }

  onPreviewStep(){
    if(this.etape > 1){
      this.etape --;
      this.progression -= (1/(this.etapes.length));
    }
  }


  ngOnInit() {
    this.etape = this.etapes[0].id;
  }

}
