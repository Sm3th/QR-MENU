/* Fiyat biçimlendirme — tam sayı TL · tr-TR locale */
export const TL = (n: number): string => "₺" + n.toLocaleString("tr-TR");
