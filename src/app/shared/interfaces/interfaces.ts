interface User {
  email: string;
}
interface Question {
  id?: string;
  title: string;
  text: string;
  tags: string[];
  onModeration: boolean;
  user: string;
  isResolved: boolean;
  date: Date;
}

export {User, Question};
