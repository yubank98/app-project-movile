import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddAssignmentPage } from '../modal/add-assignment/add-assignment.page';
import { ListAssignmentPage } from '../modal/list-assignment/list-assignment.page';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private modalCrtl: ModalController) {}

  async addAssignment() {
    const modal = await this.modalCrtl.create({
      component: AddAssignmentPage
    });
    await modal.present();
  }

  async assignmentList() {
    const modal = await this.modalCrtl.create({
      component: ListAssignmentPage
    });
    await modal.present();
  }
}
