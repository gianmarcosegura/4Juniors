import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import {
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatListModule,
  MatRadioModule } from '@angular/material';

const material = [
  MatButtonModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatInputModule,
  MatFormFieldModule,
  MatListModule,
  MatGridListModule,
  MatRadioModule
];

@NgModule({
  imports: material,
  exports: material
})

export class AngularMaterialComponent {

}

/*
Lo he probado asi tambien, y funciona.

import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule
 } from '@angular/material';

const material = [
  MatButtonModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatCardModule,
  MatIconModule
];

*/
