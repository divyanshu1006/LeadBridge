import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validations";
import { siteConfig } from "@/lib/constants";

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
    const targetEmail = process.env.CONTACT_FORM_TO_EMAIL || siteConfig.email;

    // Log the submission
    console.log("📧 New contact form submission received:", {
      recipient: targetEmail,
      senderName: name,
      senderEmail: email,
      senderPhone: phone,
      company: company || "Not provided",
      message,
      timestamp: new Date().toISOString(),
    });

    // If RESEND_API_KEY is configured in environment, dispatch via native fetch
    if (process.env.RESEND_API_KEY) {
      try {
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "LeadBridge NCR <onboarding@resend.dev>",
            to: [targetEmail],
            cc: [email],
            reply_to: email,
            subject: `New Lead Inquiry from ${name} - LeadBridge NCR`,
            html: `
              <h2>New Contact Form Inquiry</h2>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Phone:</strong> ${phone}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Company:</strong> ${company || "Not provided"}</p>
              <hr />
              <p><strong>Message:</strong></p>
              <p style="white-space: pre-line;">${message}</p>
            `,
          }),
        });
      } catch (apiErr) {
        console.warn("Could not dispatch via Resend API:", apiErr);
      }
    }

    return NextResponse.json(
      {
        success: true,
        message: `Inquiry recorded for ${targetEmail}. Redirecting copy to your email client.`,
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
