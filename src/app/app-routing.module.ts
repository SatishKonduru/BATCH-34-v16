import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { CourseComponent } from './components/course/course.component';
import { CourseDetailsComponent } from './components/course-details/course-details.component';
import { DocsComponent } from './components/docs/docs.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SelectedCourseComponent } from './components/selected-course/selected-course.component';
import { SelectedCourseDetailsComponent } from './components/selected-course-details/selected-course-details.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: '/header',
  //   pathMatch: 'full',
  // },
  // {
  //   path: 'header',
  //   component: HeaderComponent,
  // },
  {
    path: 'home',
    component: HomeComponent,
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
    path: 'selectedCourse/:id',
    component: SelectedCourseComponent,
    children: [
      {
        path: 'selectedCourseDetails',
        component: SelectedCourseDetailsComponent,
      },
    ],
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
