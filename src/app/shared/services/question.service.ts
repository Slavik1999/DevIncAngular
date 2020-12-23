import { Injectable, NgZone } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { register } from 'ts-node';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import firebase from 'firebase/app';
import { Observable } from 'rxjs';
import DocumentData = firebase.firestore.DocumentData;
import {Question} from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  questions: Question[] = [];
  constructor(public router: Router) {}

  createQuestion(question: Question): Promise<Question> {
    const db = firebase.firestore();
    return db.collection('questions').add(question).then((res: any) => {
      return res;
    });
  }

  getQuetions(): Promise<Question[]> {
    return firebase.firestore().collection('questions').get().then((res: any) => {
      return (this.questions = res.docs.map((question) => {
        const q = question.data();
        return { ...q, id: q.id } as Question;
      }));
    });
  }
}
