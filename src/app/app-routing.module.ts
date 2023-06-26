import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },  {
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
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
