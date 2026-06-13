# SOFRA · QR Menü

Tam kapsamlı bir Türk restoranı için QR ile açılan dijital menü.
**Vite + React + TypeScript** ile geliştirilmiştir.

## Ekran Görüntüleri

### Masaüstü
![Masaüstü görünüm](screenshots/desktop.png)

### Mobil
| Türkçe | English |
|---|---|
| ![Mobil — TR](screenshots/mobile-tr.png) | ![Mobil — EN](screenshots/mobile-en.png) |

### QR Poster
<img src="screenshots/poster.png" alt="QR Poster" width="360" />

## Hızlı başlangıç

```bash
npm install
npm run dev      # geliştirme sunucusu (http://localhost:5280)
npm run build    # üretim derlemesi -> dist/
npm run preview  # üretim derlemesini yerelde sunar (http://localhost:4280)
```

Menü hem mobilde (telefon genişliğinde tam ekran) hem masaüstünde (geniş, ortalı
kart; ürünler 2–3 kolonlu ızgara; detay ekran ortasında modal) responsive çalışır.

## Rotalar

| Rota | Açıklama |
|---|---|
| `/` (veya `/menu`) | Telefon menüsü — misafirin QR okutunca gördüğü asıl ekran |
| `/poster` | Masa 12 için QR poster |
| `/poster/:masa` | Masa bazlı QR poster (ör. `/poster/7`) |

QR kod, posterin barındığı origin'i `?masa=N` parametresiyle kodlar; böylece
dağıtım yapıldığında otomatik olarak doğru menü URL'ini gösterir.

## Özellikler

- **TR / EN anlık dil değişimi** — seçim `localStorage`'da kalıcı (`useLang`).
- **Sticky kategori sekmeleri + scrollspy** — kaydırınca aktif kategori vurgulanır.
- **Arama** — ürün adı ve açıklamada Türkçe-duyarlı (`toLocaleLowerCase("tr")`) filtre.
- **Şefin Önerileri carousel'i** — `featured` ürünler.
- **Detay alt-sayfası** — diyet/alerjen etiketleri + sembolik "Siparişe Ekle".
- **Görsel yer tutucu** — `image` alanı dolduğunda `<img>` ile birebir yer değiştirir.
- **Erişilebilirlik** — `<button>` hedefleri, `aria-label`'lar, `prefers-reduced-motion`,
  `env(safe-area-inset-*)` güvenli alanlar.

## Klasör yapısı

```
src/
  components/   Tag, Pin, Photo, FeatureCard, ItemRow, DetailSheet, MenuScreen, QRPoster
  pages/        MenuPage, PosterPage
  lib/          types.ts · menu.ts · strings.ts · format.ts · i18n.tsx
  styles/       tokens.css (tasarım token'ları) · components.css (bileşen stilleri)
  App.tsx       rotalar
  main.tsx      giriş noktası (BrowserRouter + LangProvider)
```

## İçerik düzenleme

- **Ürün / fiyat / kategori:** `src/lib/menu.ts` (`ITEMS`, `CATEGORIES`, `TAGS`).
  Tüm alanlar `src/lib/types.ts` içinde tiplenmiştir.
- **Arayüz metinleri:** `src/lib/strings.ts` (`STRINGS.tr` / `STRINGS.en`).
- **Renk / tipografi token'ları:** `src/styles/tokens.css`.

> Ürün adı `itemName(item, lang)`, açıklama `itemDesc(item, lang)` ile okunur.
> Yeni dil eklerken bu yardımcıları ve `Strings` tipini genişletin.

## Sonraki adımlar (opsiyonel)

İstenirse eklenebilecek kapsam: gerçek sipariş/sepet, masa oturumu,
stok/uygunluk rozeti, admin paneli, analitik.
