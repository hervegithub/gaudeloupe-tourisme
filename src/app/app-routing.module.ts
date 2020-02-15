import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'description',
    loadChildren: () => import('./description/description.module').then( m => m.DescriptionPageModule)
  },
  {
    path: 'circuit-list',
    loadChildren: () => import('./circuit-list/circuit-list.module').then( m => m.CircuitListPageModule)
  },
  {
    path: 'map',
    loadChildren: () => import('./map/map.module').then( m => m.MapPageModule)
  },
  {
    path: 'places',
    loadChildren: () => import('./places/places.module').then( m => m.PlacesPageModule)
  },
  {
    path: 'place-description',
    loadChildren: () => import('./place-description/place-description.module').then( m => m.PlaceDescriptionPageModule)
  },
  {
    path: 'hotels',
    loadChildren: () => import('./hotels/hotels.module').then( m => m.HotelsPageModule)
  },
  {
    path: 'circuit-game',
    loadChildren: () => import('./circuit-game/circuit-game.module').then( m => m.CircuitGamePageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
