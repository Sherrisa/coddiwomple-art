import EnrollmentForm from "@/components/enrollment-form";

export default function EnrollPage() {
  return (
    <main className="min-h-screen px-6 py-16 md:px-12 lg:px-24">
      <div className="mx-auto max-w-3xl">
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-gray-500">
          Coddiwomple Art
        </p>

        <h1 className="text-5xl font-semibold tracking-tight md:text-6xl">
          Reserve Your Spot
        </h1>

        <div className="mt-12">
          <p className="text-xl leading-8 text-gray-600">
            Your next creative adventure starts here.
          </p>

          <EnrollmentForm />
        </div>
      </div>
    </main>
  );
}