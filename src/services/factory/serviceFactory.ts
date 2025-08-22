import { IUserService } from "../interfaces/IUserService";
import { UserService } from "../UserService";
import { MockUserService } from "../mock/UserService";

const USE_MOCK = process.env.NEXT_PUBLIC_USE_MOCK === "true";

export class ServiceFactory {
  static getUserService(): IUserService {
    return USE_MOCK ? new MockUserService() : new UserService();
  }
}