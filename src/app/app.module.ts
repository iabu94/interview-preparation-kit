import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
//import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
//import { getStorage, provideStorage } from '@angular/fire/storage';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IconComponent } from './icon/icon.component';
import { ModalComponent } from './modal/modal.component';
import { BoldPipe } from './pipes/bold.pipe';
import { QuestionListComponent } from './question-list/question-list.component';

@NgModule({
  declarations: [
    AppComponent,
    IconComponent,
    QuestionListComponent,
    ModalComponent,
    BoldPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatDialogModule,
    BrowserAnimationsModule,
    // provideFirebaseApp(() => initializeApp(environment.firebase)),
    // provideStorage(() => getStorage()),
    // AngularFireModule.initializeApp(environment.firebase),
    // AngularFireStorageModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
