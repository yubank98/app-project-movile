import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListAssignmentPage } from './list-assignment.page';

const routes: Routes = [
  {
    path: '',
    component: ListAssignmentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListAssignmentPageRoutingModule {}
