import type { User } from '../types/user';

class UserModel {
  private static instance: UserModel;
  private users: User[] = [
    {
      id: 0,
      username: 'Sam',
      password: 'yay',
      email: 'yay',
    },
  ];

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

  getAllUsers(): User[] {
    return this.users;
  }
}

const User = new UserModel();

export { User };
