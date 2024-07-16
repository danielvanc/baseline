import { changeTeam } from "@/actions/changeTeam";
import { useOptimistic } from "react";
import { useFormState } from "react-dom";

export function useChangeTheme() {
  const [formState, formAction] = useFormState(changeTeam, null);

  async function selectTeam(formData: FormData) {
    const team = formData.get("team");
    addOptimistic({ team });
    formAction(formData);
  }

  const [optimsticState, addOptimistic] = useOptimistic(formState, (state) => ({
    ...state,
    team: formState?.team || "all",
  }));

  return {
    action: selectTeam,
    theme: optimsticState?.team,
  };
}
