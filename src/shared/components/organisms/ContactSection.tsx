import { useState } from "react";
import type { FormEvent } from "react";
import Button from "../atoms/Button";

interface ContactFormData {
    email: string;
    subject: string;
    message: string;
}

const initialFormData: ContactFormData = {
    email: "",
    subject: "",
    message: "",
};

function ContactSection() {
    const [formData, setFormData] = useState<ContactFormData>(initialFormData);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    }

    async function handleSubmit(e: FormEvent) {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus("idle");

        try {
            // TODO: Replace with actual API call
            // await fetch("/api/contact", {
            //     method: "POST",
            //     headers: { "Content-Type": "application/json" },
            //     body: JSON.stringify(formData),
            // });

            // Simulate network delay for now
            await new Promise((resolve) => setTimeout(resolve, 500));

            setSubmitStatus("success");
            setFormData(initialFormData);
        } catch {
            setSubmitStatus("error");
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <section id="contact" className="bg-black text-white font-mono my-20 py-10">
            <div className="container mx-auto px-5">
                <div className="py-5">
                    <h2 className="font-bold text-3xl sm:text-4xl">
                        <span className="inline-block border-b-3">CONTACT</span>
                    </h2>
                </div>

                <form onSubmit={handleSubmit} className="max-w-2xl mx-auto py-5 md:py-10">
                    <div className="mb-5">
                        <label htmlFor="email">ORIGIN_EMAIL</label>
                        <br />
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="USER@DOMAIN.COM"
                            required
                            className="px-2 py-3 bg-white text-neutral-900 placeholder:text-neutral-400 w-full focus:outline-none"
                        />
                    </div>

                    <div className="mb-5">
                        <label htmlFor="subject">TRANSMISSION_SUBJECT</label>
                        <br />
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            placeholder="BACKEND_PROJECT"
                            required
                            className="px-2 py-3 bg-white text-neutral-900 placeholder:text-neutral-400 w-full focus:outline-none"
                        />
                    </div>

                    <div className="mb-10 sm:mb-15">
                        <label htmlFor="message">MESSAGE_PAYLOAD</label>
                        <br />
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="ENTER MESSAGE..."
                            required
                            className="px-2 py-3 h-30 bg-white text-neutral-900 placeholder:text-neutral-400 w-full focus:outline-none resize-none"
                        />
                    </div>

                    {submitStatus === "success" && (
                        <p className="mb-5 text-green-400 font-bold">
                            TRANSMISSION_SENT ✓
                        </p>
                    )}
                    {submitStatus === "error" && (
                        <p className="mb-5 text-red-400 font-bold">
                            TRANSMISSION_FAILED — RETRY
                        </p>
                    )}

                    <Button
                        type="submit"
                        className="w-full"
                        variant="outlined"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? "TRANSMITTING..." : "SEND_TRANSMISSION"}
                    </Button>
                </form>
            </div>
        </section>
    );
}

export default ContactSection;
