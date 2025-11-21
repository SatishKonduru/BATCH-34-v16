import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ELearningAdminRoutingModule } from './e-learning-admin-routing.module';
import { ELearningAdminComponent } from './e-learning-admin.component';


@NgModule({
  declarations: [
    ELearningAdminComponent
  ],
  imports: [
    CommonModule,
    ELearningAdminRoutingModule
  ]
})
export class ELearningAdminModule { }
