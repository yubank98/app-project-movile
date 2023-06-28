import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Course, Students } from 'src/app/interfaces';
import { DbService } from 'src/app/services/Db.service';

@Component({
  selector: 'app-select-assignment',
  templateUrl: './select-assignment.page.html',
  styleUrls: ['./select-assignment.page.scss'],
})
export class SelectAssignmentPage implements OnInit {

  public students: Students[] = []

  public courses: Course[] = []

  selection = {
    student_id: '',
    course_id: '',
    note: ''
  }

  constructor(private modalCrtl: ModalController, public database: DbService) {

    this.database
      .createDatabase()
      .then(() => {
        this.studentList();
      })
      .catch((error) => {
        console.log(error);
      });

      this.database.createDatabase().then(() => {
        this.courseList();
      }).catch(error => {
        console.log(error);
      });
  }

  ngOnInit() {
  }

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

  courseList() {
    this.database
      .getCourses()
      .then((data) => {
        this.courses = data;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  async addSelection(selection: any) {
    await this.database.addStudentCourse(
      selection.student_id,
      selection.course_id,
      selection.note
    )
  }
}
