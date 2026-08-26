export default function CoursesPage() {
  return (
    <main className="min-h-screen px-6 py-16 md:px-12 lg:px-24">
      <div className="mx-auto max-w-4xl">
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-gray-500">
          Coddiwomple Art
        </p>

        <h1 className="text-5xl font-semibold tracking-tight md:text-6xl">
          Courses
        </h1>

        <div className="mt-12 max-w-2xl rounded-2xl bg-gray-100 p-8">
          <p className="text-sm font-medium uppercase tracking-widest text-gray-500">
            Coming Soon
          </p>

          <h2 className="mt-3 text-3xl font-semibold">
            Digital Art
          </h2>

          <p className="mt-4 text-lg leading-8 text-gray-600">
            A six-week after-school course where students learn to create
            digital artwork using creative technology.
          </p>
        </div>
      </div>
    </main>
  );
}