/*
  Warnings:

  - You are about to drop the `_CommunityToTzadik` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."_CommunityToTzadik" DROP CONSTRAINT "_CommunityToTzadik_A_fkey";

-- DropForeignKey
ALTER TABLE "public"."_CommunityToTzadik" DROP CONSTRAINT "_CommunityToTzadik_B_fkey";

-- AlterTable
ALTER TABLE "public"."Tzadik" ADD COLUMN     "communityId" INTEGER;

-- DropTable
DROP TABLE "public"."_CommunityToTzadik";

-- AddForeignKey
ALTER TABLE "public"."Tzadik" ADD CONSTRAINT "Tzadik_communityId_fkey" FOREIGN KEY ("communityId") REFERENCES "public"."Community"("id") ON DELETE SET NULL ON UPDATE CASCADE;
