import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        {
          success: false,
          error: "All fields are required.",
        },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL!,
      subject: `New Portfolio Message from ${name}`,
      replyTo: email,

      html: `
        <div style="font-family:Arial,sans-serif;padding:20px;">
            <h2>New Contact Form Submission</h2>

            <p><strong>Name:</strong></p>
            <p>${name}</p>

            <p><strong>Email:</strong></p>
            <p>${email}</p>

            <p><strong>Message:</strong></p>

            <div style="background:#f4f4f4;padding:15px;border-radius:8px;">
                ${message.replace(/\n/g, "<br/>")}
            </div>
        </div>
      `,
    });

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        error: "Something went wrong.",
      },
      {
        status: 500,
      }
    );
  }
}