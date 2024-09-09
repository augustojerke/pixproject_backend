import { PrismaClient, PagamentoPix } from "@prisma/client";

const prisma = new PrismaClient()

export class PagamentoPixRepository{

    async Incluir(pagamento: PagamentoPix){
    
        await prisma.pagamentoPix.create({
            data: pagamento
        })
    }
    async Alterar(pagamento: PagamentoPix){
    
        await prisma.pagamentoPix.update({
            where: {
                pix_id: pagamento.pix_id
            },
            data: pagamento
        })
    }
    async Excluir(id: number){
    
        await prisma.pagamentoPix.delete({
            where: {
                pix_id: id
            },
        })

    }
}