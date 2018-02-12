import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialComponent } from './angular-material.components';
import 'hammerjs';

import { QuestionDetailComponent } from './question/question-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularMaterialComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
