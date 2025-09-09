"use server";

import { sendMail } from "@/lib/sendMail";

export async function submitContactForm(formData: FormData) {
  const name = formData.get("name")?.toString() || "";
  const email = formData.get("email")?.toString() || "";
  const message = formData.get("message")?.toString() || "";

  if (!name || !email || !message) {
    return { message: "All fields are required." };
  }

  try {
    await sendMail({ name, email, message });
    return {
      message: "Thanks for your message! I'll get back to you soon.",
    };
  } catch (error) {
    console.error("Mail send error:", error);
    return {
      message: "Failed to send message. Please try again later.",
    };
  }
}
