"use client";
import React, { useState } from "react";
import { Label } from "@/app/components/ui/input";
import { Input } from "@/app/components/ui/input";
import { cn } from "@/lib/utils";

const ContactPage = () => {
  const [status, setStatus] = useState<string>("");

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const form = e.currentTarget;
  const formData = new FormData(form);

  const data = {
    access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY!,
    firstname: formData.get("firstname") as string,
    lastname: formData.get("lastname") as string,
    email: formData.get("email") as string,
    subject: formData.get("subject") as string,
    message: formData.get("message") as string,
  };

  try {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await res.json();

    if (result.success) {
      setStatus("✅ Message sent successfully!");
      form.reset();
    } else {
      setStatus("❌ Failed to send message. Try again later.");
    }
  } catch {
    setStatus("⚠️ Network error. Please try again.");
  }
};

  return (
    <div className="shadow-input mx-auto w-full max-w-md rounded-none bg-black p-4 md:rounded-2xl md:p-8">
      <h2 className="text-xl font-bold text-white">Contact Me</h2>
      <p className="mt-2 max-w-sm text-sm text-gray-300">
        Have a question, project idea, or just want to say hi? Fill out the form
        below and I’ll get back to you as soon as possible.
      </p>

      <form className="my-8" onSubmit={handleSubmit}>
        <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
          <LabelInputContainer>
            <Label htmlFor="firstname" className="text-white">
              First Name
            </Label>
            <Input
              id="firstname"
              name="firstname"
              placeholder="John"
              type="text"
              required
              className="bg-zinc-800 text-white placeholder:text-gray-500"
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname" className="text-white">
              Last Name
            </Label>
            <Input
              id="lastname"
              name="lastname"
              placeholder="Doe"
              type="text"
              required
              className="bg-zinc-800 text-white placeholder:text-gray-500"
            />
          </LabelInputContainer>
        </div>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="email" className="text-white">
            Email Address
          </Label>
          <Input
            id="email"
            name="email"
            placeholder="you@example.com"
            type="email"
            required
            className="bg-zinc-800 text-white placeholder:text-gray-500"
          />
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="subject" className="text-white">
            Subject
          </Label>
          <Input
            id="subject"
            name="subject"
            placeholder="Project Inquiry"
            type="text"
            required
            className="bg-zinc-800 text-white placeholder:text-gray-500"
          />
        </LabelInputContainer>

        <LabelInputContainer className="mb-8">
          <Label htmlFor="message" className="text-white">
            Message
          </Label>
          <textarea
            id="message"
            name="message"
            placeholder="Write your message here..."
            required
            className={cn(
              "h-28 w-full rounded-md border-none bg-zinc-800 px-3 py-2 text-sm text-white placeholder:text-gray-500 shadow-[0px_0px_1px_1px_#404040] focus-visible:ring-[2px] focus-visible:ring-neutral-600 focus-visible:outline-none"
            )}
          ></textarea>
        </LabelInputContainer>

        <button
          className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-zinc-900 to-zinc-700 font-medium text-white shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
          type="submit"
        >
          Send Message &rarr;
          <BottomGradient />
        </button>
      </form>

      {status && (
        <p className="mt-4 text-sm text-cyan-400 font-medium">{status}</p>
      )}
    </div>
  );
};

export default ContactPage;

const BottomGradient = () => (
  <>
    <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
    <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
  </>
);

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={cn("flex w-full flex-col space-y-2", className)}>
    {children}
  </div>
);
