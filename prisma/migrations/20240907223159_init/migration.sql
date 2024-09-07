-- CreateTable
CREATE TABLE "Usuario" (
    "usu_id" SERIAL NOT NULL,
    "usu_nome" TEXT NOT NULL,
    "usu_senha" TEXT NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("usu_id")
);
