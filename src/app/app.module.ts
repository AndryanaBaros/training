import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { UserModel } from './model/user.model';
import { MatDialogModule } from '@angular/material/dialog';
import { EditComponent } from './components/user/edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,
    ReactiveFormsModule
  ],
  providers: [UserModel],
  bootstrap: [AppComponent]
})
export class AppModule { }
