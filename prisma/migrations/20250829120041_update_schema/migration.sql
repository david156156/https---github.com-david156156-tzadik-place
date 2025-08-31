/*
  Warnings:

  - You are about to drop the column `address` on the `Tzadik` table. All the data in the column will be lost.
  - You are about to drop the column `birthCity` on the `Tzadik` table. All the data in the column will be lost.
  - You are about to drop the column `deathCity` on the `Tzadik` table. All the data in the column will be lost.
  - The `biography` column on the `Tzadik` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "public"."Gender" AS ENUM ('Male', 'Female');

-- AlterTable
ALTER TABLE "public"."Tzadik" DROP COLUMN "address",
DROP COLUMN "birthCity",
DROP COLUMN "deathCity",
ADD COLUMN     "article" TEXT[],
ADD COLUMN     "city" TEXT,
ADD COLUMN     "descriptionPlace" TEXT,
ADD COLUMN     "gender" "public"."Gender" NOT NULL DEFAULT 'Male',
ADD COLUMN     "location" DOUBLE PRECISION[],
ADD COLUMN     "state" TEXT,
DROP COLUMN "biography",
ADD COLUMN     "biography" TEXT[];
