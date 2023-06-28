import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoCoursePage } from './info-course.page';

const routes: Routes = [
  {
    path: '',
    component: InfoCoursePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoCoursePageRoutingModule {}
