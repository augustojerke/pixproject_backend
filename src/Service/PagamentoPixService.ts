import { PagamentoPix } from "@prisma/client";
import { PagamentoPixRepository } from "../Repository/PagamentoPixRepository";

const repository = new PagamentoPixRepository();

export class PagamentoPixService{

    async Incluir(pagamento: PagamentoPix){
        await repository.Incluir(pagamento);
    }

    async Alterar(pagamento: PagamentoPix){
        await repository.Alterar(pagamento);
    }

    async Excluir(id: number){
        await repository.Excluir(id);
    }

}