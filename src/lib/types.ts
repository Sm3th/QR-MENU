/* ============================================================
   SOFRA — Tip tanımları
   ============================================================ */

export type Lang = "tr" | "en";

export type TagId =
  | "veg"
  | "vegan"
  | "spicy"
  | "glutenfree"
  | "nuts"
  | "dairy"
  | "gluten";

export type TagKind = "veg" | "spicy" | "neutral" | "allergen";

export interface TagDef {
  tr: string;
  en: string;
  short: string; // rozet kısaltması: "V", "Vg", "GF"...
  kind: TagKind; // renk sınıfı
}

export interface Category {
  id: string; // "kahvalti" — slug, anchor & filtre anahtarı
  tr: string;
  en: string;
  note_tr?: string;
  note_en?: string;
}

export interface MenuItem {
  id: string; // benzersiz slug, ör. "adana"
  cat: string; // Category.id referansı
  tr: string; // ürün adı (TR)
  en: string; // ürün adı (EN)
  dtr: string; // açıklama (TR)
  den: string; // açıklama (EN)
  price: number; // tam sayı TL
  tags: TagId[];
  featured?: boolean; // "Şefin Önerileri" carousel'ine girer
  popular?: boolean; // "Popüler" rozeti
  chefs?: boolean; // "Şefin Önerisi" rozeti (en yüksek vurgu)
  image?: string; // gerçek görsel URL'i — yoksa yer tutucu
}

export interface Strings {
  brand_tag: string;
  hero_kicker: string;
  hero_title: string;
  hero_sub: string;
  search_ph: string;
  favorites: string;
  favorites_sub: string;
  popular: string;
  chefs: string;
  menu: string;
  all: string;
  no_results: string;
  no_results_sub: string;
  detail_ingredients: string;
  detail_allergen: string;
  add: string;
  added: string;
  currency_note: string;
  footer: string;
  lang: string;
}

/* ---------- Dile duyarlı okuyucular ---------- */
export const itemName = (i: MenuItem, lang: Lang): string =>
  lang === "tr" ? i.tr : i.en;

export const itemDesc = (i: MenuItem, lang: Lang): string =>
  lang === "tr" ? i.dtr : i.den;

export const catName = (c: Category, lang: Lang): string =>
  lang === "tr" ? c.tr : c.en;

export const catNote = (c: Category, lang: Lang): string | undefined =>
  lang === "tr" ? c.note_tr : c.note_en;

export const tagName = (t: TagDef, lang: Lang): string =>
  lang === "tr" ? t.tr : t.en;

/* ---------- Etiket grupları ---------- */
export const DIET_TAGS: TagId[] = ["veg", "vegan", "spicy", "glutenfree"];
export const ALLERGEN_TAGS: TagId[] = ["nuts", "dairy", "gluten"];
