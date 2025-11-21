import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ELearningAuthComponent } from './e-learning-auth.component';

describe('ELearningAuthComponent', () => {
  let component: ELearningAuthComponent;
  let fixture: ComponentFixture<ELearningAuthComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ELearningAuthComponent]
    });
    fixture = TestBed.createComponent(ELearningAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
