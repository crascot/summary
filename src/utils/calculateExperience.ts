import { InfoType } from "../types/contentType";
import { isFilledPeriod, parsePeriod } from "./period";

export const calculateExperience = (
 experiences: readonly Pick<InfoType, "time">[],
 now = new Date(),
): string => {
 const periods = experiences
  .flatMap(({ time }) =>
   time && isFilledPeriod(time) ? [parsePeriod(time, now)] : [],
  )
  .sort((a, b) => a.start - b.start);

 let totalMonths = 0;
 let coveredUntil = -Infinity;

 for (const { start, end } of periods) {
  totalMonths += Math.max(0, end - Math.max(start, coveredUntil));
  coveredUntil = Math.max(coveredUntil, end);
 }

 const years = Math.floor(totalMonths / 12);
 const months = totalMonths % 12;

 return `${years}${months >= 3 ? "+" : ""}`;
};
