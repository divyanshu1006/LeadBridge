import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validations";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate input
    const result = contactFormSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          error: "Validation failed",
          details: result.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const { name, company, email, phone, message } = result.data;

    // Log the submission (in production, send email via Resend/EmailJS)
    console.log("📧 New contact form submission:", {
      name,
      company: company || "Not provided",
      email,
      phone,
      message,
      timestamp: new Date().toISOString(),
    });

    // TODO: Integrate with Resend (free tier: 100 emails/day)
    // import { Resend } from 'resend';
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'LeadBridge <noreply@leadbridge.in>',
    //   to: process.env.CONTACT_FORM_TO_EMAIL!,
    //   subject: `New Lead: ${name} from ${company || 'Unknown'}`,
    //   html: `<h2>New Contact Form Submission</h2>
    //     <p><strong>Name:</strong> ${name}</p>
    //     <p><strong>Company:</strong> ${company || 'Not provided'}</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //     <p><strong>Phone:</strong> ${phone}</p>
    //     <p><strong>Message:</strong> ${message}</p>`,
    // });

    return NextResponse.json(
      {
        success: true,
        message: "We'll get back to you within 24 hours!",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Internal server error",
      },
      { status: 500 }
    );
  }
}
