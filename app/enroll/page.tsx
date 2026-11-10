import EnrollmentForm from "@/components/enrollment-form";

export default function EnrollPage() {
  return (
    <main className="min-h-screen px-6 pt-[45vh] pb-16 md:px-12 lg:px-24">
      <div className="mx-auto max-w-3xl">
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-gray-500">
          Coddiwomple Art
        </p>

        <h1 className="text-5xl font-semibold tracking-tight md:text-6xl">
          Join the Waitlist
        </h1>

        <div className="mt-12">
          <p className="text-xl leading-8 text-gray-600">
            Our Digital Animation class is currently full!
          </p>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Interested in joining us? Complete the form below to be added to our
            waitlist. If a spot becomes available or we open a second section,
            we&apos;ll contact you with the details.
          </p>

          <p className="mt-4 text-base leading-7 text-gray-600">
            Joining the waitlist does not guarantee enrollment, and no payment
            is required at this time.
          </p>

          <EnrollmentForm />
        </div>
      </div>
    </main>
  );
}
