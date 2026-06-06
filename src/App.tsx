import { useState } from "react";
import { LanguageProvider } from "./i18n/LanguageContext";
import Header from "./components/layout/Header";
import Hero from "./components/sections/Hero";
import DownloadSection from "./components/sections/DownloadSection";
import SocialProof from "./components/sections/SocialProof";
import Footer from "./components/layout/Footer";
import AuthPage from "./pages/AuthPage";

type Page = "landing" | "auth";

export default function App() {
  const [page, setPage] = useState<Page>("landing");

  if (page === "auth") {
    return (
      <LanguageProvider>
        <AuthPage />
      </LanguageProvider>
    );
  }

  return (
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
  );
}
