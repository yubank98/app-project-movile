import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InfoTeacherPage } from './info-teacher.page';

describe('InfoTeacherPage', () => {
  let component: InfoTeacherPage;
  let fixture: ComponentFixture<InfoTeacherPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InfoTeacherPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
