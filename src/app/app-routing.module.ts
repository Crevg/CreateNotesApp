import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ArchivedComponent } from './groups/archived/archived.component';
import { FavoritesComponent } from './groups/favorites/favorites.component';
import { ThrashComponent } from './groups/thrash/thrash.component';
import { AddComponent } from './notes/add/add.component';
import { AllComponent } from './notes/all/all.component';

const routes: Routes = [
  {
    path: 'notes/all',
    component: AllComponent
  },
  {
    path: 'notes/add',
    component: AddComponent
  },
  {
    path: 'groups/archived',
    component: ArchivedComponent
  },
  {
    path: 'groups/favorites',
    component: FavoritesComponent
  }
  ,
  {
    path: 'groups/trash',
    component: ThrashComponent
  },
  {
    path: '**',
    redirectTo: 'notes/all',
    pathMatch: "full"
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
