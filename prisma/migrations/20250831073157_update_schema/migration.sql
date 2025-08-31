/*
  Warnings:

  - You are about to drop the column `state` on the `Tzadik` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."Tzadik" DROP COLUMN "state",
ADD COLUMN     "country" TEXT;
