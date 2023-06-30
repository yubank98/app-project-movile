import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoCoursePageRoutingModule } from './info-course-routing.module';

import { InfoCoursePage } from './info-course.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoCoursePageRoutingModule
  ],
  declarations: [InfoCoursePage]
})
export class InfoCoursePageModule {}
