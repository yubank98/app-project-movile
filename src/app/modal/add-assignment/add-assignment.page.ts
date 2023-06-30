import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Teachers } from 'src/app/interfaces';
import { DbService } from 'src/app/services/Db.service';

@Component({
  selector: 'app-add-assignment',
  templateUrl: './add-assignment.page.html',
  styleUrls: ['./add-assignment.page.scss'],
})
export class AddAssignmentPage implements OnInit {

  public teachers: Teachers[] = [];

  course = {
  name: '',
  description: '',
  teacher_id: ''
  } 

  constructor(private modalCrtl: ModalController, public database: DbService) {
    this.database.createDatabase().then(() => {
      this.teacherList();
    }).catch(error => {
      console.log(error);
    }
    );
  }

  ngOnInit() {
  }

  async newCourse(course: any){
    const result = await this.database.addCourse(
      course.name,
      course.description,
      course.teacher_id
    );
    this.closeTab();
  }

  teacherList() {
    this.database
      .getTeachers()
      .then((data) => {
        this.teachers = data;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  closeTab() {
    this.modalCrtl.dismiss();
  }

}
