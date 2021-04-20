import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ShowUserProfileUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    
  const result = this.usersRepository.findById(user_id)
   
    if(!result){
      throw new Error("Mensagem do erro");
    }

   return result 
  }
}

export { ShowUserProfileUseCase };
