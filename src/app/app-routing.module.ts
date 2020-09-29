import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { CreateComponent } from './layouts/pages/create/create.component';
import { DetailComponent } from './layouts/pages/detail/detail.component';
import { EditComponent } from './layouts/pages/edit/edit.component';
import { HomeComponent } from './layouts/pages/home/home.component';
import { ListComponent } from './layouts/pages/list/list.component';

const routes: Routes = [
  {
    path:'', component:DefaultComponent,
    children:
    [
      {path:'', component:HomeComponent},
      {path:'list', component:ListComponent},
      {path:'list/create', component:CreateComponent},
      {path:'list/:id', component:DetailComponent},
      {path:'list/:id/edit', component:EditComponent},
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
