"use client";

import React, { FormHTMLAttributes } from "react";

interface Props {
  teams: Array<Team>;
  formAction: ((formData: FormData) => void) | undefined;
}

export default function SelectTeam({ teams, formAction }: Props) {
  const ref = React.useRef<HTMLSelectElement>(null);
  const selectedTeam = ref.current?.value;

  return (
    <form action={formAction}>
      <select
        name="team"
        onChange={(event) => event?.target?.form?.requestSubmit()}
        ref={ref}
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
  );
}
