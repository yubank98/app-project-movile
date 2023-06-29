import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { StudentCourse, Students } from 'src/app/interfaces/index';
import { DbService } from 'src/app/services/Db.service';
import { InfoStudentPage } from '../info-student/info-student.page';
import { ListCoursePage } from '../list-course/list-course.page';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.page.html',
  styleUrls: ['./list-student.page.scss'],
})

export class ListStudentPage implements OnInit {
  
  public students: Students[] = [];
  public courses: StudentCourse[] = [];

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

  async viewCourses(id : any) {
    await this.database.getCourseStudent(id).then((data) => {
      this.courses = data;
    })
    const modal = await this.modalCrtl.create({
      component: ListCoursePage,
      componentProps: {
        courses : this.courses  
      }
    });
    await modal.present();
  }


  async updateStudent(student: any) {
    const alert = await this.alertCrtl.create({
      header: 'Editar',
      inputs:[
        {
          placeholder: 'Nombre',
          name: 'name',
          type: 'text',
          value: student.name
        },
        {
          placeholder: 'Correo',
          name: 'email',
          type: 'text',
          value: student.email
        },
        {
          placeholder: 'Telefono',
          name: 'phone',
          type: 'text',
          value: student.phone
        },
        {
          placeholder: 'Carrera',
          name: 'career',
          type: 'text',
          value: student.career
        },
        {
          placeholder: 'Semestre',
          name: 'semester',
          type: 'text',
          value: student.semester
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
              student.id,
              data.name,
              data.email,
              data.phone,
              data.career,
              data.semester
            ).then(() => {
              this.studentList();
            }
            );
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
            this.database.deleteStudent(id).then(() => {
              this.studentList();
            }
            );
          }
        },
      ]
    });
    await alert.present();
    
  }



}