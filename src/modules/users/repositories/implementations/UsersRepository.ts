import { User } from "../../model/User";
import { IUsersRepository, ICreateUserDTO } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private users: User[];

  private static INSTANCE: UsersRepository;

  private constructor() {
    this.users = [];
  }

  public static getInstance(): UsersRepository {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository();
    }

    return UsersRepository.INSTANCE;
  }

  create({ name, email }: ICreateUserDTO): User {
    const user = new User()

   Object.assign(user,{
      name,
      email
    })

    this.users.push(user)
    return user
   
  }

  findById(id: string): User | undefined {
    const userId = this.users.find((userId) => userId.id === id)
    
      return userId   
  }

  findByEmail(email: string): User | undefined {
      const userEmail = this.users.find((userEmail) => userEmail.email === email)
      return userEmail
  }

  turnAdmin(receivedUser: User): User {
    receivedUser.updated_at = new Date();
    receivedUser.admin = true
    
    return receivedUser
  }

  list(): User[] {
    return this.users;
  }
}

export { UsersRepository };
