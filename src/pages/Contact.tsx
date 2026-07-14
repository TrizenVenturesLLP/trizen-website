import { FormEvent, useState } from "react";
import { Calendar, Check, Clock, Mail, Send, Video } from "lucide-react";
import SectionHeader from "@/components/marketing/SectionHeader";
import PageMeta from "@/components/marketing/PageMeta";
import FadeIn from "@/components/marketing/FadeIn";
import { BookButton } from "@/components/page";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { siteConfig } from "@/content/site";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

const CALENDLY_URL = "https://calendly.com/projects-trizen/consultation";
const CONTACT_FORM_EMAIL = siteConfig.email;

const scheduleHighlights = [
  { icon: Clock, label: "30 minutes" },
  { icon: Video, label: "Video call" },
  { icon: Check, label: "No obligation" },
] as const;

const Contact = () => {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const company = String(data.get("company") ?? "").trim();
    const scope = String(data.get("scope") ?? "").trim();

    const subject = `Consultation request from ${name}${company ? ` (${company})` : ""}`;
    const body = [
      "Hello Trizen team,",
      "",
      "I would like to book a consultation.",
      "",
      `Name: ${name}`,
      `Work email: ${email}`,
      `Company: ${company}`,
      "",
      "Project scope:",
      scope,
      "",
      "Sent from the Trizen website contact form.",
    ].join("\n");

    const mailto = `mailto:${CONTACT_FORM_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setSubmitting(true);
    window.location.href = mailto;

    window.setTimeout(() => {
      setSubmitting(false);
      form.reset();
      toast({
        title: "Opening your email app",
        description: `Your message is ready to send to ${CONTACT_FORM_EMAIL}.`,
      });
    }, 400);
  };

  return (
    <>
      <PageMeta
        title="Contact"
        path="/contact"
        description="Book a consultation with Trizen. Schedule a call or send a project brief and we'll respond with next steps."
      />

      <section className="relative overflow-hidden border-b border-zinc-200 section-mesh pt-28 pb-20 sm:pt-32 md:pt-36 md:pb-28">
        <div className="mobile-orb -right-10 top-12 h-48 w-48 bg-indigo-400/20 md:hidden" aria-hidden />
        <div className="mobile-orb -left-8 bottom-0 h-40 w-40 bg-sky-400/15 md:hidden" aria-hidden />
        <div className="container relative mx-auto px-4 max-w-3xl">
          <FadeIn y={12}>
            <SectionHeader
              tone="light"
              eyebrow="Contact"
              title="Let's scope your next AI initiative"
              description="Book a live briefing with our team, or send a short project brief. We typically respond within one business day."
            />
            <ul className="mt-8 flex flex-wrap gap-2.5" aria-label="What to expect">
              {["Outcome framing", "Delivery path", "Clear next steps"].map((item) => (
                <li
                  key={item}
                  className="inline-flex items-center gap-1.5 rounded-full border border-indigo-100 bg-white/80 px-3.5 py-1.5 text-xs font-medium text-zinc-700 shadow-sm shadow-indigo-500/5 backdrop-blur-sm"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </section>

      <section className="relative overflow-hidden py-14 md:py-20 border-b border-zinc-200 section-mesh-muted">
        <div className="mobile-orb right-0 top-24 h-44 w-44 bg-indigo-400/15 md:hidden" aria-hidden />
        <div className="container relative mx-auto px-4 max-w-6xl">
          <div className="flex flex-col lg:flex-row lg:items-stretch gap-5 md:gap-6 lg:gap-0">
            <FadeIn
              as="article"
              y={12}
              className={cn(
                "card-sheen relative flex h-full flex-col overflow-hidden rounded-2xl md:rounded-3xl border border-indigo-100/90",
                "bg-gradient-to-br from-white via-indigo-50/40 to-sky-50/50",
                "p-6 sm:p-8 shadow-lg shadow-indigo-500/10",
                "lg:flex-1 lg:min-w-0"
              )}
            >
              <div
                className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-indigo-400/20 blur-3xl"
                aria-hidden
              />
              <div className="relative flex flex-1 flex-col">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-zinc-900 text-white shadow-md shadow-zinc-900/20 mb-5">
                  <Calendar className="h-5 w-5" aria-hidden />
                </div>
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-indigo-600 mb-2">
                  Preferred path
                </p>
                <h2 className="text-xl sm:text-2xl font-semibold tracking-[-0.03em] text-zinc-900 mb-3">
                  Schedule a briefing
                </h2>
                <p className="text-sm text-zinc-600 leading-relaxed mb-6">
                  A focused 30-minute conversation on outcomes, constraints, and whether Trizen is
                  the right operating partner for your initiative.
                </p>

                <ul className="flex flex-col gap-2.5 mb-8">
                  {scheduleHighlights.map(({ icon: Icon, label }) => (
                    <li
                      key={label}
                      className="inline-flex items-center gap-2.5 rounded-xl border border-white/90 bg-white/90 px-3.5 py-2.5 text-sm font-medium text-zinc-700 shadow-sm"
                    >
                      <Icon className="h-4 w-4 text-indigo-600 shrink-0" aria-hidden />
                      {label}
                    </li>
                  ))}
                </ul>

                <BookButton
                  href={CALENDLY_URL}
                  label="Book a time on Calendly"
                  className="mt-auto w-full min-h-12 pl-6 pr-2"
                />
              </div>
            </FadeIn>

            <div
              className="flex shrink-0 items-center gap-4 lg:flex-col lg:justify-center lg:gap-3 lg:px-5 xl:px-7"
              role="separator"
              aria-label="Or"
            >
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-zinc-300 to-transparent lg:h-auto lg:w-px lg:flex-1 lg:bg-gradient-to-b lg:from-transparent lg:via-zinc-300 lg:to-transparent" />
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-400 shrink-0">
                or
              </span>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-zinc-300 to-transparent lg:h-auto lg:w-px lg:flex-1 lg:bg-gradient-to-b lg:from-transparent lg:via-zinc-300 lg:to-transparent" />
            </div>

            <FadeIn delay={0.06} y={12} className="h-full lg:flex-1 lg:min-w-0">
              <form
                onSubmit={handleSubmit}
                className={cn(
                  "card-sheen relative flex h-full flex-col overflow-hidden rounded-2xl md:rounded-3xl border border-zinc-200/90",
                  "bg-white p-6 sm:p-8 shadow-lg shadow-zinc-900/5"
                )}
              >
                <div className="mb-6">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 ring-1 ring-indigo-100 mb-5">
                    <Mail className="h-5 w-5" aria-hidden />
                  </div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-indigo-600 mb-2">
                    Async option
                  </p>
                  <h2 className="text-xl sm:text-2xl font-semibold tracking-[-0.03em] text-zinc-900 mb-2">
                    Send a project brief
                  </h2>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    Prefer writing first? Submit opens your email client with a message ready for{" "}
                    <span className="font-medium text-zinc-800">{CONTACT_FORM_EMAIL}</span>.
                  </p>
                </div>

                <div className="flex flex-1 flex-col gap-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        required
                        autoComplete="name"
                        placeholder="Your full name"
                        className="h-11 bg-zinc-50/80 border-zinc-200 focus-visible:bg-white"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="email">Work email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        placeholder="you@company.com"
                        className="h-11 bg-zinc-50/80 border-zinc-200 focus-visible:bg-white"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="company">Company</Label>
                    <Input
                      id="company"
                      name="company"
                      required
                      autoComplete="organization"
                      placeholder="Organization name"
                      className="h-11 bg-zinc-50/80 border-zinc-200 focus-visible:bg-white"
                    />
                  </div>

                  <div className="flex flex-1 flex-col space-y-1.5">
                    <Label htmlFor="scope">Project scope</Label>
                    <Textarea
                      id="scope"
                      name="scope"
                      required
                      rows={4}
                      placeholder="Outcomes you care about, timelines, systems involved, and any constraints we should know."
                      className="min-h-[100px] flex-1 resize-y bg-zinc-50/80 border-zinc-200 focus-visible:bg-white"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="btn-micro mt-auto w-full min-h-12 shadow-md shadow-indigo-500/20"
                    disabled={submitting}
                  >
                    {submitting ? "Opening email…" : "Submit request"}
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </form>
            </FadeIn>
          </div>

          <p className="mt-8 text-center text-xs text-zinc-500">
            Prefer to reach us directly?{" "}
            <a
              href={`mailto:${CONTACT_FORM_EMAIL}`}
              className="font-medium text-indigo-600 hover:text-indigo-700 transition-colors"
            >
              {CONTACT_FORM_EMAIL}
            </a>
          </p>
        </div>
      </section>
    </>
  );
};

export default Contact;
