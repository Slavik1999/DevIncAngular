import { User } from '../interfaces/interfaces';
import { Injectable } from '@angular/core';
import { QuerySnapshot } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import firebase from 'firebase/app';
import { Observable } from 'rxjs';
import DocumentData = firebase.firestore.DocumentData;

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: User = undefined;
  admin = false;
  constructor(public afAuth: AngularFireAuth, public router: Router) {
    this.afAuth.authState.subscribe((user) => {
      this.user = user;
      if (user) {
        this.getAdmins().then((admins) => {
          this.admin = admins.some(admin => admin === user.uid);
        });
      }
    });
  }
  updateUser(obj): any {
    return firebase.auth().currentUser.updateProfile(obj);
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
  getAdmins(): Promise<string[]> {
    return firebase.firestore().collection('admins').get().then((res: QuerySnapshot<DocumentData>) => {
      return res.docs.map((admin) => {
        return admin.data().email;
      });
    });
  }
}
