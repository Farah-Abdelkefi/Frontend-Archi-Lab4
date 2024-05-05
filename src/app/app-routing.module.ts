import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';
import { ApplyComponent } from './apply/apply.component';

const routes: Routes = [
  { path: '', component: FormComponent },
  { path: 'apply', component: ApplyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
