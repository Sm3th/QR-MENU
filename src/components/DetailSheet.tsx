import { useCallback, useEffect, useState } from "react";
import type { Lang, MenuItem, Strings } from "../lib/types";
import { ALLERGEN_TAGS, DIET_TAGS, itemDesc, itemName } from "../lib/types";
import { TL } from "../lib/format";
import { Photo } from "./Photo";
import { Pin } from "./Pin";
import { Tag } from "./Tag";

interface DetailSheetProps {
  item: MenuItem;
  lang: Lang;
  t: Strings;
  onClose: () => void;
  added: Set<string>;
  onAdd: (id: string) => void;
}

/* Detay alt-sayfası (bottom sheet) */
export function DetailSheet({ item, lang, t, onClose, added, onAdd }: DetailSheetProps) {
  const [closing, setClosing] = useState(false);

  const close = useCallback(() => {
    setClosing(true);
    setTimeout(onClose, 260);
  }, [onClose]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [close]);

  const allergens = item.tags.filter((x) => ALLERGEN_TAGS.includes(x));
  const diet = item.tags.filter((x) => DIET_TAGS.includes(x));
  const isAdded = added.has(item.id);

  return (
    <div className={"sheet-scrim" + (closing ? " is-closing" : "")} onClick={close}>
      <div
        className={"sheet" + (closing ? " is-closing" : "")}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={itemName(item, lang)}
      >
        <button className="sheet__close" onClick={close} aria-label={lang === "tr" ? "Kapat" : "Close"}>
          <svg width="16" height="16" viewBox="0 0 16 16">
            <path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
        <Photo seed={item.id} label={itemName(item, lang)} src={item.image} className="sheet__photo" />
        <div className="sheet__grip" />
        <div className="sheet__body">
          <div className="sheet__pins">
            {item.chefs && <Pin kind="chef">{t.chefs}</Pin>}
            {item.popular && <Pin kind="pop">{t.popular}</Pin>}
          </div>
          <h2 className="sheet__name">{itemName(item, lang)}</h2>
          <div className="sheet__price">{TL(item.price)}</div>
          <p className="sheet__desc">{itemDesc(item, lang)}</p>

          {diet.length > 0 && (
            <div className="sheet__sec">
              <div className="sheet__sec-h">{t.detail_ingredients}</div>
              <div className="sheet__tags">
                {diet.map((x) => (
                  <Tag key={x} id={x} lang={lang} />
                ))}
              </div>
            </div>
          )}

          {allergens.length > 0 && (
            <div className="sheet__sec">
              <div className="sheet__sec-h">{t.detail_allergen}</div>
              <div className="sheet__tags">
                {allergens.map((x) => (
                  <Tag key={x} id={x} lang={lang} />
                ))}
              </div>
            </div>
          )}

          <button
            className={"sheet__add" + (isAdded ? " is-added" : "")}
            onClick={() => onAdd(item.id)}
          >
            {isAdded ? (
              <>
                <svg width="18" height="18" viewBox="0 0 18 18">
                  <path
                    d="M3 9l4 4 8-9"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {t.added}
              </>
            ) : (
              <>
                <svg width="18" height="18" viewBox="0 0 18 18">
                  <path d="M9 4v10M4 9h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
                {t.add} · {TL(item.price)}
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
