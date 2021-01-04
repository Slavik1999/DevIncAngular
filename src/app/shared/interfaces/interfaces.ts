interface User {
  email: string;
  displayName: string;
  photoURL: string;
  uid: string;
}
interface Admin {
  email: string;
}
interface Question {
  id?: string;
  title: string;
  text: string;
  tags: string[];
  onModeration: boolean;
  author: string;
  isResolved: boolean;
  date: number;
  comments: Comment[];
  uid: string;
}
interface Comment {
  date: number;
  isResolve: boolean;
  author: string;
  text: string;
}

interface Filters {
  resolved: string;
  categories: string[];
  time: string;
  onModeration: string;
  myQuestions: string;
}

export {User, Question, Comment, Filters, Admin};
