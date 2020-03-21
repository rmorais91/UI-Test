import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/models/users';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  @Input() user: User = { name: ''};
  @Input() editType;

  @Output() sendUserEditEvent = new EventEmitter();
  @Output() sendUserEditAllEvent = new EventEmitter();

  editForm: FormGroup;
  newUser: User;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    // Incializar com valor do user
    this.editForm = this.fb.group({
      userName: [this.user.name, Validators.compose([Validators.required])]
    });

    if ( this.editType === 'all') {
      this.editForm.valueChanges.subscribe( formValue => {
        this.sendUserEditAllEvent.emit(formValue);
      });
    }

  }

  // Envia evento com o novo User
  sendUserEdit() {
    const newUser = {
      name: this.editForm.get('userName').value,
      oldName: this.user.name
    };

    this.sendUserEditEvent.emit(newUser);
    this.editForm.reset();
  }

}
