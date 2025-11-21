import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ELearningAdminComponent } from './e-learning-admin.component';

describe('ELearningAdminComponent', () => {
  let component: ELearningAdminComponent;
  let fixture: ComponentFixture<ELearningAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ELearningAdminComponent]
    });
    fixture = TestBed.createComponent(ELearningAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
