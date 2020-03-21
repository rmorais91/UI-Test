import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/app/models/users';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {
  @Input() usersList: User[];
  @Input() mapEdit;

  @Output() sendUserToRemoveEvent = new EventEmitter;
  @Output() sendEnableUserToEditEvent = new EventEmitter;
  @Output() sendUserEditEvent = new EventEmitter;

  constructor() { }
  controllerEdit = false;

  ngOnInit(): void {

  }

  // Evento Remove Utilizador
  sendUserToRemove(inputUser) {
    this.sendUserToRemoveEvent.emit(inputUser);
  }

  // Evento Editar Utilizador
  sendUserToEdit(inputUser) {
    this.controllerEdit = true;
    this.sendEnableUserToEditEvent.emit(inputUser);
  }

  // Recebe o utilizador a editar
  receiveUserToEdit(inputUser: User) {
    this.controllerEdit = false;
    this.sendUserEditEvent.emit(inputUser);
  }

  // Obtem o estado do mapa para um user
  getIfIsInEditing(name) {
    return this.mapEdit.get(name);
  }
}
