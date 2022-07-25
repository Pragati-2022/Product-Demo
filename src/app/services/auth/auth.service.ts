import { Injectable } from '@angular/core';
import { IUser } from 'src/app/interfaces/user';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { from } from 'rxjs';
import * as firebase from 'firebase/compat';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  currentUser$ =  this.auth.user;

  constructor(private auth: AngularFireAuth) { 
  }

  createUser(userData: IUser) {
    if (!userData.password) {
      throw new Error('password not provided!');
    }
    return from(
      this.auth.createUserWithEmailAndPassword(
        userData.email,
        userData.password
      )
    );
  }

  login(email: string, password: string) {
    return from(this.auth.signInWithEmailAndPassword(email, password));
  }

  logout($event: Event) {
    $event.preventDefault();
    return from(this.auth.signOut());
  }
}
