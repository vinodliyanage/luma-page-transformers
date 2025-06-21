import Transformer from "./transformer";
import transformers from "./domains";

export default function getTransformer(url: string): Transformer | null {
  if (!URL.canParse(url)) return null;

  const urlObj = new URL(url);

  const TransformerClass = transformers.find((t) => t.prototype.hostname === urlObj.hostname);

  if (!TransformerClass) return null;
  return new TransformerClass();
}
