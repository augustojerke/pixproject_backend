import { PrismaClient, Usuario } from "@prisma/client";

const prisma = new PrismaClient()

export class UsuarioRepository{

    async Incluir(usuario: Usuario){
    
        await prisma.usuario.create({
            data: usuario
        })

    }
}