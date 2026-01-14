import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Service from "@/components/Service";
import Message from "@/components/Message";
import Philosophy from "@/components/Philosophy";
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
      <Message />
      <Philosophy />
      <News />
      <Company />
      <Contact />
      <Footer />
    </main>
  );
}
