import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.page.html',
  styleUrls: ['./list-student.page.scss'],
})
export class ListStudentPage implements OnInit {

  constructor(private modalCrtl: ModalController) { }

  ngOnInit() {
  }

  closeTab() {
    this.modalCrtl.dismiss();
  }

}
