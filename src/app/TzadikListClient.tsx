"use client";
import { Search } from "lucide-react";
import React, { useState, useMemo } from "react";

interface Community {
  id: number;
  name: string;
}

interface User {
  id: number;
  name: string;
  gender?: string | null;
  birthCity?: string | null;
  deathCity?: string | null;
  city?: string | null;
  community?: string | null;
}

function groupByFirstLetter(users: User[]) {
  const grouped: Record<string, User[]> = {};
  users.forEach((user) => {
    const letter = user.name?.charAt(0) || "א";
    if (!grouped[letter]) grouped[letter] = [];
    grouped[letter].push(user);
  });
  return grouped;
}

export default function TzadikListClient({
  users,
  communities,
}: {
  users: User[];
  communities: Community[];
}) {
  const [search, setSearch] = useState("");
  const [city, setCity] = useState("");
  const [community, setCommunity] = useState("");
  const [showAdvanced, setShowAdvanced] = useState(false);

  const cities = useMemo(() => {
    const allCities = users
      .map((u) => u.city)
      .filter((c): c is string => !!c && c.trim() !== "");
    return Array.from(new Set(allCities)).sort((a, b) =>
      a.localeCompare(b, "he")
    );
  }, [users]);

  const communityNames = useMemo(() => {
    return communities.map((c) => c.name);
  }, [communities]);

  const filtered = useMemo(
    () =>
      users.filter((u) => {
        const matchesName =
          !search || u.name?.toLowerCase().includes(search.toLowerCase());
        const matchesCity = !city || u.city === city;
        const matchesCommunity = !community || u.community === community;
        return matchesName && matchesCity && matchesCommunity;
      }),
    [users, search, city, community]
  );

  const groupedUsers = useMemo(() => groupByFirstLetter(filtered), [filtered]);

  function getTitle(user: User) {
    if (user.gender === "female" && user.community) {
      const comm = user.community.trim();
      if (comm.includes("תימן")) return "מרת";
      else return "הרבנית";
    }
    if (user.gender === "male" && user.community) {
      const comm = user.community.trim();
      if (comm.includes("תימן")) return "מורי";
      else return "רבי";
    }
    return null;
  }

  return (
    <>
      {/* כותרת עליונה */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-3 bg-white/90 backdrop-blur-sm px-8 py-4 rounded-2xl shadow-lg border border-amber-100 mb-6">
          <svg
            className="w-8 h-8 text-amber-700"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 17.75l6.16 3.73-1.64-7.03L21.5 9.24l-7.19-.61L12 2 9.69 8.63 2.5 9.24l5.98 5.21-1.64 7.03z"
            />
          </svg>
          <h1 className="text-4xl font-bold text-amber-900 font-[family-name:var(--font-geist-sans)] text-center">
            הבלוג של הצדיקים
          </h1>
        </div>
        <p className="text-lg text-amber-800 max-w-2xl mx-auto">
          מדריך מפורט לקברי צדיקים ומקומות קדושים ברחבי העולם
        </p>
      </div>

      {/* חיפוש וכפתור הוספה */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-amber-100 p-8 mb-8">
        <div className="flex flex-col gap-4 flex-1 w-full">
          <div className="relative flex-1 max-w-xs w-full">
            <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-amber-500 w-5 h-5" />
            <input
              placeholder="חיפוש צדיק..."
              className="pr-12 pl-4 py-3 text-right bg-amber-50 border border-amber-200 rounded-xl w-full text-gray-800 placeholder-gray-500"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <button
            type="button"
            className="text-amber-700 underline mt-2 text-sm self-start"
            onClick={() => setShowAdvanced((v) => !v)}
          >
            {showAdvanced ? "הסתר חיפוש מורחב" : "הרחב חיפוש"}
          </button>
          {showAdvanced && (
            <div className="flex flex-col md:flex-row gap-4 mt-2">
              <div className="relative flex-1 max-w-xs w-full">
                <select
                  className="pr-4 pl-4 py-3 text-right bg-amber-50 border border-amber-200 rounded-xl w-full text-gray-800"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                >
                  <option value="">כל הערים</option>
                  {cities.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>
              <div className="relative flex-1 max-w-xs w-full">
                <select
                  className="pr-4 pl-4 py-3 text-right bg-amber-50 border border-amber-200 rounded-xl w-full text-gray-800"
                  value={community}
                  onChange={(e) => setCommunity(e.target.value)}
                >
                  <option value="">בחר קהילה</option>
                  {communities.map((c) => (
                    <option key={c.id} value={c.name}>
                      {c.name}
                    </option>
                  ))}
                </select>
              </div>
              <button
                type="button"
                className="text-amber-700 underline mt-2 text-sm self-start"
                onClick={() => {
                  setSearch("");
                  setCity("");
                  setCommunity("");
                }}
              >
                איפוס חיפוש
              </button>
            </div>
          )}
        </div>
        <a
          href="/add-tzadik"
          className="bg-gradient-to-r from-amber-700 to-amber-800 hover:from-amber-800 hover:to-amber-900 text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
        >
          <span className="text-xl font-bold">+</span>
          הוספת צדיק חדש
        </a>
      </div>

      {/* רשימת צדיקים מקובצת לפי אות */}
      {Object.keys(groupedUsers)
        .sort()
        .map((letter) => (
          <div key={letter} className="mb-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-amber-700 to-amber-800 text-white rounded-xl flex items-center justify-center text-xl font-bold shadow-lg">
                {letter}
              </div>
              <div className="h-px bg-gradient-to-l from-amber-200 to-transparent flex-1"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {groupedUsers[letter].map((user) => (
                <a
                  key={user.id}
                  href={`/${user.id}`}
                  className="group cursor-pointer bg-white/90 backdrop-blur-sm hover:bg-white hover:shadow-xl transition-all duration-300 border border-amber-100 hover:border-amber-300 rounded-xl block"
                >
                  <div className="p-6 flex items-start gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-amber-100 to-orange-100 rounded-xl flex items-center justify-center group-hover:from-amber-200 group-hover:to-orange-200 transition-all duration-300">
                      <svg
                        className="w-7 h-7 text-amber-700"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4 19.5V8.5a2 2 0 012-2h12a2 2 0 012 2v11M9 12h6"
                        />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-amber-900 text-lg mb-1 group-hover:text-amber-700 transition-colors">
                        {getTitle(user)} {user.name}{" "}
                        {user.gender === "male" ? 'זצ"ל' : 'ע"ה'}
                      </h3>
                      {(user.birthCity || user.deathCity) && (
                        <div className="flex items-center gap-2 text-amber-800 text-sm">
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
                            />
                            <circle cx="12" cy="9" r="2.5" />
                          </svg>
                          <span>
                            {[user.deathCity, user.birthCity]
                              .filter(Boolean)
                              .join(" / ")}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        ))}
    </>
  );
}
