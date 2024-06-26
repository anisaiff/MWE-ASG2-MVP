import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LevelListPageRoutingModule } from './level-list-routing.module';

import { LevelsPage } from './level-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LevelListPageRoutingModule
  ],
  declarations: [LevelsPage]
})
export class LevelListPageModule {}
