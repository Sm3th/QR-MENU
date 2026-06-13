import { useParams } from "react-router-dom";
import { QRPoster } from "../components/QRPoster";

export function PosterPage() {
  const { masa } = useParams<{ masa?: string }>();
  return <QRPoster masa={masa ?? "12"} />;
}
