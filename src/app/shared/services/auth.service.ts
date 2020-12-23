import {User} from '../interfaces/interfaces';
import { Injectable, NgZone } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { register } from 'ts-node';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import firebase from 'firebase/app';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;
  user: User = undefined;
  constructor(public afAuth: AngularFireAuth, public router: Router) {
    this.afAuth.authState.subscribe((user) => {
      this.user = user;
    });
  }
  getAuthState(): Observable<User> {
    return this.afAuth.authState;
  }
  SignUp(email, password): any {
    return this.afAuth.createUserWithEmailAndPassword(email, password);
  }
  SignIn(email, password): any {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }
  GoogleAuth(): any {
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.afAuth.signInWithPopup(provider);
  }
  FacebookAuth(): any {
    const provider = new firebase.auth.FacebookAuthProvider();
    return this.afAuth.signInWithPopup(provider);
  }
  GithubAuth(): any {
    const provider = new firebase.auth.GithubAuthProvider();
    return this.afAuth.signInWithPopup(provider);
  }
  SignOut(): void {
    this.afAuth
      .signOut()
      .then(() => {
        this.user = null;
        this.isLoggedIn = false;
      })
      .catch((error) => {
        console.error(error);
      });
  }
}
