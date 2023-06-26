import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListAssignmentPage } from './list-assignment.page';

describe('ListAssignmentPage', () => {
  let component: ListAssignmentPage;
  let fixture: ComponentFixture<ListAssignmentPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListAssignmentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
