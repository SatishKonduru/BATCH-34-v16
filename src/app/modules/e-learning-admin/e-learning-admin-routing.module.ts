import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ELearningAdminComponent } from './e-learning-admin.component';

const routes: Routes = [{ path: '', component: ELearningAdminComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ELearningAdminRoutingModule { }
