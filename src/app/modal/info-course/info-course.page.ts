import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-info-course',
  templateUrl: './info-course.page.html',
  styleUrls: ['./info-course.page.scss'],
})
export class InfoCoursePage implements OnInit {

  @Input() id: string ='';
  @Input() name: string ='';
  @Input() description: string ='';
  @Input() teacher: string ='';

  constructor(private modalCrtl: ModalController) { }

  ngOnInit() {
  }

  cerrarModal() {
    this.modalCrtl.dismiss();
  }

}
