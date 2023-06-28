import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SelectAssignmentPage } from './select-assignment.page';

describe('SelectAssignmentPage', () => {
  let component: SelectAssignmentPage;
  let fixture: ComponentFixture<SelectAssignmentPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SelectAssignmentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
