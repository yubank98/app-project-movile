import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Students } from 'src/app/interfaces/index';
import { DbService } from 'src/app/services/Db.service';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.page.html',
  styleUrls: ['./list-student.page.scss'],
})
export class ListStudentPage implements OnInit {
  public students: Students[] = [];

  constructor(private modalCrtl: ModalController, public database: DbService) {
    this.database.createDatabase().then(() => {
      this.studentList();
    }).catch(error => {
      console.log(error);
    }
    );
  }

  ngOnInit() {}

  closeTab() {
    this.modalCrtl.dismiss();
  }

  studentList() {
    this.database
      .getStudents()
      .then((data) => {
        this.students = data;
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
