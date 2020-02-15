import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CircuitGamePageRoutingModule } from './circuit-game-routing.module';

import { CircuitGamePage } from './circuit-game.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CircuitGamePageRoutingModule
  ],
  declarations: [CircuitGamePage]
})
export class CircuitGamePageModule {}
