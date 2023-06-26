import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListTeacherPage } from './list-teacher.page';

describe('ListTeacherPage', () => {
  let component: ListTeacherPage;
  let fixture: ComponentFixture<ListTeacherPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListTeacherPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
