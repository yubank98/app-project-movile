import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { Students } from 'src/app/interfaces/index';
import { DbService } from 'src/app/services/Db.service';
import { InfoStudentPage } from '../info-student/info-student.page';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.page.html',
  styleUrls: ['./list-student.page.scss'],
})
export class ListStudentPage implements OnInit {
  
  public students: Students[] = [];

  constructor(
    private modalCrtl: ModalController,
    private alertCrtl: AlertController,
    public database: DbService
  ) {
    this.database
      .createDatabase()
      .then(() => {
        this.studentList();
      })
      .catch((error) => {
        console.log(error);
      });
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

  async viewStudent(student: any) {
    const modal = await this.modalCrtl.create({
      component: InfoStudentPage,
      componentProps: {
        id: student.id,
        name: student.name,
        email: student.email,
        phone: student.phone,
        career: student.career,
        semester: student.semester
      }
    });
    await modal.present();
  }

  async updateStudent(id: any) {
    const alert = await this.alertCrtl.create({
      header: 'Editar',
      inputs:[
        {
          placeholder: 'Nombre',
          name: 'name',
          type: 'text'
        },
        {
          placeholder: 'Correo',
          name: 'email',
          type: 'text'
        },
        {
          placeholder: 'Telefono',
          name: 'phone',
          type: 'text'
        },
        {
          placeholder: 'Carrera',
          name: 'career',
          type: 'text'
        },
        {
          placeholder: 'Semestre',
          name: 'semester',
          type: 'text'
        },
      ],
      buttons:[
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Aceptar',
          handler: data => {
            this.database.updateStudent(
              id,
              data.name,
              data.email,
              data.phone,
              data.career,
              data.semester
            )
          }
        },
      ]
    });
    await alert.present();
  }

  async deleteStudent(id: any) {
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
            this.database.deleteStudent(id)
          }
        },
      ]
    });
  
    await alert.present();
  }
}