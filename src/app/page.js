import Downloads from "@/components/sections/downloads/Downloads";
import Faq from "@/components/sections/faq/Faq";
import Header from "@/components/header/header";
import Hero from "@/components/sections/hero/Hero";
import Stats from "@/components/sections/stats/Stats";
import Footer from "@/components/footer/footer";
import Reviews from "@/components/sections/reviews/Reviews";
import Pricing from "@/components/sections/pricing/Pricing";
import Newsletter from "@/components/sections/newsletter/Newsletter";

export default function Home() {
  return (
    <main className="min-h-screen" role="main">
      <Header />
      <div className="md:max-w-screen-2xl md:mx-auto px-4">
        <Hero />
        <Stats />
        <Downloads />
        <Faq />
        <Reviews />
        <Pricing />
        <Newsletter />
      </div>
      <Footer />
    </main>
  );
}
