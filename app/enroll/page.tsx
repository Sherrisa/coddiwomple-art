export default function EnrollPage() {
  return (
    <main className="min-h-screen px-6 py-16 md:px-12 lg:px-24">
      <div className="mx-auto max-w-3xl">
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-gray-500">
          Coddiwomple Art
        </p>

        <h1 className="text-5xl font-semibold tracking-tight md:text-6xl">
          Enroll
        </h1>

        <div className="mt-12">
          <p className="text-xl leading-8 text-gray-600">
            Ready to get creative? Enrollment information for upcoming
            courses will be available here.
          </p>

          <button className="mt-8 rounded-md bg-black px-6 py-3 text-sm font-medium text-white hover:bg-gray-800">
            Enrollment Coming Soon
          </button>
        </div>
      </div>
    </main>
  );
}