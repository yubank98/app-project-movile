import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoTeacherPageRoutingModule } from './info-teacher-routing.module';

import { InfoTeacherPage } from './info-teacher.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoTeacherPageRoutingModule
  ],
  declarations: [InfoTeacherPage]
})
export class InfoTeacherPageModule {}
