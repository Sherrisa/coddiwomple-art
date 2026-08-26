import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="relative flex min-h-screen items-center justify-center">
        <Image
          src="/scooter.svg"
          alt="Scooter illustration"
          width={149}
          height={150}
          className="h-auto w-64 md:w-96 lg:w-125"
          priority
        />

        <div className="absolute left-[12%] top-1/2 -translate-y-1/2 text-left md:left-[18%]">
          <h1 className="text-2xl font-bold md:text-4xl">Coddiwomple Art</h1>
          <p className="text-base md:text-xl">Coming soon</p>
        </div>
      </section>
    </main>
  );
}
