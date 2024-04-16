import Footer from "../../components/Footer";
import GetApp from "./components/GetApp";
import Hero from "./components/Hero";
import Motivation from "./components/Motivation";
import Services from "./components/Services";
import "./style/home.css";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-primary-2 text-white pt-14">
      <Hero />
      <Motivation />
      <Services />
      <GetApp />
      <Footer />
    </main>
  );
}
