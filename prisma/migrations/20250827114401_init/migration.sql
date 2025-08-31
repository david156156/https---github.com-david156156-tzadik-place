-- CreateTable
CREATE TABLE "public"."Community" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Community_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Tzadik" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "communityId" INTEGER,
    "birthDate" TIMESTAMP(3),
    "deathDate" TIMESTAMP(3),
    "birthCity" TEXT,
    "deathCity" TEXT,
    "address" TEXT,
    "mainImage" TEXT,
    "images" TEXT[],
    "biography" TEXT,
    "books" TEXT[],
    "latitude" DOUBLE PRECISION,
    "longitude" DOUBLE PRECISION,

    CONSTRAINT "Tzadik_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."Tzadik" ADD CONSTRAINT "Tzadik_communityId_fkey" FOREIGN KEY ("communityId") REFERENCES "public"."Community"("id") ON DELETE SET NULL ON UPDATE CASCADE;
