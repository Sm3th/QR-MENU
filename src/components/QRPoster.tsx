import { useMemo } from "react";
import { Link } from "react-router-dom";
import QRCode from "qrcode";
import { useLang } from "../lib/i18n";

interface QRPosterProps {
  /** Masa numarası — QR URL'ine ?masa=N olarak eklenir */
  masa?: string;
}

const QR_SIZE = 240;

/* Verilen metinden yuvarlatılmış espresso modüllü QR SVG'si üretir */
function useQrRects(text: string) {
  return useMemo(() => {
    try {
      const qr = QRCode.create(text, { errorCorrectionLevel: "M" });
      const count = qr.modules.size;
      const cell = QR_SIZE / count;
      const rects: { x: number; y: number }[] = [];
      for (let r = 0; r < count; r++) {
        for (let c = 0; c < count; c++) {
          if (qr.modules.get(r, c)) rects.push({ x: c * cell, y: r * cell });
        }
      }
      return { count, cell, rects };
    } catch {
      return null;
    }
  }, [text]);
}

/* Masaüstü / baskı QR poster */
export function QRPoster({ masa = "12" }: QRPosterProps) {
  const { lang, t } = useLang();

  // Üretimde menü, posterin barındığı origin'den ?masa=N ile açılır
  const menuUrl = useMemo(() => {
    const origin =
      typeof window !== "undefined" ? window.location.origin : "https://sofra.menu";
    return `${origin}/?masa=${encodeURIComponent(masa)}`;
  }, [masa]);

  const qr = useQrRects(menuUrl);

  return (
    <div className="poster-page">
      <div className="poster">
        <div className="poster__paper">
          <div className="poster__corner poster__corner--tl" />
          <div className="poster__corner poster__corner--tr" />
          <div className="poster__corner poster__corner--bl" />
          <div className="poster__corner poster__corner--br" />

          <div className="poster__brand">SOFRA</div>
          <div className="poster__tag">{t.brand_tag}</div>
          <div className="poster__rule">
            <span />
          </div>

          <div className="poster__lead">
            {lang === "tr" ? "Menümüzü görüntülemek için" : "Scan to view our menu"}
          </div>

          <div className="poster__qr">
            <div className="poster__qr-frame">
              <div className="poster__qr-svg">
                {qr ? (
                  <svg viewBox={`0 0 ${QR_SIZE} ${QR_SIZE}`} width={QR_SIZE} height={QR_SIZE}>
                    {qr.rects.map((m, i) => (
                      <rect
                        key={i}
                        x={m.x.toFixed(2)}
                        y={m.y.toFixed(2)}
                        width={(qr.cell + 0.4).toFixed(2)}
                        height={(qr.cell + 0.4).toFixed(2)}
                        rx={(qr.cell * 0.22).toFixed(2)}
                        fill="#211913"
                      />
                    ))}
                  </svg>
                ) : (
                  <div className="qr-fallback">QR</div>
                )}
              </div>
            </div>
          </div>

          <div className="poster__steps">
            <div className="step">
              <span className="step__n">1</span>
              {lang === "tr" ? "Kameranızı açın" : "Open your camera"}
            </div>
            <div className="step">
              <span className="step__n">2</span>
              {lang === "tr" ? "Kodu okutun" : "Scan the code"}
            </div>
            <div className="step">
              <span className="step__n">3</span>
              {lang === "tr" ? "Afiyet olsun" : "Enjoy"}
            </div>
          </div>

          <div className="poster__foot">
            <span>WiFi · SOFRA_Misafir</span>
            <span className="poster__dot" />
            <span>{lang === "tr" ? `Masa ${masa}` : `Table ${masa}`}</span>
          </div>
        </div>
      </div>

      <Link className="poster__back" to="/">
        {lang === "tr" ? "← Menüye dön" : "← Back to menu"}
      </Link>
    </div>
  );
}
