import { Injectable, NgZone } from '@angular/core';
import { DocumentReference, DocumentSnapshot, QuerySnapshot } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import firebase from 'firebase/app';
import DocumentData = firebase.firestore.DocumentData;
import { Question } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  questions: Question[] = [];
  constructor(public router: Router) {}

  createQuestion(question: Question): Promise<Question> {
    const db = firebase.firestore();
    return db.collection('questions').add(question).then((res: DocumentReference<DocumentData>) => {
      return (res as unknown) as Question;
    });
  }

  getQuetions(): Promise<Question[]> {
    return firebase.firestore().collection('questions').get().then((res: QuerySnapshot<DocumentData>) => {
      return res.docs.map((question) => {
        const q = question.data();
        return { ...q, id: question.id } as Question;
      });
    });
  }
  getQuestion(id): Promise<Question> {
    return firebase
      .firestore()
      .collection('questions')
      .doc(`${id}`)
      .get()
      .then((res: DocumentSnapshot<DocumentData>) => {
        return { ...res.data(), id: res.id } as Question;
      });
  }

  updateQuestion(id, question): any {
    return firebase.firestore().collection('questions').doc(`${id}`).update(question);
  }
  deleteQuestion(id): any{
    return firebase.firestore().collection('questions').doc(`${id}`).delete();
  }
}
