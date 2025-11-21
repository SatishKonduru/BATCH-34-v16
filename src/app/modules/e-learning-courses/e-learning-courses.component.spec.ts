import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ELearningCoursesComponent } from './e-learning-courses.component';

describe('ELearningCoursesComponent', () => {
  let component: ELearningCoursesComponent;
  let fixture: ComponentFixture<ELearningCoursesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ELearningCoursesComponent]
    });
    fixture = TestBed.createComponent(ELearningCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
