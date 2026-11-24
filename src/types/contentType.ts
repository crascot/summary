export type SpecialtyContent = {
 /** File name in public/files, the PDF link is hidden without it */
 pdf?: string;
 head: { title: string; description: string };
 aboutMe: { title: string; text: string };
 content: { skills: ContentType; experience: ContentType };
};

export type ContentType = {
 title: string;
 info: InfoType[];
};

export type PeriodType = {
 /** YYYY-MM */
 start: string;
 /** YYYY-MM or "present" */
 end: string;
};

export type InfoType = {
 title: string;
 text?: string;
 list: string[];
 time?: PeriodType;
 achievements?: string[];
};
