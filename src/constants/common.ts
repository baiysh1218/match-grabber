import { MatchStatus } from "@/types/types";

export const statusTranslations: Record<string, string> = {
  [MatchStatus.SCHEDULED]: "Запланирован",
  [MatchStatus.ONGOING]: "В эфире",
  [MatchStatus.FINISHED]: "Завершён",
};
