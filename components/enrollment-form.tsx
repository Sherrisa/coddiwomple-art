"use client";

import type { SubmitEvent } from "react";

export default function EnrollmentForm() {
  async function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const response = await fetch("/api/enroll", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();

    if (response.ok) {
      form.reset();
      console.log("Enrollment submitted successfully!", result);
    } else {
      console.error("Enrollment submission failed.", result);
    }
  }

  return (
    <form className="mt-12 max-w-xl space-y-8" onSubmit={handleSubmit}>
      {/* Student information */}
      <fieldset className="space-y-4">
        <legend className="text-lg font-medium">Student Information</legend>

        <div>
          <label htmlFor="studentName" className="block text-sm font-medium">
            Student name
          </label>

          <input
            id="studentName"
            name="studentName"
            type="text"
            required
            className="mt-2 w-full rounded-md border px-4 py-3"
          />
        </div>
      </fieldset>

      {/* Parent / guardian information */}
      <fieldset className="space-y-4">
        <legend className="text-lg font-medium">
          Parent / Guardian Information
        </legend>

        <div>
          <label htmlFor="parentName" className="block text-sm font-medium">
            Parent / guardian name
          </label>

          <input
            id="parentName"
            name="parentName"
            type="text"
            required
            className="mt-2 w-full rounded-md border px-4 py-3"
          />
        </div>

        <div>
          <label htmlFor="parentEmail" className="block text-sm font-medium">
            Email
          </label>

          <input
            id="parentEmail"
            name="parentEmail"
            type="email"
            required
            className="mt-2 w-full rounded-md border px-4 py-3"
          />
        </div>

        <div>
          <label htmlFor="parentPhone" className="block text-sm font-medium">
            Phone
          </label>

          <input
            id="parentPhone"
            name="parentPhone"
            type="tel"
            required
            className="mt-2 w-full rounded-md border px-4 py-3"
          />
        </div>
      </fieldset>

      {/* Course selection */}
      <fieldset className="space-y-4">
        <legend className="text-lg font-medium">
          Which course are you interested in?
        </legend>

        <label className="flex items-center gap-3">
          <input type="radio" name="course" value="Digital Drawing" required />

          <span>Digital Drawing</span>
        </label>
      </fieldset>

      {/* Optional message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium">
          Anything else you&apos;d like us to know?{" "}
          <span className="font-normal">(optional)</span>
        </label>

        <textarea
          id="message"
          name="message"
          rows={4}
          className="mt-2 w-full rounded-md border px-4 py-3"
        />
      </div>

      <button
        type="submit"
        className="rounded-md bg-black px-6 py-3 text-sm font-medium text-white hover:bg-gray-800"
      >
        Submit Enrollment
      </button>
    </form>
  );
}
