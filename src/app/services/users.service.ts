import { Injectable } from '@angular/core';
import { User } from '../models/users';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UsersService {
  private usersURL = `https://uitest.free.beeceptor.com/usernames`;

  constructor(private http: HttpClient) { }

  // Get Users
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.usersURL}`);
  }

}
