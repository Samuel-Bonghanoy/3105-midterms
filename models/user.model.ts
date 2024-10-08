import type { User } from '../types/user';

class UserModel {
  private static instance: UserModel;
  // In-memory mock database
  private users: User[] = [];

  // Make it so that only one instance of UserModel can be instantiated
  constructor() {
    if (UserModel.instance) {
      return UserModel.instance;
    }

    UserModel.instance = this;
  }

  createUser(username: string, password: string, email: string): User {
    const id = this.users.length;

    const user: User = { id, username, password, email };
    this.users.push(user);

    return user;
  }

  findUserByUsername(username: string): User | undefined {
    return this.users.find((user) => user.username === username);
  }

  findUserById(id: number): User | undefined {
    return this.users.find((user) => user.id === id);
  }
}

const User = new UserModel();

export { User };
