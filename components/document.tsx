"use client";
import React from "react";
import { teams, teamThemes } from "@/config/teams";
import { useChangeTheme } from "@/utils/optimistic";
interface Props {
  children: React.ReactNode;
}

export default function Document({ children }: Props) {
  const { theme, action } = useChangeTheme();
  const showAllTeams = theme === "all";
  const themeClass = showAllTeams
    ? ""
    : teamThemes[theme as keyof typeof teamThemes];

  return (
    <body className={`h-screen ${themeClass}`}>
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
