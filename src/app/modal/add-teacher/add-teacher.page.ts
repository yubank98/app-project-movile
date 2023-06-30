import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DbService } from 'src/app/services/Db.service';

@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.page.html',
  styleUrls: ['./add-teacher.page.scss'],
})
export class AddTeacherPage implements OnInit {
  teacher = {
    id: '',
  name: '',
  email: '',
  phone: '',
  career: ''
  }

  constructor(private modalCrtl: ModalController, public database: DbService) { }

  ngOnInit() {
  }

  async newTeacher(teacher: any) {
    const result = await this.database.addTeacher(
      teacher.id,
      teacher.name,
      teacher.email,
      teacher.phone,
      teacher.career
    );
    alert('New teacher created');
    this.closeTab();
  }

  closeTab() {
    this.modalCrtl.dismiss();
  }
}
