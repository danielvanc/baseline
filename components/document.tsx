"use client";
import { useFormState } from "react-dom";
import { teams } from "../config/teams";
import SelectTeam from "../submissions/selectTeam";
import { changeTeam } from "../actions/changeTeam";

export default function Document({ children }: { children: React.ReactNode }) {
  const defaultBgGradient =
    "bg-gradient-to-b from-orange-500 via-orange-700 to-orange-300";

  const [state, formAction] = useFormState(changeTeam, null);

  const showAllTeams = state?.team;

  // TODO: Optimistically render the correct bg for better UX
  const classNames = !!showAllTeams ? "bg-brand-bg" : defaultBgGradient;

  return (
    <body className={`h-screen ${classNames}`}>
      <header>
        <nav>
          <h1>Baseline</h1>
          <div>
            <SelectTeam teams={teams} formAction={formAction} />
          </div>
        </nav>
      </header>
      {children}
    </body>
  );
}
