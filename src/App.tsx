import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import GardenDetailPage from "./pages/GardenDetailPage";
import GardenRegisterPage from "./pages/GardenRegisterPage";

import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProfileSetupPage from "./pages/ProfileSetupPage";

import GuidePage from "./pages/GuidePage";
import MyPage from "./pages/MyPage";
import MentorPage from "./pages/MentorPage";
import LogPage from "./pages/LogPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />

        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/profile-setup" element={<ProfileSetupPage />} />

        <Route path="/home" element={<HomePage />} />
        <Route path="/garden-register" element={<GardenRegisterPage />} />
        <Route path="/gardens/:gardenId" element={<GardenDetailPage />} />

        <Route path="/guide" element={<GuidePage />} />
        <Route path="/my" element={<MyPage />} />
        <Route path="/mentor" element={<MentorPage />} />
        <Route path="/log" element={<LogPage />} />

        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </BrowserRouter>
  );
}