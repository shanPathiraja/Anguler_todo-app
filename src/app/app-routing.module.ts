import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodosComponent } from './components/todos/todos.component';
import { AboutComponent } from './pages/about/about.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  { path: '', component: TodosComponent },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'users',
    component: UserComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
