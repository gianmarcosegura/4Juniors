import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../auser/user-model';

@Component({
  selector: 'app-signup',
  templateUrl: 'upuser.component.html'
})

export class SignUpComponent implements OnInit {

  signinForm: FormGroup;

  ngOnInit() {
    this.signinForm = new FormGroup({
      nombre: new FormControl(null, [
        Validators.required
      ]),
      apellido: new FormControl(null, [
        Validators.required
      ]),
      email: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
      ]),
      password: new FormControl(null, [
        Validators.required
      ]),
      password2: new FormControl(null, [
        Validators.required
      ])
      });
  }


  onSubmit() {
    if (this.signinForm.valid) {
      const { nombre, apellido, password2, email, password } = this.signinForm.value;
      const user = new User( email, password, password2, nombre, apellido);
      console.log(user);
    }
  }

}
