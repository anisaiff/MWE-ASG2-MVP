import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LevelDetailsPageRoutingModule } from './level-details-routing.module';

import { LevelDetailsPage } from './level-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LevelDetailsPageRoutingModule
  ],
  declarations: [LevelDetailsPage]
})
export class LevelDetailsPageModule {}
