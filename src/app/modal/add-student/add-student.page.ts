import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DbService } from 'src/app/services/Db.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.page.html',
  styleUrls: ['./add-student.page.scss'],
})
export class AddStudentPage implements OnInit {
  student = {
    id: '',
    name: '',
    email: '',
    phone: '',
    career: '',
    semester: ''
  }

  constructor(private modalCrtl: ModalController, public database: DbService) {}

  ngOnInit() {}

  async newStudent(student: any) {
    const result = await this.database.addStudent(
      student.id,
      student.name,
      student.email,
      student.phone,
      student.career,
      student.semester
    );
    alert('New student created');
    this.closeTab();
  }

  closeTab() {
    this.modalCrtl.dismiss();
  }
}
