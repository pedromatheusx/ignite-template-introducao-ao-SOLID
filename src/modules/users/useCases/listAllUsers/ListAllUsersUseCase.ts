import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string ;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
   
   const data = this.usersRepository.findById(user_id)

    if(data.admin === false){
      throw new Error("Mensagem do erro");
    }
    
   const users = this.usersRepository.list()

   console.log('Users', users)

    return users
  }
}

export { ListAllUsersUseCase };
