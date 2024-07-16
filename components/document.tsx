"use client";
import React from "react";
import { teams } from "@/config/teams";
import { useChangeTheme } from "@/utils/optimistic";
interface Props {
  children: React.ReactNode;
}

export default function Document({ children }: Props) {
  const { theme, action } = useChangeTheme();
  const showAllTeams = theme;

  const defaultBg =
    "bg-gradient-to-b from-orange-500 via-orange-700 to-orange-300";
  const classNames = !!showAllTeams ? "bg-brand-bg" : defaultBg;

  return (
    <body className={`h-screen ${classNames}`}>
      <header>
        <nav>
          <h1>Baseline</h1>
          <div>
            <form action={action}>
              <select
                name="team"
                onChange={(event) => event?.target?.form?.requestSubmit()}
              >
                <option key={`theme-no-team`} value={"all"}>
                  All teams
                </option>
                {teams.map((team) => (
                  <option key={`theme-${team.abbr}`} value={team.abbr}>
                    {team.name}
                  </option>
                ))}
              </select>
            </form>
          </div>
        </nav>
      </header>
      {children}
    </body>
  );
}
