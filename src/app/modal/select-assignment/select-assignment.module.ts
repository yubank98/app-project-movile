import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectAssignmentPageRoutingModule } from './select-assignment-routing.module';

import { SelectAssignmentPage } from './select-assignment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectAssignmentPageRoutingModule
  ],
  declarations: [SelectAssignmentPage]
})
export class SelectAssignmentPageModule {}
