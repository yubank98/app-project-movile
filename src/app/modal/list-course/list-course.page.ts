import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-list-course',
  templateUrl: './list-course.page.html',
  styleUrls: ['./list-course.page.scss'],
})
export class ListCoursePage implements OnInit {

  constructor(private modalCrtl: ModalController) { }


  @Input() courses: any[] = [];

  ngOnInit() {
  }

  cerrarModal() {
    this.modalCrtl.dismiss();
  }

}