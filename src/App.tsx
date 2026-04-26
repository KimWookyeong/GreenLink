import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import GardenDetailPage from './pages/GardenDetailPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/gardens/:gardenId" element={<GardenDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}
