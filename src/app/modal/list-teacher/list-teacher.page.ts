import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Teachers } from 'src/app/interfaces';

@Component({
  selector: 'app-list-teacher',
  templateUrl: './list-teacher.page.html',
  styleUrls: ['./list-teacher.page.scss'],
})
export class ListTeacherPage implements OnInit {

  public teachers: Teachers[] = [];

  constructor(private modalCrtl: ModalController) { }

  ngOnInit() {
  }

  closeTab() {
    this.modalCrtl.dismiss();
  }

}
