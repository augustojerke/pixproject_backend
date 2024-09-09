/*
  Warnings:

  - Added the required column `usu_email` to the `Usuario` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Usuario" ADD COLUMN     "usu_email" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "PagamentoPix" (
    "pix_id" SERIAL NOT NULL,
    "pix_nome" TEXT NOT NULL,
    "pix_valorTotal" DECIMAL(65,30) NOT NULL,
    "pix_numPart" INTEGER NOT NULL,
    "pix_chave" TEXT NOT NULL,
    "pix_dataCriacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PagamentoPix_pkey" PRIMARY KEY ("pix_id")
);
