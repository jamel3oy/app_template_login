export interface User {
  id: number;
  name: string;
  email: string;
}


export interface IUserService {
  getUsers(): Promise<{ id: number; name: string; email: string }[]>;
}