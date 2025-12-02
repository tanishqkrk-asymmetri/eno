"use client";

import { X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

export default function Announce() {
  const [showWaitlist, setShowWaitlist] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <section className="relative">
      <AnimatePresence>
        {showWaitlist && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-99999999999999 bg-black/80 backdrop-blur-xl flex items-center justify-center h-screen p-4 "
            onClick={() => setShowWaitlist(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ delay: 0.1 }}
              className="bg-black border border-red-500/30 rounded-2xl max-w-md w-full shadow-2xl relative overflow-hidden 
               bg-radial-[at_50%_75%] from-red-900/60 via-red-900/50 to-red/50 to-90%
              "
              onClick={(e) => e.stopPropagation()}
            >
              {/* Decorative glow effect */}
              {/* <div className="absolute top-0 left-0 w-full h-32 bg-linear-to-b from-red-500/10 to-transparent pointer-events-none"></div> */}

              {/* Close button */}
              <button
                onClick={() => setShowWaitlist(false)}
                className="absolute top-4 right-4 px-4 py-2 border border-white/30 rounded-full text-white/80 hover:text-white hover:border-red-500/50 transition-all duration-300 text-sm backdrop-blur-sm bg-black/30 z-10"
              >
                <X></X>
              </button>

              {/* Form content */}
              <div className="px-8 py-12 md:px-12 md:py-16 space-y-6 relative">
                {/* Header */}
                <div className="space-y-3 mb-8">
                  <img src="/logo-new.png" className="w-16" alt="" />
                </div>

                {/* Form */}
                <form
                  className="space-y-4"
                  method="POST"
                  action="https://script.google.com/macros/s/AKfycbwS2W7Ysd5ct-ITiM2JGgQk2Ytl18-xlpx_khLtUwzHLw7y4tW6-A0wYwEPIAp0rw8dPg/exec"
                  onSubmit={(e) => {
                    e.preventDefault();
                    const form = e.currentTarget;
                    const formData = new FormData(form);

                    setIsSubmitting(true);

                    fetch(form.action, {
                      method: "POST",
                      body: formData,
                    })
                      .then(() => {
                        setIsSubmitting(false);
                        setShowWaitlist(false);
                        form.reset();
                      })
                      .catch((error) => {
                        console.error("Error:", error);
                        setIsSubmitting(false);
                        setShowWaitlist(false);
                      });
                  }}
                >
                  {/* Name field */}
                  <div className="space-y-2">
                    {/* <label
                      htmlFor="name"
                      className="text-white/80 text-sm font-medium block"
                    >
                      Full Name
                    </label> */}
                    <input
                      type="text"
                      id="name"
                      name="Name"
                      required
                      className="w-full bg-black/50 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-red-500/50 focus:ring-1 focus:ring-red-500/50 transition-all"
                      placeholder="Enter your name"
                    />
                  </div>

                  {/* Email field */}
                  <div className="space-y-2">
                    {/* <label
                      htmlFor="email"
                      className="text-white/80 text-sm font-medium block"
                    >
                      Email Address
                    </label> */}
                    <input
                      type="email"
                      id="email"
                      name="Email"
                      required
                      className="w-full bg-black/50 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-red-500/50 focus:ring-1 focus:ring-red-500/50 transition-all"
                      placeholder="your@email.com"
                    />
                  </div>

                  {/* Phone field (optional) */}
                  <div className="space-y-2">
                    {/* <label
                      htmlFor="phone"
                      className="text-white/80 text-sm font-medium block"
                    >
                      Phone Number{" "}
                      <span className="text-white/40">(optional)</span>
                    </label> */}
                    <input
                      type="tel"
                      id="phone"
                      name="Phone"
                      className="w-full bg-black/50 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-red-500/50 focus:ring-1 focus:ring-red-500/50 transition-all"
                      placeholder="+44 123 456 7890"
                    />
                  </div>

                  {/* Submit button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    className="relative w-full mt-6 pre-order-container cursor-pointer"
                  >
                    <div className="pre-order-hover"></div>
                    <div className="pre-order-outside p-4 w-full h-full"></div>
                    <div className="border-2 border-red-600 pre-order-inside p-4 w-full h-full text-center font-bold text-white lowercase flex items-center justify-center gap-2">
                      {isSubmitting ? (
                        <>
                          <svg
                            className="animate-spin h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Submitting...
                        </>
                      ) : (
                        "Join Waitlist"
                      )}
                    </div>
                  </motion.button>

                  {/* Privacy note */}
                  <p className="text-white/40 text-xs text-center mt-4">
                    We respect your privacy. Your information will only be used
                    to contact you about eNO updates.
                  </p>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="p-16 px-64 space-y-6 max-md:px-0">
        <a href="/" className="flex justify-center items-center">
          <img src="/logo-small.svg" className="w-36" alt="" />
        </a>
        <article className="px-8 pb-12 md:px-16 md:pb-16 text-black space-y-6 clear-both bg-white ">
          <video
            className="rounded-lg"
            // playsInline
            // autoplay
            // muted
            controls
            src="https://res.cloudinary.com/dyi7gdcpj/video/upload/v1764577052/TRAILER_V3_1_fwcfhx.mp4"
          ></video>
          <p className="text-sm">
            <strong>By:</strong>{" "}
            <a
              href="https://www.linkedin.com/in/willhall-/"
              className="underline text-blue-500"
            >
              Will Hall
            </a>
          </p>

          {/* <p className="text-sm"></p> */}

          <p className="text-sm">
            <strong>Contact:</strong> press@enoughsafety.com
          </p>

          <h1 className="text-3xl md:text-5xl font-bold title">
            London-based startup, eNOugh, has raised $2.7M to build a mini AI
            bodyguard to empower people to get home safely.
          </h1>

          <div className="flex gap-16 max-md:flex-col">
            <div>
              <img src="/teamimage.png" className="w-400" alt="" />
            </div>
            <div className="space-y-6">
              <p>
                eNOugh is a London based company building the eNO badge, an AI
                safety companion that is addressing the lack of safety in the
                cities people call home.
              </p>

              <p>
                Four years ago, Ina Jovicic was attacked walking home from
                dinner in a well-lit supposedly safe area of central London.
              </p>

              <p>
                Today, Ina, and co-founders Gaelic and Alex, announce they have
                raised $2.7M funding, led by A*Ventures, with participation from
                Comma Capital, Karman Ventures, Intuition VC and more, to build
                the eNO badge, the first of its kind AI wearable threat
                detection device. Alongside venture capitalist backing, the
                round was joined by several prominent angel investors.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold">
            Quote from Kevin, General Partner at A*Ventures:
          </h2>

          <blockquote className="border-l-4 border-gray-400 pl-4 italic">
            “I’ve always believed that safety and security are critically
            important. With the rise of multimodal AI, smart wearables, and
            advances in detection technology, there’s a unique opportunity to
            create a safer world for everyone. What eNOugh is building is hugely
            important.”
          </blockquote>

          <p>
            A* is a venture capital firm co-founded by Kevin Hartz. Kevin has
            seeded companies such as Airbnb and Pinterest, and has founded two
            companies that reached the public markets (Xoom and Eventbrite).
            A*'s broader investment track record includes companies like PayPal,
            Uber, Decagon, Ramp, and security-focused startups such as Flock
            Safety and Sauron.
          </p>

          <h2 className="text-2xl font-bold">
            Quotes from eNOugh co-founders:
          </h2>

          <blockquote className="border-l-4 border-gray-400 pl-4 italic">
            “This round is fundamental in eNOugh’s journey as it will allow us
            to launch the product and watch it make a difference in people’s
            daily life. The stories we hear every day remind us why a product
            like this must exist, we want to give people the freedom to live
            without limitations.”
          </blockquote>
          <p>(Ina, co-founder/CEO)</p>

          <blockquote className="border-l-4 border-gray-400 pl-4 italic">
            “I’ve always believed that some problems can’t be solved through
            software alone. Feeling unsafe is one of them. You need something
            physical, visible, and reliable, and that’s what the eNO badge gives
            you. Thanks to our backers, we’re now bringing it to life.”
          </blockquote>
          <p>(Gaelic, co-founder/CTO)</p>

          <blockquote className="border-l-4 border-gray-400 pl-4 italic">
            “What we are doing with our AI is taking it out of the lab and
            bringing it into everyday life. With the eNO badge, grounded in
            real-world, multimodal signals, we support people in the moments
            that actually feel human - like when someone feels unsafe walking
            home at night.”
          </blockquote>
          <p>(Alex, co-founder/CSO)</p>

          <p className="font-bold">London, 12th October 2021</p>

          <p>
            Four men circled and attacked Ina as they tried to take her things.
            The Balkan temperament in her kicked in and she immediately decided
            to fight back, but four against one isn't a fair fight. She was
            dragged into the middle of the street before they stole everything
            and left her with injured knees as souvenirs.
          </p>

          <p>
            When the police arrived, they told her two things: "You're lucky you
            weren't stabbed" and "You should never fight back”.
          </p>

          <p>
            That second line became the catalyst. Not for fear, but for action.
            Ina used her experience as fuel to start her research into how to
            solve this yet unresolved issue.
          </p>

          <p>
            To bring a solution to life, she partnered with two innovative
            minds, Gaelic and Alex, and together they started eNOugh.
          </p>

          <h2 className="text-2xl font-bold">
            What does it mean to “get home safe”?
          </h2>

          <p>
            Unfortunately, it’s not as simple as it sounds. For many, and
            particularly for women, it’s more than just a message you send after
            a night out.
          </p>

          <p>
            It can feel like mission planning… route strategy, risk assessment,
            key-between-knuckles, the fake phone call, the "I'm literally two
            minutes away" lie.
          </p>

          <p>
            This isn't a London problem. It's a Paris, New York, Mexico City…
            everywhere problem. That's millions of people whose lives are shaped
            by the state of the cities they live in.
          </p>

          <p className="text-2xl font-bold">
            <a
              href="https://www.ons.gov.uk/peoplepopulationandcommunity/crimeandjustice/datasets/perceptionsofpersonalsafetyandexperiencesofharassmentgreatbritain"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              In the UK
            </a>
            :
          </p>

          <ul className="list-disc pl-6">
            <li>
              One in two women and one in five men feel unsafe walking alone
              after dark in a busy public place
            </li>
            <li>68% of women aged 18-24 feel unsafe walking home at night</li>
            <li>
              62% of people have stopped doing things - leaving home alone,
              walking certain routes, going to certain places - because they
              don't feel safe
            </li>
            <li>
              Two out of three women aged 16 to 34 years experienced one form of
              harassment in the previous 12 months; with 44% of women aged 16 to
              34 years having experienced catcalls, whistles, unwanted sexual
              comments or jokes, and 29% having felt like they were being
              followed.
            </li>
          </ul>

          <p>
            And the ‘solutions’? Pepper spray (illegal in the UK by the way).
            Keychain ‘self-defence’ tools that still expect you to fight back
            after a criminal has already made their move. Panic buttons you’re
            supposed to be able to press while being attacked on top of hoping
            someone is nearby to help. Tracking apps that assume you’ll unlock
            your phone, enter the app, and tap a button in the middle of panic.
            ‘Ask Angela,’ which everyone already knows about… including the
            attackers.
          </p>

          <p>
            <strong>eNOugh was created to be the solution.</strong>
          </p>

          <h1 className="text-3xl font-bold">Changing the game</h1>

          <p>
            There are two key aspects of the eNO badge: threat detection and
            threat deterrence.
          </p>

          <p>
            <strong>Threat detection:</strong> Using sophisticated AI models and
            integration with hardware innovation, the device can detect a moment
            where its user is under threat - and crucially, take actions.
          </p>

          <p>When it detects a threat, it:</p>

          <ul className="list-disc pl-6">
            <li>Records evidence (camera + mic built in)</li>
            <li>
              Alerts an emergency operator who can contact police or your
              emergency contacts
            </li>
            <li>
              Streams live footage and shares location data so help knows
              exactly where you are
            </li>
          </ul>

          <p>
            <strong>Fun fact:</strong>{" "}
            <a
              href="https://policyexchange.org.uk/publication/your-money-or-your-life/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              less than 1% of thefts in London get solved.
            </a>{" "}
            Evidence changes that equation.
          </p>

          <p>
            <strong>Threat deterrence:</strong> Traditional safety tools are
            meant to be hidden and reactive, intended for the moment when
            something has already gone wrong. The eNO badge flips that paradigm.
          </p>

          <p>
            Designed to be seen, bright and unmissable - because to prevent
            danger, deterrence is crucial.
          </p>

          <p>
            An ordinary pedestrian sees a badge, but to an attacker they see a
            camera recording, real-time streaming to authorities, evidence that
            creates consequences. It’s deterrence through visibility, protection
            through presence.
          </p>

          <h1 className="text-3xl font-bold">
            The network effects of collective safety
          </h1>

          <p>
            The more people wear the eNO badge, the more capable it becomes at
            protecting everyone. By wearing it, you not only protect yourself,
            but also those around you.
          </p>

          <p>
            Each eNO badge serves as a node in a distributed AI network,
            collecting real-world threat data to train increasingly
            sophisticated protection algorithms. Empowering everyone who wears a
            badge to be part of the solution - this is about people not having
            things done to them, but doing them. When you wear your badge on a
            Tuesday night walking home, even if nothing happens, you're training
            the AI to recognise patterns and better protect someone else on
            Wednesday.
          </p>

          <p>
            This is a collective fight against a problem left unsolved for too
            long. It marks the start of a safer future for cities across the
            world.
          </p>

          <p>
            eNOugh want nighttime to feel carefree again - spontaneous, fun, the
            way it should be. "Walking home shouldn't feel like a risk, and
            worrying about your safety shouldn't hold you back from living your
            life" says Ina.
          </p>

          <p>
            "This isn't just about protection - it's about giving you the
            freedom to go where you want, do what you love, and feel secure
            while doing it. eNOugh isn’t just a product, it’s a reclamation of
            safety that should have already existed as a non-negotiable norm.”
          </p>

          <h1 className="text-3xl font-bold">The team</h1>

          <p>
            Ina, the CEO, is originally Bosnian but born and raised in Czechia,
            and the idea came to her after her own unfortunate experience in
            central London 3 years ago when she was completing a masters in
            Entrepreneurship at UCL.
          </p>

          <p>
            (if you want to follow her behind the scenes of building the
            start-up, follow her{" "}
            <a
              href="https://www.instagram.com/ina_founder?igsh=bmozaTM0bmd6NDVh&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              here
            </a>
            )
          </p>

          <p>
            Gaelic is Uruguayan/French electronic engineer by background who has
            been leading eNOugh’s product pillar as CTO and has decided to drop
            his masters studies in electronic and electrical engineering to
            pursue eNOugh full time.
          </p>

          <p>
            (if you want to follow Gaelic’s journey on how to build great
            products, read{" "}
            <a
              href="https://www.linkedin.com/in/gaelicjara/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              here
            </a>
            )
          </p>

          <p>
            Alex is Bulgarian-born, leading the software and AI pillar as CSO
            with his background in computer science and emerging digital
            technologies. He joined eNOugh in its early stages and has become an
            irreplaceable part of the team ever since.
          </p>

          <p>
            (follow his recent thoughts on AI and emerging trends{" "}
            <a
              href="https://x.com/alex_chalakov"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              here
            </a>
            )
          </p>

          <h1 className="text-3xl font-bold">
            So what happens now? A note from the founders
          </h1>

          <p>
            With this $2.7M round, the eNOugh team has opened the waitlist.
            Waitlist subscribers will be the first ones to get notified when the
            pre-orders for the badge are released and will receive an early bird
            discount just before the official launch.
          </p>

          <p>
            In the meantime, eNOugh is collaborating with partners across
            sectors where the eNO badge will have major impact, including
            universities, hospitals, and nightlife venues across London, the
            first city where we’ll launch before expanding quickly.
          </p>

          <p>The response to the eNO badge so far has been incredible.</p>

          <p>
            Hearing people’s reactions, their positive feedback, and the
            constant reminders of why this matters is exactly why the trio
            started eNOugh and cannot wait to put the badge in people’s hands.
          </p>

          <p className="font-bold">
            If you’re just as excited, you can join the waitlist here.
          </p>

          <p>And in the meantime, you can follow the journey here.</p>

          <div className="border-2 border-red-600   h-full text-center text-black bg-white  w-fit rounded-full cursor-pointer hover:shadow-2xl hover:shadow-red-800 duration-200  lowercase relative pre-order-container">
            <div className="pre-order-outside2 p-4  w-full h-full rounded-full z-9"></div>
            <button
              onClick={() => {
                setShowWaitlist(true);
              }}
              className="bg-white z-9999999 relative h-full w-full rounded-full p-4 font-bold"
            >
              Join the Waitlist
            </button>
          </div>
        </article>
      </div>
    </section>
  );
}
