import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
   const userId = this.usersRepository.findById(user_id)

   const data = this.usersRepository.turnAdmin(userId)

   return data

  }
}

export { TurnUserAdminUseCase };
