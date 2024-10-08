import { Usuario } from "@prisma/client";
import { Request, Response } from "express";
import { UsuarioService } from "../Service/UsuarioService";

const service = new UsuarioService()

export class UsuarioController{

    async Incluir(req: Request, res: Response){
        const usuario: Usuario = req.body

        try{
            await service.Incluir(usuario);
            res.status(201).json()
        }
        catch(e: any){
            res.status(500).json({ message: e.message })
        }
    }

    async Alterar(req: Request, res: Response){
        const usuario: Usuario = req.body

        try{
            await service.Alterar(usuario);
            res.status(201).json()
        }
        catch(e: any){
            res.status(500).json({ message: e.message })
        }
    }

    async Excluir(req: Request, res: Response){
        const id = req.params.usu_id

        try{
            await service.Excluir(+id);
            res.status(201).json()
        }
        catch(e: any){
            res.status(500).json({ message: e.message })
        }
    }
}