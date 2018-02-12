import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

const material = [
  MatButtonModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatIconModule
];

@NgModule({
  imports: material,
  exports: material
})

export class AngularMaterialComponent {

}
