"use client";

import { useState } from "react";
import Link from "next/link";
import emailjs from "emailjs-com";
import { toast, Toaster } from "react-hot-toast";
import { ArrowLeft, Moon, Sun, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
  const [isDark, setIsDark] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    to_name: "Tushar", // Your name, set here to be used in the email template
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = event.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Form handling with EmailJS
    emailjs
      .sendForm(
        "service_4p8zn8q", // Service ID
        "template_ggrysys", // Template ID
        event.currentTarget, // The form reference
        "UCeJ3eCnEkU_n69jU" // Public Key
      )
      .then(
        (result) => {
          console.log("Email successfully sent!", result.text);
          toast.success("Your message has been sent successfully!");
          // Clear form after successful submission
          setFormData({ name: "", email: "", message: "", to_name: "Tushar" });
        },
        (error) => {
          console.error("Failed to send email.", error.text);
          toast.error("Failed to send your message. Please try again later.");
        }
      );
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${isDark ? "dark" : ""}`}
    >
      {/* Toaster for notifications */}
      <Toaster position="top-right" reverseOrder={false} />

      <div className="bg-background text-foreground min-h-screen px-4 sm:px-8 py-8">
        {/* Navigation */}
        <nav className="max-w-4xl mx-auto flex items-center justify-between mb-16">
          <Link
            href="/"
            className="text-primary hover:text-primary/80 transition-colors flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsDark(!isDark)}
            className="rounded-full"
          >
            {isDark ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>
        </nav>

        {/* Main Content */}
        <main className="max-w-4xl mx-auto space-y-16">
          <section className="space-y-6">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl animate-in fade-in slide-in-from-bottom-3 duration-500">
              Get in touch
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700">
              I&apos;m always open to new opportunities and collaborations. Feel free to reach out!
            </p>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="animate-in fade-in slide-in-from-bottom-5 duration-900">
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-4">
                  Contact Information
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-primary" />
                    <span>negitushar923@gmail.com</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Phone className="h-5 w-5 text-primary" />
                    <span>+91 99159 06157</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span>India, Chandigarh</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="animate-in fade-in slide-in-from-bottom-6 duration-1100">
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-4">Send a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-1"
                    >
                      Name
                    </label>
                    <Input
                      id="name"
                      name="user_name" // Matches template variable
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      autoComplete="off"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-1"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      name="user_email" // Matches template variable
                      type="email"
                      placeholder="Your email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      autoComplete="off"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-1"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message" // Matches template variable
                      placeholder="Your message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="resize-none"
                      autoComplete="off"
                    />
                  </div>

                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </main>

        {/* Footer */}
        <footer className="max-w-4xl mx-auto mt-24 pt-8 border-t">
          <p className="text-center text-sm text-muted-foreground">
            © 2023 Tushar Negi. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}
