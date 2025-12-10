"use client";
export default function TermsOfService({ className = "" }) {
  return (
    <main
      className={`prose prose-neutral mx-auto max-w-4xl px-6 py-12 ${className}`}
    >
      <header className="mb-6">
        <h1 className="text-3xl font-extrabold">Terms of Service</h1>
        <p className="mt-2 text-sm text-slate-600">
          Last updated: <time>—</time>
        </p>
      </header>

      <section>
        <h2 className="text-xl font-semibold">Introduction</h2>
        <p>
          Welcome to the <span className="font-medium">ENOUGH SAFETY LTD</span>{" "}
          app and website. By using our app, website, or any other services
          ("Service"), you agree to comply with and be bound by these Terms of
          Service ("Terms"). Please read these carefully. If you do not agree to
          these Terms, you must not use the Service.
        </p>
        <p>
          <span className="font-medium">ENOUGH SAFETY LTD</span> is a company
          registered in England and Wales under company number{" "}
          <span className="font-mono">14962884</span>, with a registered office
          at
          <span className="ml-1">
            71-75 Shelton Street, Covent Garden, London, United Kingdom, WC2H
            9JQ.
          </span>
          We are regulated by Companies House.
        </p>
        <p>
          For any queries regarding these Terms, please contact us at
          <a
            className="ml-1 text-sky-600 hover:underline"
            href="mailto:info@enoughsafety.com"
          >
            info@enoughsafety.com
          </a>
          .
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mt-6">Service Overview</h2>
        <p>
          <span className="font-medium">App:</span> The ENOUGH app provides
          personal safety by automatically notifying designated contacts when
          users arrive at their destination or, if not, after three times the
          estimated time of arrival.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mt-6">
          User Registration &amp; Responsibilities
        </h2>
        <ul className="list-disc pl-6 mt-2 space-y-2">
          <li>
            <strong>Eligibility:</strong> The Service is available to all users
            regardless of age, but by registering, you confirm that you are the
            age of majority in your country or have obtained parental consent to
            use the Service.
          </li>
          <li>
            <strong>Account Creation:</strong> To use the app, users must
            provide their name, email, phone number, gender, age, and create
            login credentials. Users are responsible for ensuring the accuracy
            and completeness of this information.
          </li>
          <li>
            <strong>User Responsibilities:</strong> Users are required to keep
            their account information up to date and must not misuse the app’s
            features (e.g., sending false alerts or tampering with data).
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold mt-6">
          Content Ownership &amp; Intellectual Property
        </h2>
        <p>
          <strong>Ownership:</strong> All content, including logos, designs, and
          intellectual property on the app or website, belongs to{" "}
          <span className="font-medium">ENOUGH SAFETY LTD</span> and may not be
          copied without express written permission.
        </p>
        <p>
          <strong>User Content:</strong> While users retain ownership of content
          they upload (e.g., profile pictures), they grant ENOUGH SAFETY LTD the
          right to use this content for app functionality.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mt-6">
          Disclaimers and Limitation of Liability
        </h2>
        <p>
          <strong>Safety Disclaimer:</strong> ENOUGH SAFETY LTD provides the app
          and badge to assist with personal safety, but we do not guarantee that
          they will prevent harm or ensure safety. Users are advised to exercise
          caution at all times.
        </p>
        <p>
          Users are responsible for using the app and badge in conjunction with
          other personal safety practices. The Service is intended to be a
          supplementary tool, and users should not rely solely on the Service
          for protection in potentially harmful situations.
        </p>
        <p>
          <strong>Limitation of Liability:</strong> While we strive to provide
          accurate alerts, we are not liable for any harm arising from app
          malfunctions, GPS errors, or incorrect notifications. Claims related
          to harm or product functionality can be submitted to
          <a
            className="ml-1 text-sky-600 hover:underline"
            href="mailto:info@enoughsafety.com"
          >
            info@enoughsafety.com
          </a>
          .
        </p>
        <p>
          This Service is not a substitute for emergency services. In the event
          of an emergency, users should contact the appropriate authorities or
          emergency services in their area.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mt-6">Termination</h2>
        <p>
          <strong>Account Termination:</strong> We reserve the right to
          terminate accounts if users violate these Terms or misuse the Service.
          In cases of termination, data may be retained if required for legal
          purposes.
        </p>
        <p>
          <strong>Effect of Termination:</strong> Users will lose access to the
          Service upon termination, but relevant data may be retained in
          compliance with legal requirements. Users will still be held to the
          terms and conditions after termination as to protect the company’s
          data and intellectual property.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mt-6">User Data and Privacy</h2>
        <p>
          Your use of the Service is governed by our Privacy Policy, which can
          be found on our website and outlines how we collect, use, and protect
          your data. Users are responsible for ensuring that the data they
          provide is accurate and up to date.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mt-6">Governing Law</h2>
        <p>
          These Terms are governed by and construed in accordance with the laws
          of England and Wales.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mt-6">Dispute Resolution</h2>
        <p>
          Any disputes or claims arising out of or related to these Terms will
          be resolved by UK courts. By using our Service, you agree to submit to
          the exclusive jurisdiction of the courts in England and Wales.
        </p>
        <p>
          Disputes between users or participants and users and third parties
          will not involve ENOUGH SAFETY LTD, releasing ENOUGH SAFETY LTD, its
          directors, officers, employees and successors from claims, damages and
          demands of every kind or nature, known or unknown, suspected or
          unsuspected, disclosed or undisclosed, arising out of or in any way
          related to such disputes and/or our Services.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mt-6">
          Modifications to the Terms
        </h2>
        <p>
          We reserve the right to modify these Terms at any time. Users will be
          notified of significant changes via email or through updates in the
          app. Continued use of the Service after changes indicates acceptance
          of the revised Terms. To withdraw your consent to these Terms contact
          us at
          <a
            className="ml-1 text-sky-600 hover:underline"
            href="mailto:info@enoughsafety.com"
          >
            info@enoughsafety.com
          </a>
          .
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mt-6">Prohibited Uses</h2>
        <p>In addition to the obligations mentioned above, users must not:</p>
        <ul className="list-disc pl-6 mt-2 space-y-2">
          <li>Use the Service for any illegal purposes.</li>
          <li>
            Misuse or tamper with the website or app, including introducing
            viruses, hacking, or data scraping.
          </li>
          <li>Engage in any discriminatory or harmful behaviour.</li>
          <li>Infringe or violate intellectual property rights.</li>
          <li>
            Jeopardise the security of your profile or the profile of others.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold mt-6">Warranty</h2>
        <p>
          The warranty period refers to the time frame of{" "}
          <strong>1 year</strong>, starting from the day of the consumer’s
          receipt of the product.
        </p>
        <p>
          If the product fails to conform to the Limited Warranty during the
          warranty period, the company (eNOugh Safety) will be entitled to (1)
          replace or repair any defects to the product or service and cover any
          delivery fees; or (2) accept the return of the product and reimburse
          the user of the money paid.
        </p>
        <p>Limited Warranty does not apply to:</p>
        <ol className="list-decimal pl-6 mt-2 space-y-1">
          <li>Normal wear and tear, including scratches and dents;</li>
          <li>
            Consumable parts included in the Product, such as batteries, unless
            product damage has occurred due to a defect in materials or
            workmanship;
          </li>
          <li>
            Any modifications or improper repairs have been made to the original
            product;
          </li>
          <li>Usage has not been in accordance with the Terms of Service;</li>
          <li>Abuse or misuse of the product;</li>
          <li>
            Events outside of eNOugh Safety Ltd’s control, including breakdowns,
            fluctuations, or interruptions in electric power or the
            telecommunications network;
          </li>
          <li>
            Acts of God, including but not limited to lightning, flood, tornado,
            earthquake, or hurricane.
          </li>
        </ol>
      </section>

      <section>
        <h2 className="text-xl font-semibold mt-6">Miscellaneous</h2>
        <p>
          <strong>Price Changes:</strong> Prices for products and services are
          subject to change without notice.
        </p>
        <p>
          The designs on the website are not final and may be subject to change.
        </p>
        <p>
          <strong>Service Modifications:</strong> We reserve the right to modify
          or discontinue the Service without notice. We are not liable for any
          modification, suspension, or discontinuation of the Service.
        </p>
        <p className="mt-4">
          By using our app, website, or any other services, you acknowledge and
          agree to these Terms of Service. If you have any questions, please
          contact{" "}
          <a
            className="text-sky-600 hover:underline"
            href="mailto:info@enoughsafety.com"
          >
            info@enoughsafety.com
          </a>
          .
        </p>
      </section>

      <footer className="mt-8 flex items-center gap-4">
        <small className="text-sm text-slate-500">
          ENOUGH SAFETY LTD &middot; Registered in England &amp; Wales
        </small>
      </footer>
    </main>
  );
}
