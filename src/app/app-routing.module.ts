import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataRedirectComponent } from './data-redirect/data-redirect.component';
import { QuestionListComponent } from './question-list/question-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'personal',
    pathMatch: 'full',
  },
  {
    path: 'data',
    component: DataRedirectComponent,
  },
  {
    path: ':criteria',
    component: QuestionListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
