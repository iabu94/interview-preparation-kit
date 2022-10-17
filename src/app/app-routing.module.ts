import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgileComponent } from './agile/agile.component';
import { AngularComponent } from './angular/angular.component';
import { CsharpComponent } from './csharp/csharp.component';
import { EfcoreComponent } from './efcore/efcore.component';
import { HrComponent } from './hr/hr.component';
import { NetcoreComponent } from './netcore/netcore.component';
import { NetmvcComponent } from './netmvc/netmvc.component';
import { PersonalComponent } from './personal/personal.component';
import { ProjectComponent } from './project/project.component';
import { SqlComponent } from './sql/sql.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'personal',
    pathMatch: 'full'
  },
  {
    path: 'personal',
    component: PersonalComponent
  },
  {
    path: 'csharp',
    component: CsharpComponent
  },
  {
    path: 'netcore',
    component: NetcoreComponent
  },
  {
    path: 'angular',
    component: AngularComponent
  },
  {
    path: 'netmvc',
    component: NetmvcComponent
  },
  {
    path: 'sql',
    component: SqlComponent
  },
  {
    path: 'ef',
    component: EfcoreComponent
  },
  {
    path: 'project',
    component: ProjectComponent
  },
  {
    path: 'agile',
    component: AgileComponent
  },
  {
    path: 'hr',
    component: HrComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
