import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ELearningCoursesComponent } from './e-learning-courses.component';

const routes: Routes = [{ path: '', component: ELearningCoursesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ELearningCoursesRoutingModule {}
