import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">

      {/* Hero */}
      <section className="relative flex min-h-screen items-center justify-center">
        <Image
          src="/scooter_berry.svg"
          alt="Scooter illustration"
          width={149}
          height={150}
          className="h-auto w-64 md:w-96 lg:w-125"
          priority
        />

        <div className="absolute left-[12%] top-1/2 -translate-y-1/2 text-left md:left-[18%]">
          <h1 className="text-2xl font-bold md:text-4xl">
            Coddiwomple Art
          </h1>

          <p className="mt-2 text-base md:text-xl">
            Your next creative adventure starts here.
          </p>

          <p className="mt-4 text-sm md:text-base">
            Grab your digital pencil and let&apos;s go.
          </p>
        </div>
      </section>

      {/* What is Coddiwomple? */}
      <section className="mx-auto max-w-4xl px-6 py-24">
        <p className="text-sm font-semibold uppercase tracking-widest">
          CODDIWOMPLE
        </p>

        <p className="mt-2 text-lg italic">
          verb
        </p>

        <h2 className="mt-4 text-3xl font-bold md:text-5xl">
          To travel purposefully toward an unknown destination.
        </h2>

        <p className="mt-8 max-w-2xl text-lg leading-8">
          Making art can be a little like that.
        </p>

        <p className="mt-6 max-w-2xl text-lg leading-8">
          You start with an idea, a blank page, or maybe just a pencil in your
          hand. You make something. You try something. You change something.
          And sometimes you discover something you never expected.
        </p>
      </section>

      {/* Art + Technology */}
      <section className="mx-auto max-w-4xl px-6 py-24">
        <h2 className="text-3xl font-bold md:text-5xl">
          Art first.
          <br />
          Technology makes it possible to explore.
        </h2>

        <p className="mt-8 max-w-2xl text-lg leading-8">
          Coddiwomple Art is an art class enhanced by technology.
        </p>

        <p className="mt-6 max-w-2xl text-lg leading-8">
          Students learn real drawing, painting, color, and design skills
          while discovering what happens when traditional art meets digital
          tools.
        </p>

        <p className="mt-6 max-w-2xl text-lg leading-8">
          We&apos;ll use pencils, paint, markers, paper, and other hands-on
          materials. We&apos;ll also use technology to experiment, revise,
          combine, transform, and try again.
        </p>
      </section>

      {/* The Freedom of Technology */}
      <section className="mx-auto max-w-4xl px-6 py-24">
        <h2 className="text-3xl font-bold md:text-5xl">
          What if you could try it again?
        </h2>

        <p className="mt-8 max-w-2xl text-lg leading-8">
          On paper, every mark matters. Once the paint hits the page, you
          can&apos;t always take it back.
        </p>

        <p className="mt-6 max-w-2xl text-lg leading-8">
          Digital tools give artists something different: the freedom to
          experiment.
        </p>

        <p className="mt-6 max-w-2xl text-lg leading-8">
          Change the color. Move it. Layer it. Try another idea. Go back.
          Start over. See what happens.
        </p>

        <p className="mt-6 max-w-2xl text-lg leading-8">
          Technology doesn&apos;t replace the art.
          <br />
          <strong>It opens up new ways to explore it.</strong>
        </p>
      </section>

      {/* What Students Learn */}
      <section className="mx-auto max-w-4xl px-6 py-24">
        <h2 className="text-3xl font-bold md:text-5xl">
          Learn one skill.
          <br />
          Take it somewhere new.
        </h2>

        <p className="mt-8 max-w-2xl text-lg leading-8">
          Each class introduces an art or design skill that students can
          practice with traditional materials and explore digitally.
        </p>

        <div className="mt-10 space-y-8">
          <div>
            <h3 className="text-xl font-bold">
              Drawing
            </h3>
            <p className="mt-2 max-w-2xl">
              Learn to really see what you are drawing—from value and light to
              negative space and proportion.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold">
              Color
            </h3>
            <p className="mt-2 max-w-2xl">
              Explore color relationships, build palettes, and discover how
              color can change the feeling of an artwork.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold">
              Composition
            </h3>
            <p className="mt-2 max-w-2xl">
              Learn how shapes, colors, images, and space interact to create a
              stronger visual story.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold">
              Creative Technology
            </h3>
            <p className="mt-2 max-w-2xl">
              Use digital tools to experiment with artwork in ways that aren&apos;t
              possible on paper alone.
            </p>
          </div>
        </div>

        <a
          href="/courses"
          className="mt-10 inline-block font-semibold underline underline-offset-4"
        >
          Explore the course →
        </a>
      </section>

      {/* Physical + Digital */}
      <section className="mx-auto max-w-4xl px-6 py-24">
        <h2 className="text-3xl font-bold md:text-5xl">
          Make it by hand.
          <br />
          Then see where technology takes it.
        </h2>

        <p className="mt-8 max-w-2xl text-lg leading-8">
          A watercolor painting can become the beginning of something
          completely different.
        </p>

        <p className="mt-6 max-w-2xl text-lg leading-8">
          Students can scan artwork they&apos;ve created by hand and use
          digital tools to experiment with color, layers, blending, and
          composition.
        </p>

        <p className="mt-6 max-w-2xl text-lg leading-8">
          Sometimes the best part of making art is discovering what happens
          next.
        </p>
      </section>

      {/* Final CTA */}
      <section className="mx-auto max-w-4xl px-6 py-24">
        <h2 className="text-3xl font-bold md:text-5xl">
          Your next creative adventure starts here.
        </h2>

        <p className="mt-8 max-w-2xl text-lg leading-8">
          Bring your curiosity. Bring your imagination. Bring your willingness
          to try something new.
        </p>

        <p className="mt-6 max-w-2xl text-lg leading-8">
          We&apos;ll bring the pencils, paint, pixels, and possibilities.
        </p>

        <a
          href="/enroll"
          className="mt-10 inline-block font-semibold underline underline-offset-4"
        >
          Enroll Now →
        </a>
      </section>

    </main>
  );
}
