import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlaceDescriptionPageRoutingModule } from './place-description-routing.module';

import { PlaceDescriptionPage } from './place-description.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlaceDescriptionPageRoutingModule
  ],
  declarations: [PlaceDescriptionPage]
})
export class PlaceDescriptionPageModule {}
