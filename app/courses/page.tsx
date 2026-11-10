import AnimatedLink from "@/components/animated-link";

export default function CoursesPage() {
  return (
    <main className="min-h-screen px-6 pt-[45vh] pb-16 md:px-12 lg:px-24">
      <div className="mx-auto max-w-4xl">
        {/* Page Header */}
        <section>
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-gray-500">
            Coddiwomple Art
          </p>

          <h1 className="text-5xl font-semibold tracking-tight md:text-6xl">
            Courses
          </h1>

          <p className="mt-8 max-w-2xl text-xl leading-8 text-gray-600">
            Art. Technology. Exploration.
          </p>
        </section>

        {/* Course Introduction */}
        <section className="mt-20 max-w-3xl">
          <p className="text-lg leading-8">
            Coddiwomple Art is an art class enhanced by technology.
          </p>

          <p className="mt-6 text-lg leading-8">
            Students build real-world art and design skills while exploring
            digital tools as another creative medium. We draw, paint, experiment
            with color, think about composition, and learn to see the world like
            artists and designers.
          </p>

          <p className="mt-6 text-lg leading-8">
            Then we bring technology into the process and see where it can take
            us.
          </p>
        </section>

        {/* Featured Course: Digital Animation */}
        <section className="mt-20 rounded-2xl bg-gray-100 p-8 md:p-12">
          <p className="text-sm font-medium uppercase tracking-widest text-gray-500">
            Featured Course · Class Full
          </p>

          <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
            Digital Animation
          </h2>

          <p className="mt-3 text-xl font-medium">Bring Your Art to Life!</p>

          <p className="mt-4 text-base text-gray-600">Grades 1–6 · $75</p>

          <p className="mt-5 text-lg font-medium">
            Tuesdays · November 17–December 15, 2026
          </p>

          <p className="mt-2 text-base text-gray-600">
            3:15–4:00 PM · Five weeks
            <br />
            The Coffee Shop · Brooklake Christian Schools
          </p>

          <h3 className="mt-8 text-2xl font-semibold">
            Make it move. Tell a story. See what happens next.
          </h3>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            In this fun, hands-on five-week course, students explore digital
            animation using Adobe Fresco on the iPad.
          </p>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Students learn how to make their drawings move, experiment with
            frame by frame animation, and discover how timing and movement can
            bring their creative ideas to life.
          </p>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Projects include original animated artwork and a festive holiday
            greeting to share with family and friends!
          </p>

          <h3 className="mt-10 text-xl font-semibold">
            Students will explore:
          </h3>

          <ul className="mt-4 space-y-3 text-lg leading-8 text-gray-600">
            <li>Drawing for animation</li>
            <li>Frames and sequencing</li>
            <li>Movement and timing</li>
            <li>Layers and independent elements</li>
            <li>Frame by frame animation</li>
            <li>Visual storytelling</li>
            <li>Digital animation tools in Adobe Fresco</li>
          </ul>

          <p className="mt-10 text-lg font-medium leading-8">
            Prerequisite: Digital Drawing
          </p>

          <p className="mt-4 text-lg leading-8 text-gray-600">
            This course builds on the skills students developed in Digital
            Drawing. No previous animation experience is required.
          </p>

          <div className="mt-10">
            <AnimatedLink href="/enroll" dotRadius={5} duration="14s">
              Join the Waitlist →
            </AnimatedLink>
          </div>
        </section>

        {/* What Makes Coddiwomple Different */}
        <section className="mt-20">
          <h2 className="text-3xl font-semibold md:text-4xl">
            What Makes Coddiwomple Different?
          </h2>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-600">
            Coddiwomple Art isn&apos;t about choosing between traditional art
            and technology.
          </p>

          <p className="mt-6 text-xl font-semibold">We use both.</p>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Students learn foundational art skills they can practice
            anywhere—with a pencil, a paintbrush, or a piece of paper.
          </p>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Then they discover how technology can expand the creative process.
          </p>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            They learn to make decisions, solve visual problems, experiment with
            possibilities, and develop their own ideas.
          </p>

          <p className="mt-8 max-w-3xl text-xl font-semibold leading-8">
            Art is the foundation.
            <br />
            Technology is another way to explore.
          </p>
        </section>

        {/* What Students Learn */}
        <section className="mt-20">
          <h2 className="text-3xl font-semibold md:text-4xl">
            What Students Learn
          </h2>

          <div className="mt-10 space-y-12">
            <div>
              <h3 className="text-2xl font-semibold">Drawing</h3>

              <p className="mt-4 max-w-3xl text-lg leading-8 text-gray-600">
                Learn to look closely and understand what you&apos;re seeing.
                Explore concepts such as value, light, shading, negative space,
                proportion, and form.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold">Color</h3>

              <p className="mt-4 max-w-3xl text-lg leading-8 text-gray-600">
                Explore how colors work together. Create color palettes and
                experiment with how changing color can change an artwork.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold">Composition</h3>

              <p className="mt-4 max-w-3xl text-lg leading-8 text-gray-600">
                Discover how elements interact on a page. Explore placement,
                scale, space, shape, and color to create visual relationships.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold">Creative Technology</h3>

              <p className="mt-4 max-w-3xl text-lg leading-8 text-gray-600">
                Use digital tools to experiment in ways that aren&apos;t always
                possible with traditional materials. Change it. Move it. Layer
                it. Try something new.
              </p>
            </div>
          </div>
        </section>

        {/* From Paper to Pixel */}
        <section className="mt-20">
          <h2 className="text-3xl font-semibold md:text-4xl">
            From Paper to Pixel
          </h2>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-600">
            Some of our favorite experiments begin with something you can hold
            in your hands.
          </p>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Students may draw or paint traditionally, then bring their artwork
            into the digital environment.
          </p>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            A watercolor painting might become a digital composition.
          </p>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            A hand-drawn image might be recolored, layered, or transformed.
          </p>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            A simple color study might become the starting point for something
            completely different.
          </p>

          <p className="mt-8 max-w-3xl text-lg font-semibold leading-8">
            Technology gives artists room to experiment.
          </p>

          <p className="mt-4 max-w-3xl text-lg leading-8 text-gray-600">
            And sometimes the most interesting destination is the one you
            didn&apos;t plan to reach.
          </p>
        </section>

        {/* Upcoming Course: Digital Color & Composition */}
        <section className="mt-20 rounded-2xl bg-gray-100 p-8 md:p-12">
          <p className="text-sm font-medium uppercase tracking-widest text-gray-500">
            Upcoming Course
          </p>

          <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
            Digital Color &amp; Composition
          </h2>

          <p className="mt-5 text-lg font-medium">
            Coming in 2027 · Details to be announced
          </p>

          <h3 className="mt-8 text-2xl font-semibold">
            Explore color. Combine elements. Create with intention.
          </h3>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Discover how artists use color, composition, and visual
            relationships to bring their ideas together.
          </p>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Students will work with multiple visual references, combining
            images, illustrations, and original artwork to create cohesive
            compositions. They&apos;ll experiment with arrangement, scale,
            contrast, and color to discover how individual elements interact
            within a larger piece.
          </p>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Through hands-on projects, students will explore how the same
            principles can be used in digital illustrations, posters, and page
            layouts, including creative work for their school community.
          </p>

          <h3 className="mt-10 text-xl font-semibold">Students may explore:</h3>

          <ul className="mt-4 space-y-3 text-lg leading-8 text-gray-600">
            <li>Color theory and color relationships</li>
            <li>Creating and using color palettes</li>
            <li>Combining multiple visual references</li>
            <li>Composition, balance, and visual hierarchy</li>
            <li>Scale, placement, and negative space</li>
            <li>Working with images and illustrations</li>
            <li>Creative page layouts and graphic design</li>
          </ul>

          <p className="mt-10 text-lg font-medium leading-8">
            Learn to see how everything works together.
          </p>

          <p className="mt-4 text-lg leading-8 text-gray-600">
            From a single illustration to a complete page design, students will
            learn to make thoughtful creative decisions that help their artwork
            communicate an idea.
          </p>
        </section>

        
        <section className="mt-16 border-t border-gray-200 pt-12 pb-4">
          <h2 className="text-2xl font-semibold md:text-3xl">
            More Creative Adventures Ahead!
          </h2>

          <p className="mt-4 max-w-2xl text-lg leading-8 text-gray-600">
            Digital Animation is currently full, but you can join our waitlist!
            If a spot becomes available or we open a second section, we&apos;ll
            contact you.
          </p>

          <div className="mt-6">
            <AnimatedLink href="/enroll" dotRadius={5} duration="14s">
              Join the Waitlist →
            </AnimatedLink>
          </div>
        </section>
      </div>
    </main>
  );
}
