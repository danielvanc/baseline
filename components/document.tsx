"use client";
import { useFormState } from "react-dom";
import { teams } from "@/config/teams";
import { changeTeam } from "@/actions/changeTeam";
import React, { useOptimistic } from "react";

export default function Document({ children }: { children: React.ReactNode }) {
  const defaultBgGradient =
    "bg-gradient-to-b from-orange-500 via-orange-700 to-orange-300";

  const [formState, formAction] = useFormState(changeTeam, null);

  async function selectTeam(formData: FormData) {
    const team = formData.get("team");
    addOptimistic({ team });
    await formAction(formData);
  }

  const [optimisticState, addOptimistic] = useOptimistic(
    formState,
    (state, newState) => ({
      ...state,
      team: formState?.team || "all",
    })
  );

  const showAllTeams = optimisticState?.team;

  const classNames = !!showAllTeams ? "bg-brand-bg" : defaultBgGradient;

  return (
    <body className={`h-screen ${classNames}`}>
      <header>
        <nav>
          <h1>Baseline</h1>
          <div>
            <form action={selectTeam}>
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
