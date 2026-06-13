import type { Lang, MenuItem, Strings } from "../lib/types";
import { itemDesc, itemName } from "../lib/types";
import { TL } from "../lib/format";
import { Photo } from "./Photo";
import { Pin } from "./Pin";

interface FeatureCardProps {
  item: MenuItem;
  lang: Lang;
  t: Strings;
  onOpen: (item: MenuItem) => void;
}

/* Carousel'deki büyük favori kartı */
export function FeatureCard({ item, lang, t, onOpen }: FeatureCardProps) {
  return (
    <button className="feat" onClick={() => onOpen(item)}>
      <Photo seed={item.id} label={itemName(item, lang)} src={item.image} className="feat__photo" />
      <div className="feat__body">
        <div className="feat__top">
          {item.chefs && <Pin kind="chef">{t.chefs}</Pin>}
          {!item.chefs && item.popular && <Pin kind="pop">{t.popular}</Pin>}
        </div>
        <div className="feat__name">{itemName(item, lang)}</div>
        <div className="feat__desc">{itemDesc(item, lang)}</div>
        <div className="feat__foot">
          <span className="feat__price">{TL(item.price)}</span>
          <span className="feat__cta">
            {lang === "tr" ? "Detay" : "Details"}
            <svg width="14" height="14" viewBox="0 0 14 14">
              <path
                d="M3 7h8M7 3l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>
      </div>
    </button>
  );
}
