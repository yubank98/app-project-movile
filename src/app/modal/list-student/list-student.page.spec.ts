import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListStudentPage } from './list-student.page';

describe('ListStudentPage', () => {
  let component: ListStudentPage;
  let fixture: ComponentFixture<ListStudentPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListStudentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
