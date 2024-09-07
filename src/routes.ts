import { Router, Request, Response } from "express";
import { UsuarioController } from "./Controller/UsuarioController";

const usuarioController = new UsuarioController();

const router = Router()

//Usuario
router.post("/usuario", usuarioController.Incluir)
router.put("/usuario", usuarioController.Alterar)
router.delete("/usuario/:id", usuarioController.Excluir)

export {router};