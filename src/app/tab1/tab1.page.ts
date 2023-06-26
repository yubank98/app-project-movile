import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddStudentPage } from '../modal/add-student/add-student.page';
import { ListStudentPage } from '../modal/list-student/list-student.page';
import { DbService } from '../services/Db.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  constructor(private modalCrtl: ModalController, public database: DbService) {
    this.database.createDatabase().then(() => {
      this.studentList();
    }).catch(error => {
      console.log(error);
    }
    );
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

  // async addStudent() {
  //   //vector with data student ramdom real
  //   const student = {
  //     name: 'Juan',
  //     email: 'luis@hotmail.com',
  //     phone: '1234567890',
  //     career: 'Ing. Sistemas',
  //     semester: '9'
  //   };

  //   //add student elemtents to database
  //   const result = await this.database.addStudent(student.name, student.email, student.phone, student.career, student.semester);

  // }

  // studentList() {
  //   this.database.getStudents().then(data => {
  //     this.students = data;
  //   }).catch(error => {
  //     console.log(error);

  //   });
  // }
}
