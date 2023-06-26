import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Students } from 'src/app/interfaces/index'

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.page.html',
  styleUrls: ['./list-student.page.scss'],
})
export class ListStudentPage implements OnInit {

  public students: Students[] = [];

  constructor(private modalCrtl: ModalController) { }

  ngOnInit() {
  }

  closeTab() {
    this.modalCrtl.dismiss();
  }

}
