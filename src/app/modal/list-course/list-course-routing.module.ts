import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListCoursePage } from './list-course.page';

const routes: Routes = [
  {
    path: '',
    component: ListCoursePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListCoursePageRoutingModule {}