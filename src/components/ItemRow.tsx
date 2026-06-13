import type { Lang, MenuItem, Strings } from "../lib/types";
import { DIET_TAGS, itemDesc, itemName } from "../lib/types";
import { TL } from "../lib/format";
import { Photo } from "./Photo";
import { Pin } from "./Pin";
import { Tag } from "./Tag";

interface ItemRowProps {
  item: MenuItem;
  lang: Lang;
  t: Strings;
  onOpen: (item: MenuItem) => void;
}

/* Listedeki ürün satırı */
export function ItemRow({ item, lang, t, onOpen }: ItemRowProps) {
  return (
    <button className="row" onClick={() => onOpen(item)}>
      <Photo seed={item.id} label="" src={item.image} className="row__photo" />
      <div className="row__body">
        <div className="row__head">
          <span className="row__name">{itemName(item, lang)}</span>
          <span className="row__dots" />
          <span className="row__price">{TL(item.price)}</span>
        </div>
        <div className="row__desc">{itemDesc(item, lang)}</div>
        <div className="row__tags">
          {item.chefs && <Pin kind="chef">{t.chefs}</Pin>}
          {item.popular && !item.chefs && <Pin kind="pop">{t.popular}</Pin>}
          {item.tags
            .filter((x) => DIET_TAGS.includes(x))
            .map((x) => (
              <Tag key={x} id={x} lang={lang} />
            ))}
        </div>
      </div>
    </button>
  );
}
