import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddTeacherPage } from '../modal/add-teacher/add-teacher.page';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private modalCrtl: ModalController) {}

  async addTeacher() {
    const modal = await this.modalCrtl.create({
      component: AddTeacherPage
    });
    await modal.present();
  }

  async teacherList() {}
}
