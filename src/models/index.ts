export interface IUser {
  id: string;
  username: string;
  avatar: string;
  date: number;
}

export interface IPost {
  uid: string;
  id: string;
  text: string;
  date: number;
  likes: any[];
}
