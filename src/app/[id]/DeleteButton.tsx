"use client";
import { useTransition } from "react";

export default function DeleteButton({
  onDelete,
}: {
  onDelete: () => Promise<void>;
}) {
  const [pending, startTransition] = useTransition();

  return (
    <button
      type="button"
      className="px-3 py-1 rounded-full bg-red-500 text-white font-semibold shadow hover:bg-red-600 transition"
      title="מחק"
      disabled={pending}
      onClick={() => {
        if (window.confirm("האם אתה בטוח שברצונך למחוק?")) {
          startTransition(onDelete);
        }
      }}
    >
      {pending ? "מוחק..." : "מחיקה"}
    </button>
  );
}
