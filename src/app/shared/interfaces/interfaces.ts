interface User {
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
  date: Date;
  comments: Comment[];
}
interface Comment {
  date: Date;
  isResolve: boolean;
  author: string;
  text: string;
}

export {User, Question, Comment};
