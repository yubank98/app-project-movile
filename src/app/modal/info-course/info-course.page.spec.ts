import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InfoCoursePage } from './info-course.page';

describe('InfoCoursePage', () => {
  let component: InfoCoursePage;
  let fixture: ComponentFixture<InfoCoursePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InfoCoursePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
