import { changeTeam } from "@/actions/changeTeam";
import { useOptimistic } from "react";
import { useFormState } from "react-dom";

export function useChangeTheme() {
  const [formState, formAction] = useFormState(changeTeam, "all");

  async function selectTeam(formData: FormData) {
    const team = formData.get("team") as string;
    addOptimistic({ team });
    formAction(formData);
  }

  const [optimisticState, addOptimistic] = useOptimistic(
    formState,
    (prevState, { team }: { team: string }) => ({
      ...prevState,
      team,
    })
  );

  return {
    action: selectTeam,
    theme: optimisticState.team ?? "all",
  };
}
