
import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
  
    
  try{
   const user_id = request.headers.user_id as string

   const listAllUsers =  this.listAllUsersUseCase.execute({user_id})
    return response.status(200).json(listAllUsers)
  } catch (error){
    return response.status(400).json({ error: "mensagem do erro" })
  }
      
  
  }
}

export { ListAllUsersController };
