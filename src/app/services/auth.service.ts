import {Injectable, NgZone} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {register} from 'ts-node';
import {AngularFirestore} from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import {} from '@angular/fire/';
import {Router} from '@angular/router';
import firebase from 'firebase/app';

interface User {
  email: string;
}


@Injectable({
  providedIn: 'root'
})

export class AuthService {
  isLoggedIn = false;
  user: User = null;
  constructor(
    public afAuth: AngularFireAuth
  ) {}

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
    return  this.afAuth.signInWithPopup(provider);
  }
}
