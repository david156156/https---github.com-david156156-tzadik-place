import prisma from "@/lib/prisma";
import TzadikListClient from "./TzadikListClient";

export default async function Home() {
  const usersRaw = await prisma.tzadik.findMany({
    select: {
      id: true,
      name: true,
      gender: true,
      city: true,
      community: {
        select: { name: true },
      },
    },
  });
  const communities = await prisma.community.findMany();

  const users = usersRaw.map((u) => ({
    ...u,
    community: u.community?.name ?? null,
  }));

  return (
    <div
      dir="rtl"
      className="min-h-screen bg-[#FDFBF7] flex flex-col items-center py-12 px-2"
    >
      <div className="max-w-6xl w-full mx-auto">
        <TzadikListClient users={users} communities={communities} />
      </div>
    </div>
  );
}
