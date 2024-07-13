"use server";

export async function changeTeam(prevState: any, formData: FormData) {
  const team = formData.get("team");

  // TODO: Add Zod error handling

  if (team === "all") {
    return {
      team: null,
    };
  }

  return {
    team,
  };
}
