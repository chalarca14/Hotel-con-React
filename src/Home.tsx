import { Navbar } from "@/components/ui/Navbar";
import { Card } from "./components/ui/Card";
import { Footer } from "@/components/ui/Footer";
import "@/styles/ui.css";
import { VideoHero } from "./components/media/VideoHero";
import { CalculadoraHotel } from "./modules/calculadoraHotel";
import { HotelDescription } from "./components/ui/HotelDescription";

export function Home() {
  return (
    <div>
      <Navbar />
      <section id="home">
        <VideoHero />
      </section>
      <section>
        <HotelDescription />
      </section>
      <section id="cards" className="container" style={{ paddingTop: 16 }}>
        <h2>Card</h2>
        <div className="cards">
          <Card title="INDIVIDUAL" description="2.500" cta="Ver mas" />
          <Card title="DOBLE" description="4.600" cta="Ver mas" />
          <Card title="FAMILIA" description="5.200" cta="Ver mas" />
        </div>
      </section>

      <section id="table">
        <CalculadoraHotel />
      </section>

      <Footer />
    </div>
  );
}
