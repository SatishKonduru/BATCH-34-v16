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
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthGuard } from './guards/auth.guard';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AdminUsersComponent } from './admin/admin-users/admin-users.component';
import { AdminSettingsComponent } from './admin/admin-settings/admin-settings.component';
import { UnauthorizedComponent } from './components/unauthorized/unauthorized.component';
import { AdminGuard } from './guards/admin.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'header',
    component: HeaderComponent,
  },
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
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'unauthorized',
    component: UnauthorizedComponent,
  },
  {
    path: 'admin',
    canActivateChild: [AdminGuard],
    children: [
      {
        path: 'dashboard',
        component: AdminDashboardComponent,
      },
      {
        path: 'users',
        component: AdminUsersComponent,
      },
      {
        path: 'settings',
        component: AdminSettingsComponent,
      },
    ],
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
