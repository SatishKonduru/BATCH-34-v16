import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ELearningAuthRoutingModule } from './e-learning-auth-routing.module';
import { ELearningAuthComponent } from './e-learning-auth.component';


@NgModule({
  declarations: [
    ELearningAuthComponent
  ],
  imports: [
    CommonModule,
    ELearningAuthRoutingModule
  ]
})
export class ELearningAuthModule { }
