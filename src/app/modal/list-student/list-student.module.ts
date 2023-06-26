import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListStudentPageRoutingModule } from './list-student-routing.module';

import { ListStudentPage } from './list-student.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListStudentPageRoutingModule
  ],
  declarations: [ListStudentPage]
})
export class ListStudentPageModule {}
