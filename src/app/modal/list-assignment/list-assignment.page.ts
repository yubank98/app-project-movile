import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-list-assignment',
  templateUrl: './list-assignment.page.html',
  styleUrls: ['./list-assignment.page.scss'],
})
export class ListAssignmentPage implements OnInit {

  constructor(private modalCrtl: ModalController) { }

  ngOnInit() {
  }

  closeTab() {
    this.modalCrtl.dismiss();
  }

}
