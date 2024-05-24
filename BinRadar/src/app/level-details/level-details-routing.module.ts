import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LevelDetailsPage } from './level-details.page';

const routes: Routes = [
  {
    path: '',
    component: LevelDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LevelDetailsPageRoutingModule {}
