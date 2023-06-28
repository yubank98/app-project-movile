import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-info-student',
  templateUrl: './info-student.page.html',
  styleUrls: ['./info-student.page.scss'],
})
export class InfoStudentPage implements OnInit {

  @Input() id: string = '';
  @Input() name: string = '';
  @Input() email: string = '';
  @Input() phone: string = '';
  @Input() career: string = '';
  @Input() semester: string = '';

  constructor(private modalCrtl: ModalController) { }

  ngOnInit() {
  }

  cerrarModal() {
    this.modalCrtl.dismiss();
  }
}
