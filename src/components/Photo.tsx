import { useState, type CSSProperties } from "react";

interface PhotoProps {
  seed: string;
  label?: string;
  className?: string;
  /** Gerçek görsel URL'i — verilirse yer tutucu yerine <img> gösterilir */
  src?: string;
}

/* Görsel yer tutucu — gerçek görsel gelene (veya yüklenene) kadar çizgili kutu */
export function Photo({ seed, label, className, src }: PhotoProps) {
  const [failed, setFailed] = useState(false);
  // sıcak tonlu, deterministik bir arka plan açısı
  const hue = 18 + ((seed || "").length * 11) % 26;
  const style = { ["--ph-hue" as string]: hue } as CSSProperties;
  const showImg = src && !failed;
  return (
    <div className={"photo " + (className || "")} style={style}>
      {showImg ? (
        <img
          className="photo__img"
          src={src}
          alt={label || ""}
          loading="lazy"
          onError={() => setFailed(true)}
        />
      ) : (
        <>
          <div className="photo__stripes" />
          <span className="photo__label">{label || "ürün görseli"}</span>
        </>
      )}
    </div>
  );
}
