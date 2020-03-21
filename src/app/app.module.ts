import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FlexLayoutModule } from '@angular/flex-layout';
import { FooterComponent } from './components/footer/footer.component';
import { TopbarComponent } from './components/topbar/topbar.component';

import { UsersMainComponent } from './components/users-main/users-main.component';
import { ListUsersComponent } from './components/users-main/list-users/list-users.component';

import { HttpClientModule } from '@angular/common/http';


import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';


import { ReactiveFormsModule, FormsModule, FormBuilder } from '@angular/forms';
import { FormUserComponent } from './components/users-main/form-user/form-user.component';
import { EditUserComponent } from './components/users-main/list-users/edit-user/edit-user.component';
import { EditUsersComponent } from './components/users-main/edit-users/edit-users.component';
import { UsersService } from './services/users.service';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    TopbarComponent,
    UsersMainComponent,
    ListUsersComponent,
    FormUserComponent,
    EditUserComponent,
    EditUsersComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatFormFieldModule,

  ],
  exports: [
    MatToolbarModule,
    MatGridListModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule
  ],
  providers: [ HttpClientModule, FormBuilder, UsersService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
