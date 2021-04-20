import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {
    const {user_id} = request.params

    const data = this.turnUserAdminUseCase.execute({user_id})

    if(!data){
      return response.status(404).json({ error: "mensagem do erro" })
    }

    return response.status(201).send()
  }
}

export { TurnUserAdminController };
