import { PeriodType } from "../types/contentType";

export const PRESENT = "present";

// A fully blank period is a template that has not been filled in yet.
export const isFilledPeriod = ({ start, end }: PeriodType): boolean =>
 start !== "" || end !== "";

const DATE_FORMAT = /^(\d{4})-(0[1-9]|1[0-2])$/;

// Absolute month number, so dates can be compared and subtracted.
const parseMonth = (value: string): number => {
 const match = DATE_FORMAT.exec(value);

 if (!match) {
  throw new Error(`Invalid date: "${value}", expected YYYY-MM`);
 }

 return Number(match[1]) * 12 + Number(match[2]) - 1;
};

export const parsePeriod = ({ start, end }: PeriodType, now: Date) => {
 const startMonth = parseMonth(start);
 const endMonth =
  end === PRESENT ? now.getFullYear() * 12 + now.getMonth() : parseMonth(end);

 if (endMonth < startMonth) {
  throw new Error(`Invalid period: ${start} - ${end}`);
 }

 return { start: startMonth, end: endMonth };
};

const formatMonth = (value: string, locale?: string): string => {
 const month = parseMonth(value);

 return new Intl.DateTimeFormat(locale, {
  month: "long",
  year: "numeric",
  timeZone: "UTC",
 }).format(Date.UTC(Math.floor(month / 12), month % 12));
};

export const formatPeriod = (
 { start, end }: PeriodType,
 presentLabel: string,
 locale?: string,
): string => {
 const endLabel = end === PRESENT ? presentLabel : formatMonth(end, locale);

 return `${formatMonth(start, locale)} - ${endLabel}`;
};
