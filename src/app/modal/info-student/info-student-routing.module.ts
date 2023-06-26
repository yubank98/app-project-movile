import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoStudentPage } from './info-student.page';

const routes: Routes = [
  {
    path: '',
    component: InfoStudentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoStudentPageRoutingModule {}
