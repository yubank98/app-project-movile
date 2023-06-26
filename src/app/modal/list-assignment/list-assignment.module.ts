import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListAssignmentPageRoutingModule } from './list-assignment-routing.module';

import { ListAssignmentPage } from './list-assignment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListAssignmentPageRoutingModule
  ],
  declarations: [ListAssignmentPage]
})
export class ListAssignmentPageModule {}
