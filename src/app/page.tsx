
import Navbar from "@/components/ui/navbar";
import Hero from "@/components/ui/hero";
import Usluge from "@/components/ui/usluge";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
       <Hero />
       <Usluge />
      </main>
      <footer className=""></footer>
    </div>
  );
}
