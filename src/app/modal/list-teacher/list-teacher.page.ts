import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { Teachers } from 'src/app/interfaces';
import { DbService } from 'src/app/services/Db.service';
import { InfoTeacherPage } from '../info-teacher/info-teacher.page';

@Component({
  selector: 'app-list-teacher',
  templateUrl: './list-teacher.page.html',
  styleUrls: ['./list-teacher.page.scss'],
})
export class ListTeacherPage implements OnInit {

  public teachers: Teachers[] = [];

  constructor(private modalCrtl: ModalController, private alertCrtl: AlertController, public database: DbService) {
    this.database.createDatabase().then(() => {
      this.teacherList();
    }).catch(error => {
      console.log(error);
    }
    );
  }

  ngOnInit() {
  }

  closeTab() {
    this.modalCrtl.dismiss();
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

  async viewTeacher(teacher: any) {
    const modal = await this.modalCrtl.create({
      component: InfoTeacherPage,
      componentProps: {
        id: teacher.id,
        name: teacher.name,
        email: teacher.email,
        phone: teacher.phone,
        career: teacher.career,
      }
    });
    await modal.present();
  }

  async updateTeacher(id: any) {}

  async deleteTeacher(id: any) {
    const alert = await this.alertCrtl.create({
      header: '¡Espera!',
      subHeader: 'Estas a punto de eliminar un registro',
      message: '¿Seguro que deseas continuar?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Aceptar',
          handler: () => {
            this.database.deleteTeacher(id)
          }
        },
      ]
    })
    await alert.present();
  }

}
