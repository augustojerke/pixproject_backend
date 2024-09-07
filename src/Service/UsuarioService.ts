import { Usuario } from "@prisma/client";
import { UsuarioRepository } from "../Repository/UsuarioRepository";

const repository = new UsuarioRepository();

export class UsuarioService{

    async Incluir(usuario: Usuario){
        await repository.Incluir(usuario);
    }

    async Alterar(){
        
    }

    async Excluir(){
        
    }

}