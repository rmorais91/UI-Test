import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersMainComponent } from './components/users-main/users-main.component';
import { EditUsersComponent } from './components/users-main/edit-users/edit-users.component';


const routes: Routes = [
  {
    path: '',
    component: UsersMainComponent
  },
  {
    path: 'editUsers',
    component: EditUsersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
