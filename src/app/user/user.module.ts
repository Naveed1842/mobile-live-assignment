import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: UserListComponent,
  }
];
@NgModule({
  declarations: [UserListComponent, UserCreateComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule,RouterModule.forChild(routes)]
})
export class UserModule {}
