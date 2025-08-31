/*
  Warnings:

  - You are about to drop the column `communityId` on the `Tzadik` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."Tzadik" DROP CONSTRAINT "Tzadik_communityId_fkey";

-- AlterTable
ALTER TABLE "public"."Tzadik" DROP COLUMN "communityId";

-- CreateTable
CREATE TABLE "public"."_CommunityToTzadik" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_CommunityToTzadik_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_CommunityToTzadik_B_index" ON "public"."_CommunityToTzadik"("B");

-- AddForeignKey
ALTER TABLE "public"."_CommunityToTzadik" ADD CONSTRAINT "_CommunityToTzadik_A_fkey" FOREIGN KEY ("A") REFERENCES "public"."Community"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_CommunityToTzadik" ADD CONSTRAINT "_CommunityToTzadik_B_fkey" FOREIGN KEY ("B") REFERENCES "public"."Tzadik"("id") ON DELETE CASCADE ON UPDATE CASCADE;
