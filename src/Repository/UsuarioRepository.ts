import { PrismaClient, Usuario } from "@prisma/client";

const prisma = new PrismaClient()

export class UsuarioRepository{

    async Incluir(usuario: Usuario){
    
        await prisma.usuario.create({
            data: usuario
        })
    }
    async Alterar(usuario: Usuario){
    
        await prisma.usuario.update({
            where: {
                usu_id: usuario.usu_id
            },
            data: usuario
        })
    }
    async Excluir(id: number){
    
        await prisma.usuario.delete({
            where: {
                usu_id: id
            },
        })

    }
}