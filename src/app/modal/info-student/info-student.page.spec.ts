import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InfoStudentPage } from './info-student.page';

describe('InfoStudentPage', () => {
  let component: InfoStudentPage;
  let fixture: ComponentFixture<InfoStudentPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InfoStudentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
