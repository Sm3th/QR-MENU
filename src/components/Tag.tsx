import type { Lang, TagId } from "../lib/types";
import { tagName } from "../lib/types";
import { TAGS } from "../lib/menu";

interface TagProps {
  id: TagId;
  lang: Lang;
  mini?: boolean;
}

/* Diyet / alerjen etiket rozeti */
export function Tag({ id, lang, mini }: TagProps) {
  const t = TAGS[id];
  if (!t) return null;
  const cls = "tag tag--" + t.kind + (mini ? " tag--mini" : "");
  const label = tagName(t, lang);
  return (
    <span className={cls} title={label}>
      <span className="tag__dot" />
      {mini ? t.short : label}
    </span>
  );
}
