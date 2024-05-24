import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LevelListPage } from './level-list.page';

const routes: Routes = [
  {
    path: '',
    component: LevelListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LevelListPageRoutingModule {}
