export type ContentType = {
 title: string;
 info: InfoType[];
};

export type InfoType = {
 title: string;
 text: string;
 list: string[];
 time?: string;
 achievements?: string[];
};
