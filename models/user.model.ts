import type { User } from '../types/user';

class UserModel {
  private static instance: UserModel;
  private users: User[] = [];

  private constructor() {
    if (UserModel.instance) {
      return UserModel.instance;
    }

    UserModel.instance = this;
  }

  createUser(
    id: number,
    username: string,
    password: string,
    email: string,
  ): User {
    const user: User = { id, username, password, email };
    this.users.push(user);
    return user;
  }

  getUserById(id: number): User | undefined {
    return this.users.find((user) => user.id === id);
  }

  getAllUsers(): User[] {
    return this.users;
  }
}

export { UserModel };
