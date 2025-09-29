import Image from "next/image";

export default function Hero() {
return(
<section id="pocetna" className="relative h-[90vh]">

          <Image
            src="/hero-garage.jpg"
            alt="MXW Tronics workshop"
            fill
            priority
            className="object-cover -z-10"
          />

          <div className="absolute inset-0 bg-black/70 -z-10" />

          <div className="relative container mx-auto px-4 h-full flex flex-col items-center justify-center text-center text-white">
            <h1 className="text-5xl md:text-6xl font-extrabold">
              <span className="text-blue-500">MXW</span> Tronics
            </h1>
            <div className="mt-2 h-1 w-16 bg-blue-500 rounded-full" />

            {/* Podnaslov */}
            <h2 className="mt-6 text-2xl md:text-3xl font-semibold">
              Vaš pouzdan partner za autoelektroniku i servis
            </h2>

            {/* Opis */}
            <p className="mt-4 max-w-2xl text-lg text-neutral-300">
              Profesionalni servis automobila, elektronike i automatskih
              mjenjača. Specijalizirani za ECU flashing, kodiranje ključeva i
              popravak auto elektronike.
            </p>

        
            <div className="mt-8 flex justify-center gap-4">
              <a
                href="tel:+385917963313"
                className="inline-block rounded-lg bg-blue-600 px-6 py-3 text-lg font-medium text-white shadow hover:bg-blue-700 transition"
              >
                📞 Nazovi odmah
              </a>
              <a
                href="tel:+385917963313"
                className="inline-block rounded-lg bg-white px-6 py-3 text-lg font-medium text-black shadow hover:bg-blue-700 transition"
              >
                📞 Rezerviraj termin
              </a>
            </div>
          </div>
        </section>
        );
        }