import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { CourseComponent } from './components/course/course.component';
import { CourseDetailsComponent } from './components/course-details/course-details.component';
import { DocsComponent } from './components/docs/docs.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SelectedCourseComponent } from './components/selected-course/selected-course.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/course',
    pathMatch: 'full',
  },
  {
    path: 'course',
    component: CourseComponent,
  },

  {
    path: 'courseDetails/:id',
    component: CourseDetailsComponent,
  },
  {
    path: 'courseDetails',
    component: CourseDetailsComponent,
  },
  {
    path: 'docs',
    component: DocsComponent,
  },
  {
    path: 'selectedCourse/:course',
    component: SelectedCourseComponent,
  },

  {
    path: 'selectedCourse',
    component: SelectedCourseComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

const routerOptions: ExtraOptions = {
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64],
  useHash: true,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
