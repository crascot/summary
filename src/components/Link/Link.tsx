type LinkType = {
 href: string;
 text: string;
};

export const Link = ({ href, text }: LinkType) => (
 <a href={href} className="link" target="_blank" rel="noreferrer">
  {text}
 </a>
);
