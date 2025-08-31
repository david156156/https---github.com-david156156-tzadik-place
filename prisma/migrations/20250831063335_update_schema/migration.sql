/*
  Warnings:

  - The values [Male,Female] on the enum `Gender` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "public"."Gender_new" AS ENUM ('male', 'female');
ALTER TABLE "public"."Tzadik" ALTER COLUMN "gender" DROP DEFAULT;
ALTER TABLE "public"."Tzadik" ALTER COLUMN "gender" TYPE "public"."Gender_new" USING ("gender"::text::"public"."Gender_new");
ALTER TYPE "public"."Gender" RENAME TO "Gender_old";
ALTER TYPE "public"."Gender_new" RENAME TO "Gender";
DROP TYPE "public"."Gender_old";
ALTER TABLE "public"."Tzadik" ALTER COLUMN "gender" SET DEFAULT 'male';
COMMIT;

-- AlterTable
ALTER TABLE "public"."Tzadik" ALTER COLUMN "gender" SET DEFAULT 'male';
