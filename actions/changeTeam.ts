"use server";
import { z } from "zod";

const TeamSchema = z.string();

export async function changeTeam(prevState: any, formData: FormData) {
  const team = formData.get("team");
  const parsed = TeamSchema.safeParse(team);
  const returnDefault = !parsed.success || team === "all";

  return {
    team: returnDefault ? null : team,
  };
}
