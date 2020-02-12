import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CircuitListPageRoutingModule } from './circuit-list-routing.module';

import { CircuitListPage } from './circuit-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CircuitListPageRoutingModule
  ],
  declarations: [CircuitListPage]
})
export class CircuitListPageModule {}
