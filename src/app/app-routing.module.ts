import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TasksPageComponent} from './pages/tasks-page/tasks-page.component';
import {RecurringTasksPageComponent} from './pages/recurring-tasks-page/recurring-tasks-page.component';
import {AppResolver} from './resolver/app.resolver';

const routes: Routes = [
  { path: '', redirectTo: 'tasks', pathMatch: 'full'},
  {
    path: '', resolve: {AppResolver}, children: [
      {path: 'tasks', component: TasksPageComponent},
      {path: 'recurring', component: RecurringTasksPageComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
