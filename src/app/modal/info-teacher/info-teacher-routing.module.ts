import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoTeacherPage } from './info-teacher.page';

const routes: Routes = [
  {
    path: '',
    component: InfoTeacherPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoTeacherPageRoutingModule {}
