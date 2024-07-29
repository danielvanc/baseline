import { changeTeam } from "@/actions/changeTeam";
import { useOptimistic } from "react";
import { useFormState } from "react-dom";

export function useChangeTheme() {
  const [formState, formAction] = useFormState(changeTeam, null);

  async function selectTeam(formData: FormData) {
    const team = formData.get("team") as string;
    addOptimistic({ team });
    formAction(formData);
  }

  const [optimisticState, addOptimistic] = useOptimistic(
    formState,
    (prevState, newState: { team: string }) => ({
      ...prevState,
      team: newState?.team ?? "all",
    })
  );

  return {
    action: selectTeam,
    theme: optimisticState?.team ?? "all",
  };
}
