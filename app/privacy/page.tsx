export default function PrivacyNotice() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 md:p-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Enough Safety
          </h1>
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Privacy Notice
          </h2>
          <p className="text-lg text-gray-600 font-medium">
            Website and Product
          </p>
        </div>

        {/* Introduction */}
        <section className="mb-8">
          <p className="text-gray-700 mb-4">
            We're Enough Safety providing you with the eNO badge personal safety
            device. If you are a customer, thank you for reviewing this page as
            part of your purchase!
          </p>
          <p className="text-gray-700 mb-4">
            We've put together this notice to explain how we look after your
            personal data. By personal data, we mean things like your name, or
            email, anything that could be used to identify who you are and
            specific things about you.
          </p>
          <p className="text-gray-700 mb-4">
            First of all, purchasing the eNO badge or subscribing to our ongoing
            services is only available to those over the age of consent to
            subscribe for services in your location. If you are under this age,
            you will need your parent or guardian's permission to complete your
            purchase and set up an account.
          </p>
          <p className="text-gray-700">
            If you are a parent or guardian and are concerned that someone under
            the age of consent has purchased or subscribed to our services
            without your knowledge, please contact us at{" "}
            <a
              href="mailto:info@enoughsafety.com"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              info@enoughsafety.com
            </a>
            . You may also contact us regarding data processing of any minors.
          </p>
        </section>

        {/* Who We Are */}
        <section className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-3">
            Who we are
          </h3>
          <p className="text-gray-700">
            Enough Safety Ltd, a UK business under our US parent company, Enough
            Safety Inc.
          </p>
        </section>

        {/* Contact */}
        <section className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-3">
            How to Contact Us
          </h3>
          <p className="text-gray-700 mb-2">
            You can reach us by any of the following ways:
          </p>
          <div className="bg-gray-50 p-4 rounded-md">
            <p className="text-gray-700 mb-2">
              <span className="font-medium">Email:</span>{" "}
              <a
                href="mailto:info@enoughsafety.com"
                className="text-blue-600 hover:text-blue-800 underline"
              >
                info@enoughsafety.com
              </a>
            </p>
            <p className="text-gray-700">
              <span className="font-medium">Address:</span> Enough Safety Ltd,
              30 Churchill Pl, London, E14 5RE, United Kingdom
            </p>
          </div>
        </section>

        {/* What We Do */}
        <section className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-3">
            What do we do
          </h3>
          <p className="text-gray-700">
            We manufacture and supply the eNO badge device. We also keep and
            protect certain information about you required for eNO to function
            and keep in touch with you. We don't make money from selling your
            personal data.
          </p>
        </section>

        {/* About You */}
        <section className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-3">
            About You
          </h3>
          <p className="text-gray-700">
            This privacy notice is primarily intended for Enough Safety's
            website visitors and customers. If you have questions or concerns
            about our data collection as a member of the public you may contact
            us at{" "}
            <a
              href="mailto:info@enoughsafety.com"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              info@enoughsafety.com
            </a>
            .
          </p>
        </section>

        {/* How We Collect */}
        <section className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-3">
            How We Collect your Personal Data
          </h3>
          <p className="text-gray-700">
            We collect your personal data such as contact and financial
            information when you place an order with us or when you sign up to
            our applications or newsletters. We collect additional information
            through your use of our products such as location data, device data,
            video recordings and usage data. We may also collect information
            when you contact our customer service team or exercise your privacy
            rights.
          </p>
        </section>

        {/* Data Table */}
        <section className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Why we need your personal data
          </h3>
          <p className="text-gray-700 mb-4">
            We use your personal data to complete your initial order and to
            provide the core features of the products and services. Further
            details about how and why we use your personal data are set out
            below:
          </p>

          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-300 px-4 py-3 text-left text-sm font-semibold text-gray-900">
                    Data type
                  </th>
                  <th className="border border-gray-300 px-4 py-3 text-left text-sm font-semibold text-gray-900">
                    Why we need this
                  </th>
                  <th className="border border-gray-300 px-4 py-3 text-left text-sm font-semibold text-gray-900">
                    Our lawful reason(s) for collecting this
                  </th>
                  <th className="border border-gray-300 px-4 py-3 text-left text-sm font-semibold text-gray-900">
                    Who is this shared with?
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700 font-medium">
                    Contact Information (name, email, home or work address)
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700">
                    To fulfil your orders
                    <br />
                    To keep in touch with you about product and service updates
                    <br />
                    To let you know about future products
                    <br />
                    Support issues or complaints
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700">
                    To fulfill your order (contract performance)
                    <br />
                    <br />
                    Legitimate interests*
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700">
                    Data hosting providers
                    <br />
                    <br />
                    Shipping and delivery partners
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700 font-medium">
                    Payment details
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700">
                    To process your product order
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700">
                    To fulfill your order (contract performance)
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700">
                    Payment providers only
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700 font-medium">
                    Phone number
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700">
                    To contact you in the event of a support issue or order
                    issue
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700">
                    To fulfill your order (contract performance)
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700">
                    Data hosting providers
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700 font-medium">
                    Device Information (operating system, device type, IP
                    address, browser type/version)
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700">
                    For support issues and monitoring for improvements to the
                    service.
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700">
                    To fulfill your order (contract performance)
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700">
                    Data hosting providers
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700 font-medium">
                    Personal characteristics (age, gender, date of birth)
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700">
                    To optimise the functionality of the products to suit your
                    preferences
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700">
                    Legitimate interests
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700">
                    Data hosting providers
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Legitimate Interests */}
        <section className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-3">
            Legitimate Interests
          </h3>
          <p className="text-gray-700">
            When we refer to "legitimate interests" we mean our legitimate
            opportunity to provide products and services in a way that is
            necessary and proportionate to the aims where we have evaluated the
            impact on the rights of individuals.
          </p>
        </section>

        {/* Sharing Data */}
        <section className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-3">
            Do we share your personal data?
          </h3>
          <p className="text-gray-700 mb-3">
            We only share your personal data on a necessary basis in order to
            provide you with the features and services. Where we do so, we
            ensure that this is provided under agreement or other legal basis.
            Parties receiving your shared personal data include:
          </p>
          <div className="bg-gray-50 p-4 rounded-md space-y-2">
            <p className="text-gray-700">
              Emergency response personnel where this is an enabled feature by
              region;
            </p>
            <p className="text-gray-700">
              Cloud data hosting providers for secure storage of your personal
              data;
            </p>
            <p className="text-gray-700">
              Third party processors provide other aspects of the products and
              services such as shipping, payment, connectivity, and software,
              including AI models and software.
            </p>
          </div>
        </section>

        {/* Data Retention */}
        <section className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-3">
            How long we keep your personal data for
          </h3>
          <p className="text-gray-700 mb-3">
            Personal data will not be retained for longer than is reasonably
            necessary and such retention will reflect the purposes such data was
            obtained for. When considering retention of your personal data we
            will consider the following criteria:
          </p>
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-md">
              <p className="font-medium text-gray-900 mb-2">
                Account personal data:
              </p>
              <p className="text-gray-700">
                Account data may be retained for as long as you continue to use
                the services and for up to a limited period thereafter,
                typically six (6) years. You may remove or instruct us to delete
                your personal data at any time.
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-md">
              <p className="font-medium text-gray-900 mb-2">
                Product Usage personal data:
              </p>
              <p className="text-gray-700">
                Personal data incidentally captured through your use of the
                products and services may be retained post capture but no longer
                than necessary to provide the services.
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-md">
              <p className="font-medium text-gray-900 mb-2">
                Personal data to facilitate product safety:
              </p>
              <p className="text-gray-700">
                Data concerning your purchase history and contact information
                may be retained for longer periods in line with industry
                guidance and up to ten (10) years in the event of the need to
                issue any safety update or recall notice.
              </p>
            </div>
          </div>
        </section>

        {/* Your Rights */}
        <section className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-3">
            Your Rights
          </h3>
          <p className="text-gray-700 mb-3">
            You have the following rights with respect to your personal data:
          </p>
          <div className="space-y-2 bg-gray-50 p-4 rounded-md">
            <p className="text-gray-700">
              <span className="font-medium">Informed:</span> you can ask us to
              explain how and why your data is used.
            </p>
            <p className="text-gray-700">
              <span className="font-medium">Access:</span> Request a copy of the
              personal data we hold about you.
            </p>
            <p className="text-gray-700">
              <span className="font-medium">Rectification:</span> Ask us to
              correct any inaccurate or incomplete information.
            </p>
            <p className="text-gray-700">
              <span className="font-medium">Erasure:</span> Request the deletion
              of your personal data.
            </p>
            <p className="text-gray-700">
              <span className="font-medium">Restriction:</span> Request that we
              limit the way we process your data.
            </p>
            <p className="text-gray-700">
              <span className="font-medium">Portability:</span> You can ask us
              to provide copies of your data for other services.
            </p>
            <p className="text-gray-700">
              <span className="font-medium">Objection:</span> Object to certain
              types of data processing, such as for marketing purposes.
            </p>
          </div>
          <p className="text-gray-700 mt-4">
            To exercise these rights, please contact us at{" "}
            <a
              href="mailto:info@enoughsafety.com"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              info@enoughsafety.com
            </a>
            .
          </p>
          <p className="text-gray-700 mt-4">
            You will not have to pay a fee to access your personal data (or to
            exercise any of the other rights). However, we may charge a
            reasonable fee if your request is clearly unfounded, repetitive or
            excessive. Alternatively, we may refuse to comply with your request
            in these circumstances.
          </p>
          <p className="text-gray-700 mt-4">
            We try to respond to all legitimate requests within one (1) calendar
            month. Occasionally it may take us longer than one month if your
            request is particularly complex or you have made a number of
            requests. In this case, we will notify you and keep you updated.
          </p>
        </section>

        {/* Complaints */}
        <section className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-3">
            If you have any complaints
          </h3>
          <p className="text-gray-700">
            You have the right to make a complaint at any time to the
            Information Commissioner's Office (ICO), the UK supervisory
            authority for data protection issues (
            <a
              href="https://www.ico.org.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              www.ico.org.uk
            </a>
            ). We would, however, appreciate the chance to deal with your
            concerns before you approach the ICO so please contact us in the
            first instance by emailing{" "}
            <a
              href="mailto:info@enoughsafety.com"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              info@enoughsafety.com
            </a>
            .
          </p>
        </section>

        {/* Data Security */}
        <section className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-3">
            Data Security
          </h3>
          <p className="text-gray-700">
            We take the security of your data seriously. All personal data is
            stored securely on Google servers, and we use encryption and secure
            access protocols to prevent unauthorised access. In addition, we
            limit access to your personal data to those employees, agents,
            contractors and other third parties who have a business need to
            know. They will only process your personal data on our instructions
            and they are subject to a duty of confidentiality.
          </p>
        </section>

        {/* International Transfers */}
        <section className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-3">
            International Data Transfers
          </h3>
          <p className="text-gray-700">
            We may transfer and store your data outside of the UK (e.g., using
            Google servers). In such cases, we ensure that the appropriate
            safeguards are in place to protect your data.
          </p>
        </section>

        {/* Marketing */}
        <section className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-3">
            Marketing Communications
          </h3>
          <p className="text-gray-700">
            You may receive marketing communications from us, such as product
            updates and special offers. You can opt out of these communications
            at any time by following the unsubscribe link in our emails or
            contacting us at{" "}
            <a
              href="mailto:info@enoughsafety.com"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              info@enoughsafety.com
            </a>
            .
          </p>
        </section>

        {/* Changes */}
        <section className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-3">
            Changes to This Privacy Notice
          </h3>
          <p className="text-gray-700 mb-4">
            We may update this privacy notice from time to time. Any changes
            will be communicated to you via email. The most recent version of
            the privacy notice will always be available in the app and on our
            website.
          </p>
          <p className="text-gray-700">
            It is important that the personal data we hold about you is accurate
            and current. Please keep us informed if your personal data changes
            during your relationship with us.
          </p>
        </section>

        {/* Footer */}
        <div className="mt-12 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-500">Version 1.1 1 December 2025</p>
        </div>
      </div>
    </div>
  );
}
