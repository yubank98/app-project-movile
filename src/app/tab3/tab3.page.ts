import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddAssignmentPage } from '../modal/add-assignment/add-assignment.page';

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

  async assignmentList() {}
}
