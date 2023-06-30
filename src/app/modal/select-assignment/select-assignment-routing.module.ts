import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectAssignmentPage } from './select-assignment.page';

const routes: Routes = [
  {
    path: '',
    component: SelectAssignmentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectAssignmentPageRoutingModule {}
