import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

  handle(request: Request, response: Response): Response {
   
   try{
    const {user_id} = request.params

    const result = this.showUserProfileUseCase.execute({user_id})
 
    return response.status(201).json(result)
   } catch {
     return response.status(404).json( {error: "mensagem do erro" })
   }
   
  }
}

export { ShowUserProfileController };
