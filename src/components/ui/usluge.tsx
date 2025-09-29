import { Cpu, Key, Settings2, Wrench } from "lucide-react";
import ServiceCard from "./servicecard";
export default function Usluge() {
  return (
    <section className="relative h-[90vh] ">
      <div className="relative m-15 container mx-auto flex flex-col items-center h-full">
        <span className="text-4xl font-bold">Naše usluge</span>
        <span>
          Pružamo kompletne usluge autoelektronike i servisa s fokusom na
          kvalitetu i profesionalnost
        </span>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <ServiceCard
            icon={Key}
            title="Izrada i kodiranje auto ključeva"
            desc="Profesionalna izrada i programiranje ključeva za sve marke vozila. Brzo i pouzdano rješenje za izgubljene ili oštećene ključeve."
            bullets={[
              "Svi tipovi ključeva",
              "Programiranje immobilizera",
              "Keyless sistemi",
            ]}
          />
          <ServiceCard
            icon={Cpu}
            title="Popravak auto elektronike"
            desc="ECU, BCM, instrument table, dijagnostika i popravci elektronike vozila."
            bullets={["ECU dijagnostika", "Popravak modula", "Immo rješenja"]}
          />
          <ServiceCard
            icon={Settings2}
            title="Servis automatskih mjenjača"
            desc="Zamjena ulja, adaptacije i rješavanje kvarova automatskih mjenjača."
            bullets={["ATF zamjena", "Adaptacije", "Dijagnostika"]}
          />
          <ServiceCard
            icon={Settings2}
            title="ECU Flashing - DPF, EGR & DTC OFF"
            desc="Profesionalno ECU flashing za poboljšanje performansi i rješavanje problema s emisijama. DPF/EGR delete i DTC off.

"
            bullets={[
              "Stage 1/2 tuning",
              "DPF/EGR delete",
              "Error code removal",
            ]}
          />
          <ServiceCard
            icon={Wrench}
            title="Popravak i održavanje vozila"
            desc="Kompletno održavanje vozila od osnovnih servisa do složenih popravaka. Kvalitetne usluge za dugovječnost vašeg automobila.



"
            bullets={[
              "Redovni servis",
              "Dijagnostika kvarova",
              "Rezervni dijelovi",
            ]}
          />
        </div>
      </div>
    </section>
  );
}
