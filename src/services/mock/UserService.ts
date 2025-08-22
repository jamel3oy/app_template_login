import { IUserService } from "../interfaces/IUserService";

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export class MockUserService implements IUserService {
  async getUsers() {
    await delay(3000);
    return [
      { id: 1, name: "Mock A", email: "a@mock.com" },
      { id: 2, name: "Mock B", email: "b@mock.com" },
    ];
  }
}