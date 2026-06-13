import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import type { MenuItem } from "../lib/types";
import { catName, catNote } from "../lib/types";
import { CATEGORIES, ITEMS } from "../lib/menu";
import { useLang } from "../lib/i18n";
import { FeatureCard } from "./FeatureCard";
import { ItemRow } from "./ItemRow";
import { DetailSheet } from "./DetailSheet";

/* Telefon menü ekranı */
export function MenuScreen() {
  const { lang, t, toggle } = useLang();
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(CATEGORIES[0].id);
  const [selected, setSelected] = useState<MenuItem | null>(null);
  const [added, setAdded] = useState<Set<string>>(() => new Set());

  const scrollRef = useRef<HTMLDivElement | null>(null);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});
  const chipRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const chromeRef = useRef<HTMLDivElement | null>(null);
  const lockSpy = useRef(false);

  const favorites = useMemo(() => ITEMS.filter((i) => i.featured), []);
  const q = query.trim().toLocaleLowerCase("tr");
  const searching = q.length > 0;

  const results = useMemo(() => {
    if (!searching) return [];
    return ITEMS.filter((i) =>
      (i.tr + " " + i.en + " " + i.dtr + " " + i.den).toLocaleLowerCase("tr").includes(q),
    );
  }, [q, searching]);

  const onAdd = (id: string) => {
    setAdded((prev) => {
      const n = new Set(prev);
      if (n.has(id)) n.delete(id);
      else n.add(id);
      return n;
    });
  };

  // Logo / ana ekran — aramayı temizle, en üste dön (mobil + masaüstü)
  const goHome = () => {
    setSelected(null);
    setActive(CATEGORIES[0].id);
    setQuery("");
    // Scrollspy araya girmesin; aramadan menüye dönüşte içerik yeniden
    // render olduktan sonra kaydır (bir sonraki frame)
    lockSpy.current = true;
    requestAnimationFrame(() => {
      const sc = scrollRef.current;
      sc?.scrollTo({ top: 0, behavior: "smooth" });
      setTimeout(() => {
        lockSpy.current = false;
      }, 700);
    });
  };

  // Kategoriye kaydır
  const goCat = (id: string) => {
    setActive(id);
    const el = sectionRefs.current[id];
    const sc = scrollRef.current;
    if (el && sc) {
      lockSpy.current = true;
      const chromeH = chromeRef.current ? chromeRef.current.offsetHeight : 0;
      const top = el.offsetTop - chromeH - 8;
      sc.scrollTo({ top, behavior: "smooth" });
      setTimeout(() => {
        lockSpy.current = false;
      }, 650);
    }
  };

  // Aktif çipi yatayda ortala — yalnızca .chips çubuğunu kaydırır,
  // dikey kaba (.screen) dokunmaz (logo→üst kaydırmasını bozmasın diye)
  useEffect(() => {
    const chip = chipRefs.current[active];
    const bar = chip?.parentElement;
    if (chip && bar) {
      const left = chip.offsetLeft - bar.clientWidth / 2 + chip.clientWidth / 2;
      bar.scrollTo({ left, behavior: "smooth" });
    }
  }, [active]);

  // Scrollspy
  useEffect(() => {
    const sc = scrollRef.current;
    if (!sc) return;
    const onScroll = () => {
      if (lockSpy.current || searching) return;
      const chromeH = chromeRef.current ? chromeRef.current.offsetHeight : 0;
      const probe = sc.scrollTop + chromeH + 24;
      let current = CATEGORIES[0].id;
      for (const c of CATEGORIES) {
        const el = sectionRefs.current[c.id];
        if (el && el.offsetTop <= probe) current = c.id;
      }
      setActive((prev) => (prev === current ? prev : current));
    };
    sc.addEventListener("scroll", onScroll, { passive: true });
    return () => sc.removeEventListener("scroll", onScroll);
  }, [searching]);

  return (
    <div className="screen" ref={scrollRef}>
      {/* Sabit üst başlık (sticky) */}
      <div className="chrome" ref={chromeRef}>
        <div className="chrome__safe" />
        <div className="chrome__brand">
          <button
            className="brand"
            onClick={goHome}
            aria-label={lang === "tr" ? "Ana ekrana dön" : "Back to home"}
          >
            <span className="brand__mark">SOFRA</span>
            <span className="brand__tag">{t.brand_tag}</span>
          </button>
          <button className="lang" onClick={toggle} aria-label="Dil / Language">
            <span className="lang__globe">
              <svg width="15" height="15" viewBox="0 0 16 16">
                <circle cx="8" cy="8" r="6.4" stroke="currentColor" strokeWidth="1.2" fill="none" />
                <path
                  d="M1.6 8h12.8M8 1.6c2 2 2 10.8 0 12.8M8 1.6c-2 2-2 10.8 0 12.8"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  fill="none"
                />
              </svg>
            </span>
            {t.lang}
          </button>
        </div>
        <div className="search">
          <svg className="search__icon" width="17" height="17" viewBox="0 0 18 18">
            <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.6" fill="none" />
            <path d="M12.5 12.5L16 16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
          <input
            className="search__input"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t.search_ph}
            aria-label={t.search_ph}
          />
          {query && (
            <button
              className="search__clear"
              onClick={() => setQuery("")}
              aria-label={lang === "tr" ? "Temizle" : "Clear"}
            >
              <svg width="14" height="14" viewBox="0 0 16 16">
                <circle cx="8" cy="8" r="8" fill="currentColor" opacity="0.18" />
                <path d="M5.5 5.5l5 5M10.5 5.5l-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          )}
        </div>
        {!searching && (
          <div className="chips">
            {CATEGORIES.map((c) => (
              <button
                key={c.id}
                ref={(el) => {
                  chipRefs.current[c.id] = el;
                }}
                className={"chip" + (active === c.id ? " is-active" : "")}
                onClick={() => goCat(c.id)}
              >
                {catName(c, lang)}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Gövde */}
      {searching ? (
        <div className="body">
          <div className="results-head">
            {results.length} {lang === "tr" ? "sonuç" : "results"}
          </div>
          {results.length === 0 ? (
            <div className="empty">
              <div className="empty__title">{t.no_results}</div>
              <div className="empty__sub">{t.no_results_sub}</div>
            </div>
          ) : (
            <div className="list">
              {results.map((i) => (
                <ItemRow key={i.id} item={i} lang={lang} t={t} onOpen={setSelected} />
              ))}
            </div>
          )}
        </div>
      ) : (
        <div className="body">
          {/* Favoriler */}
          <section className="fav">
            <div className="sec-head sec-head--fav">
              <div>
                <div className="sec-head__kicker">{t.favorites}</div>
                <div className="sec-head__sub">{t.favorites_sub}</div>
              </div>
            </div>
            <div className="fav__scroll">
              {favorites.map((i) => (
                <FeatureCard key={i.id} item={i} lang={lang} t={t} onOpen={setSelected} />
              ))}
            </div>
          </section>

          {/* Kategoriler */}
          {CATEGORIES.map((c) => {
            const items = ITEMS.filter((i) => i.cat === c.id);
            const note = catNote(c, lang);
            return (
              <section
                key={c.id}
                className="cat"
                ref={(el) => {
                  sectionRefs.current[c.id] = el;
                }}
              >
                <div className="sec-head">
                  <h2 className="sec-head__title">{catName(c, lang)}</h2>
                  {note && <span className="sec-head__note">{note}</span>}
                </div>
                <div className="list">
                  {items.map((i) => (
                    <ItemRow key={i.id} item={i} lang={lang} t={t} onOpen={setSelected} />
                  ))}
                </div>
              </section>
            );
          })}

          <div className="foot">
            <div className="foot__note">{t.currency_note}</div>
            <div className="foot__brand">{t.footer}</div>

            <div className="foot__social">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.7" />
                  <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.7" />
                  <circle cx="17.2" cy="6.8" r="1.2" fill="currentColor" />
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M14.5 8.5h2V5.7c-.35-.05-1.2-.15-2.05-.15-2.03 0-3.45 1.24-3.45 3.52V11H8.5v3h2.5v7h3v-7h2.3l.4-3H14V9.3c0-.5.2-.8.95-.8z"
                    fill="currentColor"
                  />
                </svg>
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M3 3l7.5 9.8L3.4 21H6l5.4-5.9L15.9 21H21l-7.9-10.3L20.6 3H18l-5 5.5L9 3H3z"
                    fill="currentColor"
                  />
                </svg>
              </a>
              <a
                href="https://wa.me"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 3.5a8.5 8.5 0 00-7.3 12.8L3.5 20.5l4.4-1.1A8.5 8.5 0 1012 3.5z"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.2 8.3c-.2-.45-.4-.45-.6-.45h-.5c-.18 0-.47.07-.7.35-.25.28-.92.9-.92 2.2 0 1.3.95 2.55 1.08 2.73.13.18 1.85 2.96 4.6 4.03 2.28.9 2.74.72 3.24.67.5-.05 1.6-.65 1.83-1.28.22-.63.22-1.16.16-1.28-.07-.1-.25-.17-.52-.3-.28-.14-1.6-.8-1.85-.88-.25-.1-.43-.14-.6.13-.18.28-.7.88-.85 1.06-.16.18-.3.2-.58.07-.28-.14-1.16-.43-2.2-1.36-.82-.72-1.36-1.62-1.52-1.9-.16-.27-.02-.42.12-.56.13-.13.28-.32.4-.48.14-.16.18-.28.28-.46.1-.18.05-.35-.02-.49-.07-.14-.6-1.48-.83-2z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>

            <Link className="foot__link" to="/poster">
              {lang === "tr" ? "QR Poster" : "QR Poster"}
            </Link>
          </div>
        </div>
      )}

      {selected && (
        <DetailSheet
          item={selected}
          lang={lang}
          t={t}
          onClose={() => setSelected(null)}
          added={added}
          onAdd={onAdd}
        />
      )}
    </div>
  );
}
