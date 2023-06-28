import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-info-teacher',
  templateUrl: './info-teacher.page.html',
  styleUrls: ['./info-teacher.page.scss'],
})
export class InfoTeacherPage implements OnInit {

  @Input() id: string = '';
  @Input() name: string = '';
  @Input() email: string = '';
  @Input() phone: string = '';
  @Input() career: string = '';

  constructor(private modalCrtl: ModalController) { }

  ngOnInit() {
  }

  cerrarModal() {
    this.modalCrtl.dismiss();
  }

}
