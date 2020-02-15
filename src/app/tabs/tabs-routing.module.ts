import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'favorites',
        children: [
          {
            path: '',
            loadChildren: () => import('../favorites/favorites.module').then( m => m.FavoritesPageModule)
          }
        ]
      },
      {
        path: 'activities',
        children: [
          {
            path: '',
            loadChildren: () => import('../activities/activities.module').then( m => m.ActivitiesPageModule)
          }
        ]
      },
      {
        path: 'likes',
        children: [
          {
            path: '',
            loadChildren: () => import('../likes/likes.module').then( m => m.LikesPageModule)
          }
        ]
      },
      {
        path: 'parametres',
        children: [
          {
            path: '',
            loadChildren: () => import('../parametres/parametres.module').then( m => m.ParametresPageModule)
          }
        ]
      },
      {
        path: 'cap',
        children : [
          {
            path: "",
            loadChildren: () => import('../cap/cap.module').then( m => m.CapPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/favorites',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/favorites',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
