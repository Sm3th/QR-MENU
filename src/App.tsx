import { Navigate, Route, Routes } from "react-router-dom";
import { MenuPage } from "./pages/MenuPage";
import { PosterPage } from "./pages/PosterPage";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<MenuPage />} />
      <Route path="/menu" element={<MenuPage />} />
      <Route path="/poster" element={<PosterPage />} />
      <Route path="/poster/:masa" element={<PosterPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
