/*
  Warnings:

  - You are about to drop the column `latitude` on the `Tzadik` table. All the data in the column will be lost.
  - You are about to drop the column `longitude` on the `Tzadik` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."Tzadik" DROP COLUMN "latitude",
DROP COLUMN "longitude";
