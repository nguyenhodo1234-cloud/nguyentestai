import { LanguageProvider } from "./i18n/LanguageContext";
import Header from "./components/layout/Header";
import Hero from "./components/sections/Hero";
import DownloadSection from "./components/sections/DownloadSection";
import SocialProof from "./components/sections/SocialProof";
import Footer from "./components/layout/Footer";

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
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
