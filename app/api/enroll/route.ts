import { Resend } from "resend";

// Initial test: verified that the /api/enroll route could receive a POST request.
// Keeping this commented out as a record of the first backend milestone.

/*
export async function POST() {
  return Response.json({
    message: "Enrollment endpoint is working!",
  });
}
*/

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const formData = await request.formData();

  const studentName = formData.get("studentName");
  const parentName = formData.get("parentName");
  const parentEmail = formData.get("parentEmail");
  const parentPhone = formData.get("parentPhone");
  const course = formData.get("course");
  const message = formData.get("message");

  const { data, error } = await resend.emails.send({
    from: "Coddiwomple Art <onboarding@resend.dev>",
    to: ["sherrisaclasson@outlook.com"],
    subject: `New enrollment inquiry: ${course}`,
    html: `
      <h2>New Enrollment Inquiry</h2>

      <p><strong>Student:</strong> ${studentName}</p>
      <p><strong>Parent / Guardian:</strong> ${parentName}</p>
      <p><strong>Email:</strong> ${parentEmail}</p>
      <p><strong>Phone:</strong> ${parentPhone}</p>
      <p><strong>Course:</strong> ${course}</p>
      <p><strong>Message:</strong> ${message || "None"}</p>
    `,
  });

  if (error) {
    return Response.json({ error }, { status: 500 });
  }

  return Response.json({ success: true, data });
}