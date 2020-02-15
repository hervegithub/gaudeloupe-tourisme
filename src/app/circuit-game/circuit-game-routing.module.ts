import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CircuitGamePage } from './circuit-game.page';

const routes: Routes = [
  {
    path: '',
    component: CircuitGamePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CircuitGamePageRoutingModule {}
