import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-info-student',
  templateUrl: './info-student.page.html',
  styleUrls: ['./info-student.page.scss'],
})
export class InfoStudentPage implements OnInit {

  constructor(private modalCrtl: ModalController) { }

  ngOnInit() {
  }

  closeTab() {
    this.modalCrtl.dismiss();
  }

}
