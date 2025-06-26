import transformers from "./domains";
import Transformer from "./transformer";

export default function getTransformer(url: string): Transformer | null {
  if (!URL.canParse(url)) return null;

  const urlObj = new URL(url);

  const TransformerClass = transformers.find((t) => {
    return t.prototype.hostname() === urlObj.hostname;
  });

  if (!TransformerClass) return null;
  return new TransformerClass() as Transformer;
}
