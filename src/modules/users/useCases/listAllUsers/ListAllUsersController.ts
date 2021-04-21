
import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
  
    
  try{
    const {user_id}:any = request.header

   const listAllUsers =  this.listAllUsersUseCase.execute({user_id})
console.log("listAllUsers", listAllUsers)
    return response.status(200).json(listAllUsers)
  } catch (error){
    return response.status(400).json({ error: "mensagem do erro" })
  }
      
  
  }
}

export { ListAllUsersController };
