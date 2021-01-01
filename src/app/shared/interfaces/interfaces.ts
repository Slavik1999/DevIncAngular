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
  date: number;
  comments: Comment[];
}
interface Comment {
  date: Date;
  isResolve: boolean;
  author: string;
  text: string;
}

interface Filters {
  resolved: string;
  categories: string[];
  time: string;
}

export {User, Question, Comment, Filters};
