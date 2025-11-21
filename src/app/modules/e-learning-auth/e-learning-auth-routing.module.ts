import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ELearningAuthComponent } from './e-learning-auth.component';

const routes: Routes = [{ path: '', component: ELearningAuthComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ELearningAuthRoutingModule { }
