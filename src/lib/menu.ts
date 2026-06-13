/* ============================================================
   SOFRA — Türk Mutfağı · Menü verisi (TR + EN)
   ============================================================ */
import type { Category, MenuItem, TagDef, TagId } from "./types";

/* Etiket sözlüğü — id, TR/EN ad, renk anahtarı, kısa rozet */
export const TAGS: Record<TagId, TagDef> = {
  veg: { tr: "Vejetaryen", en: "Vegetarian", short: "V", kind: "veg" },
  vegan: { tr: "Vegan", en: "Vegan", short: "Vg", kind: "veg" },
  spicy: { tr: "Acı", en: "Spicy", short: "A", kind: "spicy" },
  glutenfree: { tr: "Glütensiz", en: "Gluten-free", short: "GF", kind: "neutral" },
  nuts: { tr: "Fındık/Fıstık", en: "Contains nuts", short: "N", kind: "allergen" },
  dairy: { tr: "Süt ürünü", en: "Contains dairy", short: "S", kind: "allergen" },
  gluten: { tr: "Glüten", en: "Contains gluten", short: "G", kind: "allergen" },
};

export const CATEGORIES: Category[] = [
  { id: "kahvalti", tr: "Kahvaltı", en: "Breakfast", note_tr: "09:00 – 13:00 arası", note_en: "Served 09:00 – 13:00" },
  { id: "baslangic", tr: "Başlangıçlar", en: "Starters", note_tr: "Çorba & mezeler", note_en: "Soups & mezze" },
  { id: "izgara", tr: "Izgara & Kebap", en: "Grill & Kebab", note_tr: "Mangalda, odun ateşinde", note_en: "Charcoal grilled" },
  { id: "ev", tr: "Ev Yemekleri", en: "Home Cooking", note_tr: "Günlük taze pişer", note_en: "Cooked fresh daily" },
  { id: "pide", tr: "Pide & Lahmacun", en: "Pide & Lahmacun", note_tr: "Taş fırından", note_en: "Stone-oven baked" },
  { id: "salata", tr: "Salatalar", en: "Salads", note_tr: "", note_en: "" },
  { id: "tatli", tr: "Tatlılar", en: "Desserts", note_tr: "Ev yapımı", note_en: "Homemade" },
  { id: "icecek", tr: "İçecekler", en: "Drinks", note_tr: "", note_en: "" },
];

export const ITEMS: MenuItem[] = [
  // ── KAHVALTI ─────────────────────────────────────────────
  {
    id: "serpme", cat: "kahvalti", featured: true, popular: true,
    tr: "Serpme Kahvaltı", en: "Spread Breakfast",
    dtr: "İki kişilik; bal-kaymak, beyaz peynir, kaşar, zeytin çeşitleri, domates, salatalık, reçeller, sucuklu yumurta ve sınırsız çay.",
    den: "For two; honey & clotted cream, cheeses, olives, tomato, cucumber, jams, eggs with sujuk and unlimited tea.",
    price: 690, tags: ["veg"],
  },
  {
    id: "menemen", cat: "kahvalti", popular: true,
    tr: "Menemen", en: "Menemen",
    dtr: "Tereyağında domates, yeşil biber ve yumurta. Bakır sahanda servis edilir.",
    den: "Eggs scrambled with tomato and green pepper in butter, served in a copper pan.",
    price: 180, tags: ["veg"],
  },
  {
    id: "sucuklu-yumurta", cat: "kahvalti",
    tr: "Sucuklu Yumurta", en: "Eggs with Sujuk",
    dtr: "Izgara sucuk üzerine sahanda iki yumurta.",
    den: "Two pan eggs over grilled Turkish sujuk.",
    price: 195, tags: ["spicy"],
  },
  {
    id: "bal-kaymak", cat: "kahvalti",
    tr: "Bal & Kaymak", en: "Honey & Clotted Cream",
    dtr: "Süzme çiçek balı ve manda kaymağı, sıcak somun ile.",
    den: "Strained flower honey with buffalo clotted cream and warm bread.",
    price: 165, tags: ["veg"],
  },
  {
    id: "gozleme", cat: "kahvalti",
    tr: "Gözleme", en: "Gözleme",
    dtr: "El açması yufkada peynirli, ıspanaklı veya patatesli.",
    den: "Hand-rolled flatbread with cheese, spinach or potato.",
    price: 145, tags: ["veg"],
  },
  {
    id: "simit-tabagi", cat: "kahvalti",
    tr: "Simit Tabağı", en: "Simit Plate",
    dtr: "Susamlı simit, beyaz peynir, domates ve zeytin.",
    den: "Sesame simit with feta, tomato and olives.",
    price: 120, tags: ["veg"],
  },

  // ── BAŞLANGIÇLAR ─────────────────────────────────────────
  {
    id: "mercimek", cat: "baslangic", popular: true,
    tr: "Mercimek Çorbası", en: "Lentil Soup",
    dtr: "Geleneksel kırmızı mercimek çorbası, limon ve kıtır ekmekle.",
    den: "Classic red lentil soup with lemon and croutons.",
    price: 95, tags: ["vegan"],
  },
  {
    id: "ezogelin", cat: "baslangic",
    tr: "Ezogelin Çorbası", en: "Ezogelin Soup",
    dtr: "Kırmızı mercimek, bulgur ve nane.",
    den: "Red lentil, bulgur and mint.",
    price: 95, tags: ["vegan"],
  },
  {
    id: "humus", cat: "baslangic",
    tr: "Humus", en: "Hummus",
    dtr: "Nohut püresi, tahin, zeytinyağı ve köz biber.",
    den: "Chickpea purée, tahini, olive oil and roasted pepper.",
    price: 135, tags: ["vegan"],
  },
  {
    id: "sigara-boregi", cat: "baslangic", popular: true,
    tr: "Sigara Böreği", en: "Cheese Rolls",
    dtr: "Çıtır yufka içinde beyaz peynir ve maydanoz (6 adet).",
    den: "Crispy filo rolls with feta and parsley (6 pcs).",
    price: 125, tags: ["veg", "gluten", "dairy"],
  },
  {
    id: "haydari", cat: "baslangic",
    tr: "Haydari", en: "Haydari",
    dtr: "Süzme yoğurt, sarımsak ve taze nane.",
    den: "Strained yoghurt with garlic and fresh mint.",
    price: 110, tags: ["veg", "glutenfree", "dairy"],
  },
  {
    id: "icli-kofte", cat: "baslangic",
    tr: "İçli Köfte", en: "Stuffed Kibbeh",
    dtr: "Bulgur kabuğu içinde kıyma, ceviz ve baharat (2 adet).",
    den: "Bulgur shell filled with minced meat, walnut and spices (2 pcs).",
    price: 155, tags: ["nuts"],
  },

  // ── IZGARA & KEBAP ───────────────────────────────────────
  {
    id: "adana", cat: "izgara", featured: true, popular: true, chefs: true,
    tr: "Adana Kebap", en: "Adana Kebab",
    dtr: "Zırhla kıyılmış kuzu, acı biberli; közlenmiş domates, biber ve lavaş ekmeğiyle.",
    den: "Hand-minced lamb skewer with chili, served with grilled tomato, pepper and lavash.",
    price: 320, tags: ["spicy", "glutenfree"],
  },
  {
    id: "urfa", cat: "izgara", popular: true,
    tr: "Urfa Kebap", en: "Urfa Kebab",
    dtr: "Acısız zırh kebabı, közlenmiş sebzelerle.",
    den: "Mild minced lamb skewer with grilled vegetables.",
    price: 320, tags: ["glutenfree"],
  },
  {
    id: "iskender", cat: "izgara", featured: true, popular: true, chefs: true,
    tr: "İskender", en: "İskender",
    dtr: "Döner dilimleri, tereyağı, domates sosu ve yoğurt; tereyağı masada gezdirilir.",
    den: "Döner slices over bread with butter, tomato sauce and yoghurt.",
    price: 365, tags: ["dairy", "gluten"],
  },
  {
    id: "kuzu-sis", cat: "izgara",
    tr: "Kuzu Şiş", en: "Lamb Shish",
    dtr: "Marine edilmiş kuzu kuşbaşı, mangalda.",
    den: "Marinated lamb cubes, charcoal grilled.",
    price: 345, tags: ["glutenfree"],
  },
  {
    id: "tavuk-sis", cat: "izgara",
    tr: "Tavuk Şiş", en: "Chicken Shish",
    dtr: "Yoğurtta marine tavuk göğsü, mangalda.",
    den: "Yoghurt-marinated chicken breast, charcoal grilled.",
    price: 285, tags: ["glutenfree", "dairy"],
  },
  {
    id: "karisik-izgara", cat: "izgara", popular: true,
    tr: "Karışık Izgara", en: "Mixed Grill",
    dtr: "Adana, kuzu şiş, tavuk, pirzola ve köfte; iki kişilik.",
    den: "Adana, lamb shish, chicken, chops and köfte; for two.",
    price: 720, tags: ["spicy"],
  },
  {
    id: "kofte", cat: "izgara",
    tr: "Izgara Köfte", en: "Grilled Köfte",
    dtr: "El yapımı dana köfte, piyaz ve közlenmiş biberle.",
    den: "Hand-made beef köfte with white bean salad and grilled pepper.",
    price: 265, tags: [],
  },

  // ── EV YEMEKLERİ ─────────────────────────────────────────
  {
    id: "manti", cat: "ev", featured: true, popular: true, chefs: true,
    tr: "Kayseri Mantısı", en: "Kayseri Mantı",
    dtr: "El açması minik mantı, sarımsaklı yoğurt ve nane-tereyağı sosuyla.",
    den: "Tiny hand-folded dumplings with garlic yoghurt and mint butter.",
    price: 245, tags: ["dairy", "gluten"],
  },
  {
    id: "karniyarik", cat: "ev",
    tr: "Karnıyarık", en: "Karnıyarık",
    dtr: "Kıymalı patlıcan dolması, pilav ile.",
    den: "Eggplant stuffed with minced meat, served with rice.",
    price: 235, tags: ["glutenfree"],
  },
  {
    id: "kuru-fasulye", cat: "ev", popular: true,
    tr: "Kuru Fasulye & Pilav", en: "White Beans & Rice",
    dtr: "Tereyağlı kuru fasulye, pirinç pilavı ve turşu.",
    den: "Butter-cooked white beans with rice pilaf and pickles.",
    price: 195, tags: ["veg", "glutenfree"],
  },
  {
    id: "imam-bayildi", cat: "ev",
    tr: "İmam Bayıldı", en: "İmam Bayıldı",
    dtr: "Zeytinyağlı patlıcan, soğan ve domates. Soğuk servis.",
    den: "Olive-oil braised eggplant with onion and tomato. Served cold.",
    price: 185, tags: ["vegan", "glutenfree"],
  },
  {
    id: "etli-nohut", cat: "ev",
    tr: "Etli Nohut", en: "Lamb & Chickpea Stew",
    dtr: "Kuzu eti ve nohut, pirinç pilavıyla.",
    den: "Lamb and chickpea stew with rice pilaf.",
    price: 245, tags: ["glutenfree"],
  },
  {
    id: "tas-kebabi", cat: "ev",
    tr: "Taş Kebabı", en: "Slow-cooked Lamb",
    dtr: "Güveçte ağır ateşte pişmiş kuzu incik.",
    den: "Lamb shank slow-cooked in a clay pot.",
    price: 385, tags: ["glutenfree"],
  },

  // ── PİDE & LAHMACUN ──────────────────────────────────────
  {
    id: "karisik-pide", cat: "pide", featured: true, popular: true,
    tr: "Karışık Pide", en: "Mixed Pide",
    dtr: "Kaşar, sucuk, kıyma ve yumurta; taş fırından.",
    den: "Cheese, sujuk, minced meat and egg; stone-oven baked.",
    price: 215, tags: ["spicy", "gluten", "dairy"],
  },
  {
    id: "kasarli-pide", cat: "pide",
    tr: "Kaşarlı Pide", en: "Cheese Pide",
    dtr: "Bol kaşar peynirli açık pide.",
    den: "Open pide loaded with kashar cheese.",
    price: 175, tags: ["veg", "gluten", "dairy"],
  },
  {
    id: "kiymali-pide", cat: "pide",
    tr: "Kıymalı Pide", en: "Minced Meat Pide",
    dtr: "Baharatlı kıyma harcı, taş fırında.",
    den: "Spiced minced meat, stone-oven baked.",
    price: 195, tags: ["gluten"],
  },
  {
    id: "lahmacun", cat: "pide", popular: true,
    tr: "Lahmacun", en: "Lahmacun",
    dtr: "İnce hamur üzerine baharatlı kıyma; maydanoz ve limonla (2 adet).",
    den: "Thin dough with spiced minced meat; parsley and lemon (2 pcs).",
    price: 130, tags: ["spicy", "gluten"],
  },

  // ── SALATALAR ────────────────────────────────────────────
  {
    id: "coban", cat: "salata", popular: true,
    tr: "Çoban Salata", en: "Shepherd's Salad",
    dtr: "Domates, salatalık, biber, soğan ve maydanoz; nar ekşili.",
    den: "Tomato, cucumber, pepper, onion and parsley with pomegranate molasses.",
    price: 110, tags: ["vegan", "glutenfree"],
  },
  {
    id: "gavurdagi", cat: "salata",
    tr: "Gavurdağı Salata", en: "Gavurdağı Salad",
    dtr: "İnce doğranmış sebzeler, ceviz ve nar ekşisi.",
    den: "Finely chopped vegetables with walnut and pomegranate molasses.",
    price: 130, tags: ["vegan", "nuts", "glutenfree"],
  },
  {
    id: "mevsim", cat: "salata",
    tr: "Mevsim Salata", en: "Seasonal Salad",
    dtr: "Taze yeşillikler, akdeniz yeşillikleri ve limon sos.",
    den: "Fresh greens and Mediterranean leaves with lemon dressing.",
    price: 105, tags: ["vegan", "glutenfree"],
  },

  // ── TATLILAR ─────────────────────────────────────────────
  {
    id: "kunefe", cat: "tatli", featured: true, popular: true, chefs: true,
    tr: "Künefe", en: "Künefe",
    dtr: "Kadayıf arasında peynir, kaymak ve Antep fıstığı; sıcak servis.",
    den: "Shredded pastry with cheese, clotted cream and pistachio; served hot.",
    price: 185, tags: ["veg", "nuts", "gluten", "dairy"],
  },
  {
    id: "baklava", cat: "tatli", popular: true,
    tr: "Fıstıklı Baklava", en: "Pistachio Baklava",
    dtr: "Antep fıstıklı el açması baklava (4 dilim).",
    den: "Hand-rolled baklava with Antep pistachio (4 pieces).",
    price: 195, tags: ["veg", "nuts", "gluten"],
  },
  {
    id: "sutlac", cat: "tatli",
    tr: "Fırın Sütlaç", en: "Baked Rice Pudding",
    dtr: "Fırında üzeri kızarmış geleneksel sütlaç.",
    den: "Traditional rice pudding baked golden on top.",
    price: 120, tags: ["veg", "glutenfree", "dairy"],
  },
  {
    id: "kazandibi", cat: "tatli",
    tr: "Kazandibi", en: "Kazandibi",
    dtr: "Karamelize tabanlı tavuk göğsü muhallebisi.",
    den: "Caramel-bottomed milk pudding.",
    price: 125, tags: ["veg", "dairy"],
  },

  // ── İÇECEKLER ────────────────────────────────────────────
  {
    id: "cay", cat: "icecek", popular: true,
    tr: "Demli Çay", en: "Turkish Tea",
    dtr: "İnce belli bardakta tavşan kanı çay.",
    den: "Brewed black tea in a tulip glass.",
    price: 35, tags: ["vegan"],
  },
  {
    id: "turk-kahvesi", cat: "icecek", popular: true,
    tr: "Türk Kahvesi", en: "Turkish Coffee",
    dtr: "Közde pişmiş, lokum eşliğinde.",
    den: "Cooked over embers, served with Turkish delight.",
    price: 75, tags: ["vegan"],
  },
  {
    id: "ayran", cat: "icecek",
    tr: "Ayran", en: "Ayran",
    dtr: "Köpüklü, ev yapımı yoğurt içeceği.",
    den: "Frothy homemade yoghurt drink.",
    price: 45, tags: ["veg", "glutenfree", "dairy"],
  },
  {
    id: "salgam", cat: "icecek",
    tr: "Şalgam", en: "Şalgam Juice",
    dtr: "Acılı veya acısız fermente şalgam suyu.",
    den: "Fermented turnip juice, spicy or mild.",
    price: 45, tags: ["vegan", "spicy"],
  },
  {
    id: "limonata", cat: "icecek",
    tr: "Ev Limonatası", en: "Homemade Lemonade",
    dtr: "Taze sıkım limon ve nane.",
    den: "Freshly squeezed lemon with mint.",
    price: 65, tags: ["vegan"],
  },
];

/* ------------------------------------------------------------
   Görseller — her yemeğin Wikimedia Commons'taki kanonik fotoğrafı
   (ücretsiz / CC). Adına göre seçildi ve URL'ler doğrulandı.
   Görsel yüklenmezse Photo bileşeni çizgili yer tutucuya düşer.
------------------------------------------------------------ */
const IMAGES: Record<string, string> = {
  serpme: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Vankahvalti.jpg/960px-Vankahvalti.jpg",
  menemen: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Menemen_in_a_sahan.jpg/960px-Menemen_in_a_sahan.jpg",
  "sucuklu-yumurta": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Sucuklu_yumurta.jpg/960px-Sucuklu_yumurta.jpg",
  "bal-kaymak": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Kaymak_in_Turkey.jpg/960px-Kaymak_in_Turkey.jpg",
  gozleme: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/G%C3%B6zleme.JPG/960px-G%C3%B6zleme.JPG",
  "simit-tabagi": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Simit-2x.JPG/960px-Simit-2x.JPG",
  mercimek: "https://upload.wikimedia.org/wikipedia/commons/6/61/EgFoodLentilSoup.jpg",
  ezogelin: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Ezogelin_soup%2C_bread%2C_and_water.jpg/960px-Ezogelin_soup%2C_bread%2C_and_water.jpg",
  humus: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Lebanese_style_hummus.jpg/960px-Lebanese_style_hummus.jpg",
  "sigara-boregi": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Sigara_B%C3%B6re%C4%9Fi.JPG/960px-Sigara_B%C3%B6re%C4%9Fi.JPG",
  haydari: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Haydari_%28meze%29.jpg/960px-Haydari_%28meze%29.jpg",
  "icli-kofte": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Kibbeh3.jpg/960px-Kibbeh3.jpg",
  adana: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Adana_kebab.jpg/960px-Adana_kebab.jpg",
  urfa: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Adana_kebab.jpg/960px-Adana_kebab.jpg",
  iskender: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/%C4%B0skender_Kebap.jpg/960px-%C4%B0skender_Kebap.jpg",
  "kuzu-sis": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/%C5%9Ei%C5%9F_kebap_and_pilav.jpg/960px-%C5%9Ei%C5%9F_kebap_and_pilav.jpg",
  "tavuk-sis": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Tavuk_%C5%9Ei%C5%9F.jpg/960px-Tavuk_%C5%9Ei%C5%9F.jpg",
  "karisik-izgara": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Mangal_with_grilled_shashlik.jpg/960px-Mangal_with_grilled_shashlik.jpg",
  kofte: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Sultanahmet_K%C3%B6ftesi.jpg/960px-Sultanahmet_K%C3%B6ftesi.jpg",
  manti: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Kayseride_bir_restoranda_Kayseri_mant%C4%B1s%C4%B1_%28cropped%29.jpg/960px-Kayseride_bir_restoranda_Kayseri_mant%C4%B1s%C4%B1_%28cropped%29.jpg",
  karniyarik: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Meal_in_Turkey.jpg/960px-Meal_in_Turkey.jpg",
  "kuru-fasulye": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Kuru_Fasulye...JPG/960px-Kuru_Fasulye...JPG",
  "imam-bayildi": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/%C4%B0mam_bay%C4%B1ld%C4%B1_AvL.JPG/960px-%C4%B0mam_bay%C4%B1ld%C4%B1_AvL.JPG",
  "etli-nohut": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Nohut_yahni.jpg/960px-Nohut_yahni.jpg",
  "tas-kebabi": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Tas_kebap_and_cac%C4%B1k.jpg/960px-Tas_kebap_and_cac%C4%B1k.jpg",
  "karisik-pide": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Hocapasa_Pidecisi%2C_Sucuklu_Pide_%2814285595564%29.jpg/960px-Hocapasa_Pidecisi%2C_Sucuklu_Pide_%2814285595564%29.jpg",
  "kasarli-pide": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Kasarli_pide.jpg/960px-Kasarli_pide.jpg",
  "kiymali-pide": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Nazilli-kiymali-pide-20201023_143731.jpg/960px-Nazilli-kiymali-pide-20201023_143731.jpg",
  lahmacun: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Lahmacun.jpg/960px-Lahmacun.jpg",
  coban: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Bira_ve_%C3%A7oban_salata.jpg/960px-Bira_ve_%C3%A7oban_salata.jpg",
  gavurdagi: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Gavurda%C4%9F%C4%B1_salad_with_lor_cheese.jpg/960px-Gavurda%C4%9F%C4%B1_salad_with_lor_cheese.jpg",
  mevsim: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Salad_platter.jpg/960px-Salad_platter.jpg",
  kunefe: "https://upload.wikimedia.org/wikipedia/commons/c/c8/K%C3%BCnefe.jpg",
  baklava: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Baklava%281%29.png",
  sutlac: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/S%C3%BCtla%C3%A7_%28Hamsik%C3%B6y%29.jpg/960px-S%C3%BCtla%C3%A7_%28Hamsik%C3%B6y%29.jpg",
  kazandibi: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Kazandibi_Dessert.jpg/960px-Kazandibi_Dessert.jpg",
  cay: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Turkish_tea2.jpg/960px-Turkish_tea2.jpg",
  "turk-kahvesi": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/T%C3%BCrk_Kahvesi_-_Bakir_Cezve.jpg/960px-T%C3%BCrk_Kahvesi_-_Bakir_Cezve.jpg",
  ayran: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Fresh_ayran.jpg",
  salgam: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/%C5%9Ealgam_suyu_in_market.jpg/960px-%C5%9Ealgam_suyu_in_market.jpg",
  limonata: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Lemonade_-_27682817724.jpg/960px-Lemonade_-_27682817724.jpg",
};

ITEMS.forEach((item) => {
  if (IMAGES[item.id]) item.image = IMAGES[item.id];
});
