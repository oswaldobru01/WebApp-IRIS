import { Routes } from '@angular/router';

export const routes: Routes = [

  { path: '', loadChildren: () => import('./views/task/task.module').then(m => m.TaskModule) },
  // Add more routes here
];
