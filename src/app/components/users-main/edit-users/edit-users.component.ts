import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/models/users';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';


@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrls: ['./edit-users.component.scss']
})
export class EditUsersComponent implements OnInit {
  @Input() usersList: User[] = [];

  @Output() sendUserEditted = new EventEmitter();

  usersForm: FormGroup;
  users: FormArray;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.usersForm = new FormGroup({
      users: new FormArray([])
    });

    // Cria o Form Array para todos os users
    this.generateDynamicForm();

    // Subscribe ao array form
    this.usersForm.valueChanges.subscribe( valuesForm => {
      this.sendUserEditted.emit(valuesForm);
    });
  }

  // Adiciona cada form
  createUser( userName: string ): FormGroup {
    return this.fb.group({
      name: userName,
    });
  }

  // Gera o form array dinamico
  generateDynamicForm(): void {
    this.usersList.forEach(user => {
      this.users = this.usersForm.get('users') as FormArray;
      this.users.push(this.createUser(user.name));
    });
  }
}
