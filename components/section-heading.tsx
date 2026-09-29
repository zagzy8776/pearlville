type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
};

export function SectionHeading({ eyebrow, title, description, align = "left", light = false }: SectionHeadingProps) {
  return (
    <div className={`section-heading section-heading-${align}${light ? " section-heading-light" : ""}`}>
      <p className="eyebrow"><span /> {eyebrow}</p>
      <h2>{title.split("\n").map((line, index) => <span key={`${line}-${index}`}>{index > 0 && <br />}{index % 2 === 1 ? <em className="section-heading-emphasis">{line}</em> : line}</span>)}</h2>
      {description && <p className="section-heading-description">{description}</p>}
    </div>
  );
}