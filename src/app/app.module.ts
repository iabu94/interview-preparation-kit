import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IconComponent } from './icon/icon.component';
import { PersonalComponent } from './personal/personal.component';
import { CsharpComponent } from './csharp/csharp.component';
import { NetcoreComponent } from './netcore/netcore.component';
import { AngularComponent } from './angular/angular.component';
import { NetmvcComponent } from './netmvc/netmvc.component';
import { SqlComponent } from './sql/sql.component';
import { EfcoreComponent } from './efcore/efcore.component';
import { ProjectComponent } from './project/project.component';
import { AgileComponent } from './agile/agile.component';
import { HrComponent } from './hr/hr.component';
import { HttpClientModule } from '@angular/common/http';
import { QuestionComponent } from './question/question.component';
import { QuestionListComponent } from './question-list/question-list.component';

@NgModule({
  declarations: [
    AppComponent,
    IconComponent,
    PersonalComponent,
    CsharpComponent,
    NetcoreComponent,
    AngularComponent,
    NetmvcComponent,
    SqlComponent,
    EfcoreComponent,
    ProjectComponent,
    AgileComponent,
    HrComponent,
    QuestionComponent,
    QuestionListComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
