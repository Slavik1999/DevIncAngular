import {Admin, Question, User} from '../interfaces/interfaces';
import { Injectable, NgZone } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { register } from 'ts-node';
import {AngularFirestore, DocumentSnapshot, QuerySnapshot} from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import firebase from 'firebase/app';
import DocumentData = firebase.firestore.DocumentData;
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: User = undefined;
  admin = false;
  constructor(public afAuth: AngularFireAuth, public router: Router) {
    this.afAuth.authState.subscribe((user) => {
      this.user = user;
      if (user){
        this.getAdmins().then(admins => {
          admins.map(admin => {
            this.admin = admin === user.email;
          });
        });
      }
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
  SignOut(): any {
    return this.afAuth.signOut();
  }
  getAdmins(): Promise<string[]>{
    return firebase.firestore().collection('admins').get().then( (res: QuerySnapshot<DocumentData>) => {
      return res.docs.map((admin) => {
        return admin.data().email;
      });
    });
  }
}
