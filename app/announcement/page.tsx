"use client";
export default function Announce() {
  return (
    <div>
      <article className="px-8 pb-12 md:px-16 md:pb-16 text-black space-y-6 clear-both bg-white ">
        <video
          className="rounded-lg"
          // playsInline
          // autoplay
          // muted
          controls
          src="https://res.cloudinary.com/dyi7gdcpj/video/upload/v1764577052/TRAILER_V3_1_fwcfhx.mp4"
        ></video>
        <h1 className="text-3xl md:text-5xl font-bold">
          eNOugh Raises £2.7M to Build a Mini AI Bodyguard Helping People Get
          Home Safely
        </h1>

        <p className="text-sm">
          <strong>By:</strong> Will Hall
        </p>

        <p className="text-sm">
          <strong>Contact:</strong> press@enoughsafety.com
        </p>

        {/* <hr className="my-6" /> */}

        <div className="flex gap-16 max-md:flex-col">
          <div>
            <img src="/teamimage.png" className="w-400 object-cover" alt="" />
          </div>
          <div className="space-y-6">
            <p>
              London-based startup <strong>eNOugh</strong> has raised{" "}
              <strong>£2.7M</strong> to build the <em>eNO badge</em>, a mini AI
              bodyguard designed to empower people to get home safely.
            </p>

            <p>
              eNOugh is a London-based company building the eNO badge, an AI
              safety companion addressing the lack of safety in the cities
              people call home.
            </p>

            <p>
              Four years ago, <strong>Ina Jovicic</strong> was attacked walking
              home from dinner in what should have been a safe, well-lit area of
              central London. Today, Ina and co-founders <strong>Gaelic</strong>{" "}
              and <strong>Alex</strong> announce they have raised £2.7M in
              funding, led by <strong>A*Ventures</strong>, with participation
              from <strong>Comma Capital</strong>,{" "}
              <strong>Karman Ventures</strong>, <strong>Intuition VC</strong>,
              and others, to build the first-of-its-kind AI wearable threat
              detection device. Several prominent angel investors also joined
              the round.
            </p>
          </div>
        </div>
        {/* <hr className="my-6" /> */}

        <h2 className="text-2xl font-bold">
          Quote from Kevin, General Partner at A*Ventures
        </h2>

        <blockquote className="border-l-4 border-gray-400 pl-4 italic">
          "I've always believed that safety and security are critically
          important. With the rise of multimodal AI, smart wearables, and
          advances in detection technology, there's a unique opportunity to
          create a safer world for everyone. What eNOugh is building is hugely
          important."
        </blockquote>

        <p>
          A* is a venture capital firm co-founded by{" "}
          <strong>Kevin Hartz</strong>. Kevin has seeded companies such as
          Airbnb and Pinterest and founded two companies that reached the public
          markets (Xoom and Eventbrite). A*'s broader investment record includes
          PayPal, Uber, Decagon, Ramp, and security-focused startups such as
          Flock Safety and Sauron.
        </p>

        {/* <hr className="my-6" /> */}

        <h2 className="text-2xl font-bold">Quotes from eNOugh Co-Founders</h2>

        <blockquote className="border-l-4 border-gray-400 pl-4 italic">
          "This round is fundamental in eNOugh's journey as it will allow us to
          launch the product and watch it make a difference in people's daily
          life. The stories we hear every day remind us why a product like this
          must exist, we want to give people the freedom to live without
          limitations."
        </blockquote>
        <p>
          — <strong>Ina, co-founder/CEO</strong>
        </p>

        <blockquote className="border-l-4 border-gray-400 pl-4 italic">
          "I've always believed that some problems can't be solved through
          software alone. Feeling unsafe is one of them. You need something
          physical, visible, and reliable, and that's what the eNO badge gives
          you. Thanks to our backers, we're now bringing it to life."
        </blockquote>
        <p>
          — <strong>Gaelic, co-founder/CTO</strong>
        </p>

        <blockquote className="border-l-4 border-gray-400 pl-4 italic">
          "What we are doing with our AI is taking it out of the lab and
          bringing it into everyday life. With the eNO badge, grounded in
          real-world, multimodal signals, we support people in the moments that
          actually feel human - like when someone feels unsafe walking home at
          night."
        </blockquote>
        <p>
          — <strong>Alex, co-founder/CSO</strong>
        </p>

        {/* <hr className="my-6" /> */}

        <h2 className="text-2xl font-bold">Why eNOugh Exists</h2>

        <p className="font-bold">London, 12th October 2021</p>

        <p>
          Four men circled and attacked Ina as they tried to take her things.
          Her instinct was to fight back, but four against one isn't a fair
          fight. She was dragged into the street before they stole everything
          and left her with injured knees.
        </p>

        <p>When police arrived, they told her:</p>

        <ul className="list-disc pl-6">
          <li>"You're lucky you weren't stabbed."</li>
          <li>"You should never fight back."</li>
        </ul>

        <p>
          That second line sparked action, not fear. Ina channelled the
          experience into researching real solutions to a problem that remains
          unsolved.
        </p>

        <p>
          She partnered with two innovative minds, <strong>Gaelic</strong> and{" "}
          <strong>Alex</strong>, and together they started eNOugh.
        </p>

        {/* <hr className="my-6" /> */}

        <h2 className="text-2xl font-bold">
          What Does It Mean to "Get Home Safe"?
        </h2>

        <p>
          For many — especially women — it's not just a simple message. It can
          feel like <em>mission planning</em>:
        </p>

        <ul className="list-disc pl-6">
          <li>route strategy</li>
          <li>risk assessment</li>
          <li>keys-between-knuckles</li>
          <li>fake phone calls</li>
          <li>the "I'm two minutes away" lie</li>
        </ul>

        <p>
          This isn't just a London problem. It's a{" "}
          <strong>Paris, New York, Mexico City… everywhere problem.</strong>{" "}
          That's millions of people whose lives are shaped by the state of the
          cities they live in.
        </p>

        {/* <hr className="my-6" /> */}

        <h2 className="text-2xl font-bold">The UK Safety Reality</h2>

        <p>
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
            <strong>1 in 2 women</strong> and <strong>1 in 5 men</strong> feel
            unsafe walking alone after dark in a busy public place
          </li>
          <li>
            <strong>68%</strong> of women aged 18–24 feel unsafe walking home at
            night
          </li>
          <li>
            <strong>62%</strong> of people have stopped doing things (walking
            alone, taking certain routes, visiting certain places) because they
            don't feel safe
          </li>
          <li>
            <strong>2 out of 3 women</strong> aged 16–34 experienced harassment
            in the last year
          </li>
          <li>
            <strong>44%</strong> experienced catcalls or unwanted comments
          </li>
          <li>
            <strong>29%</strong> felt they were being followed
          </li>
        </ul>

        <p>And existing "solutions" aren't good enough:</p>

        <ul className="list-disc pl-6">
          <li>Pepper spray (illegal in the UK)</li>
          <li>Keychain "self-defence" tools expecting people to fight back</li>
          <li>Panic buttons requiring presence of mind during an attack</li>
          <li>Tracking apps requiring you to unlock your phone</li>
          <li>"Ask Angela" — widely known, including by attackers</li>
        </ul>

        <p>
          <strong>eNOugh was created to be the solution.</strong>
        </p>

        {/* <hr className="my-6" /> */}

        <h1 className="text-3xl font-bold">Changing the Game</h1>

        <p>The eNO badge has two core functions:</p>

        <h2 className="text-2xl font-bold">1. Threat Detection</h2>

        <p>
          Using advanced AI and hardware integration, the device detects when
          its user is under threat — and takes action.
        </p>

        <p>When it detects a threat, it:</p>

        <ul className="list-disc pl-6">
          <li>records evidence (camera + mic)</li>
          <li>
            alerts an emergency operator who can contact police or your
            emergency contacts
          </li>
          <li>streams live footage</li>
          <li>shares real-time location data</li>
        </ul>

        <p>
          <strong>Fun fact:</strong>{" "}
          <a
            href="https://policyexchange.org.uk/publication/your-money-or-your-life/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            Less than 1% of thefts in London get solved.
          </a>
        </p>

        <p>Evidence changes that equation.</p>

        {/* <hr className="my-6" /> */}

        <h2 className="text-2xl font-bold">2. Threat Deterrence</h2>

        <p>Traditional safety tools are hidden and reactive.</p>

        <p>The eNO badge is the opposite:</p>

        <ul className="list-disc pl-6">
          <li>
            <strong>bright</strong>
          </li>
          <li>
            <strong>visible</strong>
          </li>
          <li>
            <strong>unmissable</strong>
          </li>
        </ul>

        <p>To a passerby it's a badge.</p>

        <p>To an attacker it's:</p>

        <ul className="list-disc pl-6">
          <li>a camera recording</li>
          <li>streaming live</li>
          <li>connected to authorities</li>
          <li>creating consequences</li>
        </ul>

        <p className="font-bold">
          Deterrence through visibility.
          <br />
          Protection through presence.
        </p>

        {/* <hr className="my-6" /> */}

        <h1 className="text-3xl font-bold">
          The Network Effects of Collective Safety
        </h1>

        <p>
          The more people wearing an eNO badge, the stronger the network
          becomes.
        </p>

        <p>
          Each badge is a <strong>node in a distributed AI network</strong>,
          collecting real-world threat data to train better algorithms.
        </p>

        <p>
          Your Tuesday walk home — even if nothing happens — helps protect
          someone else on Wednesday.
        </p>

        <p>
          This is a <strong>collective fight</strong>, marking the start of
          safer cities worldwide.
        </p>

        <blockquote className="border-l-4 border-gray-400 pl-4 italic">
          "Walking home shouldn't feel like a risk… eNOugh isn't just a product,
          it's a reclamation of safety." — <strong>Ina</strong>
        </blockquote>

        {/* <hr className="my-6" /> */}

        <h1 className="text-3xl font-bold">The Team</h1>

        <h3 className="text-xl font-bold">Ina — CEO</h3>

        <p>
          Bosnian by background, raised in Czechia. The idea sparked after her
          London attack while completing a Master's in Entrepreneurship at UCL.
        </p>

        <p>
          (if you want to follow her behind the scenes of building the start-up,
          follow her{" "}
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

        <h3 className="text-xl font-bold">Gaelic — CTO</h3>

        <p>
          Uruguayan/French electronic engineer. Leads the product pillar.
          Dropped his Master's in Electronic & Electrical Engineering to build
          eNOugh full-time.
        </p>

        <p>
          (if you want to follow Gaelic's journey on how to build great
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

        <h3 className="text-xl font-bold">Alex — CSO</h3>

        <p>
          Bulgarian-born, leads software and AI. Joined early and became
          indispensable.
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

        {/* <hr className="my-6" /> */}

        <h1 className="text-3xl font-bold">What's Next?</h1>

        <p>
          With this £2.7M round, eNOugh has opened the <strong>waitlist</strong>
          .
        </p>

        <ul className="list-disc pl-6">
          <li>Waitlisters will be first to know when pre-orders go live</li>
          <li>Early-bird discounts before official launch</li>
        </ul>

        <p>eNOugh is partnering with:</p>

        <ul className="list-disc pl-6">
          <li>universities</li>
          <li>hospitals</li>
          <li>nightlife venues</li>
        </ul>

        <p>London will be the first launch city before rapid expansion.</p>

        <p>
          The response has been overwhelmingly positive — a reminder of why this
          product matters.
        </p>

        <p className="font-bold">Excited? Join the waitlist here.</p>

        <p>And follow the journey here.</p>

        <div className="border-2 border-red-600   h-full text-center text-black bg-white  w-fit rounded-full cursor-pointer hover:shadow-2xl hover:shadow-red-800 duration-200  lowercase relative pre-order-container">
          <div className="pre-order-outside2 p-4  w-full h-full rounded-full z-9"></div>
          <div className="bg-white z-9999999999999 relative h-full w-full rounded-full p-4 font-bold">
            Join the Waitlist
          </div>
        </div>
      </article>
    </div>
  );
}
