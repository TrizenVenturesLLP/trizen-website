import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Mail, Send } from "lucide-react";
import SectionHeader from "@/components/marketing/SectionHeader";
import PageMeta from "@/components/marketing/PageMeta";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { siteConfig } from "@/content/site";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    setSubmitting(true);

    // Placeholder until Formspree / HubSpot / webhook is wired
    window.setTimeout(() => {
      setSubmitting(false);
      form.reset();
      toast({
        title: "Request received",
        description:
          "Thanks, our team will follow up shortly. You can also book time via the calendar.",
      });
    }, 600);
  };

  return (
    <>
      <PageMeta
        title="Contact"
        path="/contact"
        description="Book a consultation with Trizen. Tell us about your AI initiative and we'll respond with next steps."
      />
      <section className="border-b border-zinc-200 bg-white py-20 md:py-28">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 16 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <SectionHeader
              eyebrow="Contact"
              title="Book a consultation"
              description="Tell us about your initiative. We'll respond with next steps, or book time directly on the calendar."
            />
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24 border-b border-zinc-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            <motion.div
              initial={{ y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, ease: "easeOut" }}
            >
              <div className="glass-panel rounded-xl p-8 md:p-10 h-full flex flex-col">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-zinc-200 bg-zinc-50 text-accent mb-6">
                  <Calendar className="h-5 w-5" />
                </div>
                <h2 className="text-2xl font-semibold tracking-tight text-foreground mb-3">
                  Schedule a briefing
                </h2>
                <p className="text-zinc-600 leading-relaxed mb-8">
                  Prefer to pick a time? Embed your Cal.com or Calendly link here.
                  Until connected, reach us by email and we will propose slots.
                </p>

                {/* Placeholder for Cal.com / Calendly embed */}
                <div className="flex-grow min-h-[280px] rounded-lg border border-dashed border-zinc-300 bg-white/[0.03] flex flex-col items-center justify-center px-6 text-center mb-8">
                  <p className="font-mono text-[11px] uppercase tracking-widest text-zinc-600 mb-3">
                    Calendar embed
                  </p>
                  <p className="text-sm text-zinc-600 max-w-xs">
                    Replace this panel with your Cal.com iframe or scheduling widget.
                  </p>
                </div>

                <a
                  href={`mailto:${siteConfig.email}`}
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                >
                  <Mail className="h-4 w-4" />
                  {siteConfig.email}
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: 0.08, ease: "easeOut" }}
            >
              <form
                onSubmit={handleSubmit}
                className="glass-panel rounded-xl p-8 md:p-10 space-y-6"
              >
                <div>
                  <h2 className="text-2xl font-semibold tracking-tight text-foreground mb-2">
                    Send a project brief
                  </h2>
                  <p className="text-sm text-zinc-600">
                    Work email preferred. We typically respond within one business day.
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    required
                    autoComplete="name"
                    placeholder="Your full name"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Work email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="you@company.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input
                    id="company"
                    name="company"
                    required
                    autoComplete="organization"
                    placeholder="Organization name"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="scope">Project scope</Label>
                  <Textarea
                    id="scope"
                    name="scope"
                    required
                    rows={5}
                    placeholder="Outcomes, timelines, systems involved, and any constraints we should know."
                    className="min-h-[120px] resize-y"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full" disabled={submitting}>
                  {submitting ? "Sending…" : "Submit request"}
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
