import { PagamentoPix } from "@prisma/client";
import { Request, Response } from "express";
import { PagamentoPixService } from "../Service/PagamentoPixService";

const service = new PagamentoPixService()

export class PagamentoPixController{

    async Incluir(req: Request, res: Response){
        const pagamento: PagamentoPix = req.body

        try{
            await service.Incluir(pagamento);
            res.status(201).json()
        }
        catch(e: any){
            res.status(500).json({ message: e.message })
        }
    }

    async Alterar(req: Request, res: Response){
        const pagamento: PagamentoPix = req.body

        try{
            await service.Alterar(pagamento);
            res.status(201).json()
        }
        catch(e: any){
            res.status(500).json({ message: e.message })
        }
    }

    async Excluir(req: Request, res: Response){
        const id = req.params.pix_id

        try{
            await service.Excluir(+id);
            res.status(201).json()
        }
        catch(e: any){
            res.status(500).json({ message: e.message })
        }
    }
}