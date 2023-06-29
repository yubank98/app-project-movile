import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { Course } from 'src/app/interfaces';
import { DbService } from 'src/app/services/Db.service';
import { InfoCoursePage } from '../info-course/info-course.page';

@Component({
  selector: 'app-list-assignment',
  templateUrl: './list-assignment.page.html',
  styleUrls: ['./list-assignment.page.scss'],
})
export class ListAssignmentPage implements OnInit {

  public courses: Course[] = [];

  constructor(private modalCrtl: ModalController, private alertCrtl: AlertController, public database: DbService) {
    this.database.createDatabase().then(() => {
      this.courseList();
    }).catch(error => {
      console.log(error);
    });
  }

  ngOnInit() {
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

  closeTab() {
    this.modalCrtl.dismiss();
  }

  async viewCourse(assignmet: any) {
    const modal = await this.modalCrtl.create({
      component: InfoCoursePage,
      componentProps: {
        id: assignmet.id,
        name: assignmet.name,
        description: assignmet.description,
        teacher_id: assignmet.teacher_id
      }
    });
    await modal.present();
  }

  async updateCourse(course: any) {
    const alert = await this.alertCrtl.create({
      header: 'Editar',
      inputs: [
        {
          placeholder: 'Nombre',
          name: 'name',
          type: 'text',
          value: course.name
        },
        {
          placeholder: 'Descripcion',
          name: 'description',
          type: 'text',
          value: course.description
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Aceptar',
          handler: data => {
            this.database.updateCourse(
              course.id,
              data.name,
              data.description,
              course.teacher_id
            ).then(() => {
              this.courseList();
            }
            );
          }
        }
      ]
    })
    await alert.present();
  }

  async deleteCourse(id: any) {
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
            this.database.deleteCourse(id).then(() => {
              this.courseList();
            }
            );
          }
        },
      ]
    })
    await alert.present();
  }

}
