import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'add-student',
    loadChildren: () => import('./modal/add-student/add-student.module').then( m => m.AddStudentPageModule)
  },
  {
    path: 'add-teacher',
    loadChildren: () => import('./modal/add-teacher/add-teacher.module').then( m => m.AddTeacherPageModule)
  },
  {
    path: 'add-assignment',
    loadChildren: () => import('./modal/add-assignment/add-assignment.module').then( m => m.AddAssignmentPageModule)
  },
  {
    path: 'list-assignment',
    loadChildren: () => import('./modal/list-assignment/list-assignment.module').then( m => m.ListAssignmentPageModule)
  },
  {
    path: 'list-teacher',
    loadChildren: () => import('./modal/list-teacher/list-teacher.module').then( m => m.ListTeacherPageModule)
  },
  {
    path: 'list-student',
    loadChildren: () => import('./modal/list-student/list-student.module').then( m => m.ListStudentPageModule)
  },
  {
    path: 'info-student',
    loadChildren: () => import('./modal/info-student/info-student.module').then( m => m.InfoStudentPageModule)
  },
  {
    path: 'info-teacher',
    loadChildren: () => import('./modal/info-teacher/info-teacher.module').then( m => m.InfoTeacherPageModule)
  },
  {
    path: 'info-course',
    loadChildren: () => import('./modal/info-course/info-course.module').then( m => m.InfoCoursePageModule)
  },  {
    path: 'select-assignment',
    loadChildren: () => import('./modal/select-assignment/select-assignment.module').then( m => m.SelectAssignmentPageModule)
  },


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
