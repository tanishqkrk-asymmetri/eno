import React from "react";
import { motion } from "motion/react";
import {
  Shield,
  Eye,
  Activity,
  Users,
  ArrowRight,
  Lock,
  MapPin,
  Radio,
  Network,
} from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const Section = ({
  // @ts-expect-error later

  children,
  className = "",
}) => (
  <section className={`py-20 px-6 md:px-12 max-w-7xl mx-auto ${className}`}>
    {children}
  </section>
);

const ENOughLanding = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-orange-500 selection:text-white overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-bold text-2xl tracking-tighter">eNOugh</div>
          <button className="bg-slate-900 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-orange-600 transition-colors">
            Join Waitlist
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative pt-32 pb-20 bg-black text-white">
        <Section>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <motion.div
                variants={fadeInUp}
                className="inline-block px-3 py-1 mb-6 text-xs font-semibold tracking-wide text-orange-400 uppercase bg-orange-900/30 rounded-full"
              >
                £2.7M Seed Funding Raised
              </motion.div>
              <motion.h1
                variants={fadeInUp}
                className="text-5xl md:text-7xl font-bold leading-tight mb-6"
              >
                Safety shouldn't be{" "}
                <span className="text-orange-500">luck.</span>
              </motion.h1>
              <motion.p
                variants={fadeInUp}
                className="text-xl text-slate-300 mb-8 max-w-lg"
              >
                Meeting the lack of safety in our cities with the{" "}
                <strong>eNO badge</strong>—the first AI wearable threat
                detection device.
              </motion.p>
              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4"
              >
                <button className="bg-orange-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-600 transition-transform hover:scale-105 flex items-center gap-2">
                  Get Early Access <ArrowRight size={20} />
                </button>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="mt-12 p-6 border-l-4 border-orange-500 bg-slate-800/50 rounded-r-lg"
              >
                <p className="italic text-slate-300 mb-4">
                  "With the rise of multimodal AI... there’s a unique
                  opportunity to create a safer world for everyone. What eNOugh
                  is building is hugely important."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-slate-600 rounded-full overflow-hidden">
                    {/* Placeholder for investor avatar if needed */}
                  </div>
                  <div>
                    <p className="font-bold text-sm">Kevin Hartz</p>
                    <p className="text-xs text-slate-400">
                      General Partner, A*Ventures (Co-founder Eventbrite)
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              variants={fadeInUp}
              className="relative aspect-square bg-slate-800 rounded-3xl overflow-hidden flex items-center justify-center border border-slate-700 shadow-2xl"
            >
              {/* Image of eNO badge AI wearable device */}

              <div className="absolute bottom-6 left-6 right-6 bg-slate-900/90 backdrop-blur p-4 rounded-xl border border-slate-700">
                <div className="flex items-center gap-3 text-sm text-green-400 font-mono">
                  <Activity size={16} className="animate-pulse" />
                  <span>System Active: Monitoring Environment</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </Section>
      </div>

      {/* The Origin Story */}
      <Section className="bg-white">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="text-3xl font-bold mb-8">
              The Catalyst
            </motion.h2>
            <motion.div
              variants={fadeInUp}
              className="prose prose-lg text-slate-600"
            >
              <p className="font-serif italic text-xl text-slate-800 mb-6 border-l-4 border-slate-900 pl-4">
                "You're lucky you weren't stabbed. You should never fight back."
              </p>
              <p>
                London, October 12th, 2021. Ina Jovicic was walking home from
                dinner in a well-lit area when four men circled and attacked
                her. She fought back, but was dragged into the street and
                robbed.
              </p>
              <p>
                When the police arrived, their advice became the fuel for
                action. Ina realized that "getting home safe" required mission
                planning: the fake phone call, keys between knuckles, route
                strategy. She partnered with Gaelic and Alex to ensure safety is
                a norm, not a luxury.
              </p>
            </motion.div>
            <div className="mt-8"></div>
          </motion.div>
        </div>
      </Section>

      {/* The Problem / Stats */}
      <div className="bg-slate-100 py-20">
        <Section>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-center text-3xl md:text-4xl font-bold mb-16"
            >
              This isn't just a London problem.
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  val: "68%",
                  desc: "of women aged 18-24 feel unsafe walking home at night.",
                },
                {
                  val: "1 in 2",
                  desc: "women feel unsafe walking alone after dark in public places.",
                },
                {
                  val: "< 1%",
                  desc: "of thefts in London actually get solved.",
                },
                {
                  val: "62%",
                  desc: "have stopped doing things they love because of fear.",
                },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="text-4xl font-black text-orange-500 mb-4">
                    {stat.val}
                  </div>
                  <p className="text-slate-600 font-medium">{stat.desc}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              variants={fadeInUp}
              className="mt-16 text-center max-w-2xl mx-auto"
            >
              <p className="text-slate-500 mb-4 font-semibold uppercase tracking-wider text-xs">
                Current Solutions Fail
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  "Pepper Spray (Illegal in UK)",
                  "Panic Buttons",
                  "Tracking Apps",
                  "Keychain Tools",
                ].map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 bg-slate-200 text-slate-500 rounded-lg line-through text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </Section>
      </div>

      {/* The Solution */}
      <Section className="bg-slate-900 text-white overflow-hidden">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          <div>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-5xl font-bold mb-8"
            >
              Deterrence through Visibility. <br />
              <span className="text-orange-500">
                Protection through Presence.
              </span>
            </motion.h2>

            <motion.div variants={fadeInUp} className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-500 shrink-0">
                  <Eye size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Threat Detection</h3>
                  <p className="text-slate-400">
                    Grounded in multimodal signals, the badge detects when you
                    are under threat. It records evidence via a built-in camera
                    and mic, and instantly alerts emergency operators.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-500 shrink-0">
                  <Shield size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Threat Deterrence</h3>
                  <p className="text-slate-400">
                    Designed to be bright and unmissable. Attackers see a camera
                    recording and live-streaming evidence. This flips the
                    paradigm from reactive to proactive.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-500 shrink-0">
                  <Network size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Network Effects</h3>
                  <p className="text-slate-400">
                    Each badge is a node in a distributed AI network. Wearing
                    one on a Tuesday trains the AI to better protect someone
                    else on Wednesday.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div variants={fadeInUp} className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-purple-600 rounded-3xl blur-3xl opacity-20"></div>
            <div className="relative bg-slate-800 border border-slate-700 rounded-3xl aspect-[4/5] flex flex-col items-center justify-center p-8 text-center">
              [Image of eNO badge technical diagram showing camera and sensors]
              <p className="mt-4 text-sm text-slate-500">
                Visualization of eNO Badge Sensor Array
              </p>
            </div>
          </motion.div>
        </motion.div>
      </Section>

      {/* The Team */}
      <Section className="bg-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl font-bold mb-12 text-center"
          >
            Built by those who care
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Ina",
                role: "Co-founder / CEO",
                bio: "Former Entrepreneurship student at UCL. Driven by her personal experience to reclaim safety.",
                quote:
                  "We want to give people the freedom to live without limitations.",
              },
              {
                name: "Gaelic",
                role: "Co-founder / CTO",
                bio: "Electronic engineer who left his masters to build the physical hardware that makes eNOugh reliable.",
                quote: "You need something physical, visible, and reliable.",
              },
              {
                name: "Alex",
                role: "Co-founder / CSO",
                bio: "Computer science expert taking AI out of the lab and into the streets.",
                quote:
                  "We support people in the moments that actually feel human.",
              },
            ].map((member, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="flex flex-col h-full border border-slate-100 rounded-2xl p-6 shadow-sm"
              >
                <div className="w-16 h-16 bg-slate-200 rounded-full mb-4 self-center">
                  {/* Placeholder for team headshots */}
                </div>
                <h3 className="text-xl font-bold text-center">{member.name}</h3>
                <p className="text-orange-600 text-sm font-semibold text-center mb-4">
                  {member.role}
                </p>
                <p className="text-slate-600 text-sm mb-6 flex-grow">
                  {member.bio}
                </p>
                <blockquote className="text-xs italic text-slate-500 border-t pt-4">
                  "{member.quote}"
                </blockquote>
              </motion.div>
            ))}
          </div>
          <div className="mt-8 text-center"></div>
        </motion.div>
      </Section>

      {/* Footer / CTA */}
      <div className="bg-orange-500 text-white py-24">
        <Section>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Reclaim your freedom.
            </h2>
            <p className="text-xl mb-10 text-orange-50">
              We have opened the waitlist. Subscribers get early bird discounts
              and priority access to the first batch. Join the movement.
            </p>
            <form className="flex flex-col md:flex-row gap-4 justify-center max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-6 py-4 rounded-full text-slate-900 focus:outline-none focus:ring-4 focus:ring-orange-300 w-full"
              />
              <button className="bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-slate-800 transition-colors whitespace-nowrap">
                Join Waitlist
              </button>
            </form>
            <p className="mt-8 text-sm opacity-80">
              Collaborating with universities, hospitals, and nightlife venues
              across London.
            </p>
          </motion.div>
        </Section>
      </div>
    </div>
  );
};

export default ENOughLanding;
