
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({...form, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast({ description: "Please fill all fields." });
      return;
    }
    // In a real app, you would send the message here
    toast({ description: "Message sent successfully!" });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-12 px-4 md:px-8 bg-gray-900 rounded-xl my-8">
      <h2 className="text-2xl font-semibold text-white mb-6 text-center">Contact Me</h2>
      <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-8">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="bg-gray-800 border border-gray-700 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-green-600"
            value={form.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="bg-gray-800 border border-gray-700 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-green-600"
            value={form.email}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={4}
            className="resize-none bg-gray-800 border border-gray-700 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-green-600"
            value={form.message}
            onChange={handleChange}
          />
          <Button type="submit" className="self-start">Send Message</Button>
        </form>
        <div className="flex flex-col justify-center text-gray-400 space-y-4">
          <div className="flex items-center gap-3">
            <Phone className="text-green-500" />
            <span>+91 12345 67890</span>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="text-green-500" />
            <span>shubhgupta@example.com</span>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="text-green-500" />
            <span>Delhi, India</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
