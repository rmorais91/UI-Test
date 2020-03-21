import { Component, OnInit, Output, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';

import { User } from 'src/app/models/users';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.scss']
})
export class FormUserComponent implements OnInit {
  @Output() sendUserToAddEvent = new EventEmitter();

  addForm: FormGroup;
  newUser: User;
  buttonController = false;

  constructor(private fb: FormBuilder) {
    // Incializar Form
    this.addForm = this.fb.group({
      userName: ['']
    });
  }

  ngOnInit(): void {
    this.addForm.valueChanges.subscribe( formValue => {
      if ( formValue.userName !== '' ) {
        this.buttonController = true;
      } else {
        this.buttonController = false;
      }
    });
  }

  // Envia evento com o novo User
  sendUserToAdd() {
    const newUser = {
      name: this.addForm.get('userName').value
    };

    this.sendUserToAddEvent.emit(newUser);
    this.addForm.reset();
    this.buttonController = false;
  }

}
