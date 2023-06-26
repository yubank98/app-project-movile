import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Course } from 'src/app/interfaces';

@Component({
  selector: 'app-list-assignment',
  templateUrl: './list-assignment.page.html',
  styleUrls: ['./list-assignment.page.scss'],
})
export class ListAssignmentPage implements OnInit {

  public courses: Course[] = [
    {
      id: 1,
      name: 'Español',
      description: '',
      teacher_id: 2,
    },
    {
      id: 2,
      name: 'Matematicas',
      description: '',
      teacher_id: 3,
    },
    {
      id: 3,
      name: 'Ciencias',
      description: '',
      teacher_id: 1,
    },
    {
      id: 4,
      name: 'Historia',
      description: '',
      teacher_id: 4,
    },
  ];

  constructor(private modalCrtl: ModalController) { }

  ngOnInit() {
  }

  closeTab() {
    this.modalCrtl.dismiss();
  }

}
