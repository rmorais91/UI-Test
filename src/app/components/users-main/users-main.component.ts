import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/users';
import { UsersService } from 'src/app/services/users.service';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Component({
  selector: 'app-users-main',
  templateUrl: './users-main.component.html',
  styleUrls: ['./users-main.component.scss']
})
export class UsersMainComponent implements OnInit {

  userList: User[];

  userListEditted = [];
  mapEdit: Map<string, boolean> = new Map<string, boolean>(undefined);

  controllerEditAll = false;

  constructor(private data: UsersService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getUsers();
  }

  // Remove Utilizador
  removeUser(inputUser: User) {
    this.userList.forEach((user, index) => {
      if (inputUser.name === user.name) {
        this.userList.splice(index, 1);
        this.openSnackBar('User removed.', 'DONE');
      }
    });
  }

  // Remove todos os utilizadores
  removeAllUsers() {
    this.userList = [];
    this.openSnackBar('Users removed.', 'DONE');
  }

  // Altera o valor do mapa para activar o form
  enableEditingUser(inputUser: User) {
    this.changeEditStatus(inputUser.name, true);
  }

  // Altera o nome do utilizador
  editUser(inputUser: User) {
    this.changeEditStatus(inputUser.oldName, false);

    this.userList.map(user => {
      if (inputUser.oldName === user.name) {
        user.name = inputUser.name;
        this.openSnackBar('User modified.', 'DONE');
      }
    });
  }

  // Edita todos os utilizadores
  receiverUsersToSave(inputUsers) {
    this.userListEditted = inputUsers;
  }

  // Guarda alterações da edição geral
  saveAll() {
    this.userList = this.userListEditted['users'];
    this.controllerEditAll = false;
    this.openSnackBar('Users modified.', 'DONE');
  }

  // Adiciona um novo utilizador
  addNewUser(inputUser: User) {
    // Verifica se já existe um utilizador com o mesmo nome
    const index = this.userList.findIndex(user => user.name === inputUser.name);
    if (index === -1) {
      this.userList.push(inputUser);
      this.openSnackBar('User created.', 'DONE');
    } else {
      this.openSnackBar('User exists, try again.', 'ERROR');
    }
  }


  // Obtem Users
  getUsers() {
      this.data.getUsers().subscribe((users: User[]) => {
      this.userList = users;

      this.userList.forEach(user => {
        this.changeEditStatus(user.name, false);
      });
    });

    // this.userList = [
    //   {
    //     name: 'Andre1'
    //   },
    //   {
    //     name: 'Andre2'
    //   },
    //   {
    //     name: 'Andre3'
    //   },
    //   {
    //     name: 'Andre4'
    //   }
    // ];

    // this.userList.forEach(user => {
    //   this.changeEditStatus(user.name, false);
    // });
  }

  // Altera Estado do mapa para um user
  changeEditStatus(name, value) {
    this.mapEdit.set(name, value);
  }

  // Obtem o estado do mapa para um user
  getIfIsInEditing(name) {
    return this.mapEdit.get(name);
  }

  openSnackBar(message, type) {
    const config = new MatSnackBarConfig();
    config.duration = 6 * 1000;
    this.snackBar.open(message, type, config);
  }
}
