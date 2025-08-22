import { IUserService } from "./interfaces/IUserService";

export class UserService implements IUserService {
  async getUsers() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    return data;
  }
}