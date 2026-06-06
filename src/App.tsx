import { useState } from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { LanguageProvider } from "./i18n/LanguageContext";
import Header from "./components/layout/Header";
import Hero from "./components/sections/Hero";
import DownloadSection from "./components/sections/DownloadSection";
import SocialProof from "./components/sections/SocialProof";
import Footer from "./components/layout/Footer";
import AuthPage from "./pages/AuthPage";

const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID || "";

type Page = "landing" | "auth";

export default function App() {
  const [page, setPage] = useState<Page>("landing");

  if (page === "auth") {
    return (
      <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
        <LanguageProvider>
          <AuthPage />
        </LanguageProvider>
      </GoogleOAuthProvider>
    );
  }

  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <LanguageProvider>
        <div className="min-h-screen flex flex-col">
          <Header onNavigateAuth={() => setPage("auth")} />
          <main className="flex-1">
            <Hero />
            <DownloadSection />
            <SocialProof />
          </main>
          <Footer />
        </div>
      </LanguageProvider>
    </GoogleOAuthProvider>
  );
}
