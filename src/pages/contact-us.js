import Layout from "@/components/Layout";
import ServiceForm from "@/components/ServiceForm";
import React from "react";

const ContactUsPage = () => {
  return (
    <Layout>
      <div className="bg-rose-50 py-8 flex flex-col lg:flex-row flex-1">
        <div className="px-4 sm:px-6 lg:px-8 lg:w-1/2">
          <h1 className="text-3xl font-bold font-merriweather text-red-600 text-center mb-8">
            Contact Us
          </h1>

          {/* Address section */}
          <ContactSection
            title="Address"
            content="No.3, Suggatta Road, Hunsamaranahalli, Bengaluru Urban - 562157, Karnataka"
          />

          {/* Email section */}
          <ContactSection
            title="Email"
            content={
              <a
                href="mailto:Shivacaterers06@gmail.com"
                className="text-blue-950 hover:underline"
              >
                Shivacaterers06@gmail.com
              </a>
            }
          />

          {/* Phone Number section */}
          <ContactSection
            title="Phone Number"
            content={
              <>
                <p>
                  <strong>Sunil Yadav:</strong>{" "}
                  <a
                    href="tel:+919008587964"
                    className="text-gray-900 hover:underline"
                  >
                    +91 9008587964
                  </a>
                </p>
                <p>
                  <strong>Shiva Yadav:</strong>{" "}
                  <a
                    href="tel:+917996661169"
                    className="text-gray-900 hover:underline"
                  >
                    +91 7996661169
                  </a>
                </p>
                <p>
                  <strong>Kajol Yadav:</strong>{" "}
                  <a
                    href="tel:+919110859728"
                    className="text-gray-900 hover:underline"
                  >
                    +91 9110859728
                  </a>
                </p>
              </>
            }
          />

          {/* Get in Touch section */}
          <ContactSection
            title="Get in Touch"
            content="Have questions or ready to book your event with Shiva Caterers? Reach out to us using the information above or fill out the form here. We look forward to hearing from you!"
          />
        </div>

        {/* ServiceForm section */}
        <div className="px-4 sm:px-6 lg:px-8 lg:w-1/2 mt-8 lg:mt-0">
          <h2 className="font-merriweather font-semibold text-2xl text-center mb-4">
            Book a Catering
          </h2>
          <ServiceForm />
        </div>
      </div>

      {/* Curved section design */}
      <style jsx>{`
        .rounded-lg {
          border-radius: 1rem;
        }
      `}</style>
    </Layout>
  );
};

// ContactSection component for rendering contact information sections
const ContactSection = ({ title, content }) => (
  <section className="bg-white shadow-md rounded-lg p-6 mb-6">
    <h2 className="text-xl font-bold mb-2">{title}</h2>
    <div className="text-gray-700">{content}</div>
  </section>
);

export default ContactUsPage;
