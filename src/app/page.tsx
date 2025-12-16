import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Service from "@/components/Service";
import News from "@/components/News";
import Company from "@/components/Company";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Service />
      <News />
      <Company />
      <Contact />
      <Footer />
    </main>
  );
}
