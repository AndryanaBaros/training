import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from './components/user/edit/edit.component';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', component: UserComponent
  },
  {
    path: 'edit/:ID', component: EditComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
