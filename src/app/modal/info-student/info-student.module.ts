import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoStudentPageRoutingModule } from './info-student-routing.module';

import { InfoStudentPage } from './info-student.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoStudentPageRoutingModule
  ],
  declarations: [InfoStudentPage]
})
export class InfoStudentPageModule {}
