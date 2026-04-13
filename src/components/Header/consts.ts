export const TELEGRAM_LINK = "https://t.me/crascot";

export const EMAIL_LINK = "mailto:yarsitdikov@gmail.com";
export const GITHUB_LINK = "https://github.com/crascot";

export const PDF_LINK = (lang: string | undefined) => {
 if (lang === "ru") {
  return `/summary/files/Ситдиков Ярослав JavaScript Developer.pdf`;
 }
 return `/summary/files/Sitdikov Yaroslav JavaScript Developer.pdf`;
};
