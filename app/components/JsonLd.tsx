type JsonLdProps = {
  data: object | readonly object[];
};

/**
 * One JSON-LD script. `<` is escaped so text inside the data can never close the script
 * element early.
 */
export default function JsonLd({ data }: JsonLdProps) {
  const json = JSON.stringify(data).replace(/</g, "\\u003c");
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}
