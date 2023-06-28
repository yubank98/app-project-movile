import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddStudentPage } from '../modal/add-student/add-student.page';
import { ListStudentPage } from '../modal/list-student/list-student.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  constructor(private modalCrtl: ModalController) {
    
  }

  ngOnInit() {
  }

  async addStudent() {
    const modal = await this.modalCrtl.create({
      component: AddStudentPage
    });
    await modal.present();
  }

  async selectAssignment() {}

  async studentList() {
    const modal = await this.modalCrtl.create({
      component: ListStudentPage
    });
    await modal.present();
  }
}
