import { bg3 } from "../../assets";
import { ContactForm } from "../../components";

const Contact = () => {
  return (
    <section
      id="contact"
      className="h-full text-[#644f44] bg-cover bg-center md:bg-bottom px-4 sm:px-12 py-20"
      style={{ backgroundImage: `url(${bg3})` }}
    >
      <h2 className="text-2xl sm:text-4xl md:text-5xl font-architects-daughter mb-4">
        Get In Touch
      </h2>
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 sm:mr-2 leading-tight text-sm lg:text-base font-light tracking-wider">
          <p className="mb-1">
            Consultations are currently only available on{" "}
            <span className="font-bold">Saturdays,</span>
            and some Sundays.
          </p>

          <p className="mb-1">
            Due to limited availability and to support as many individuals as
            possible who are on wait lists,{" "}
            <span className="font-bold">
              consultations are offered in place of block therapy.
            </span>
          </p>

          <p className="mb-10">
            Currently, we are only able to work with{" "}
            <span className="font-bold">private and self-managed </span>NDIS
            clients at this time.
          </p>

          <h2 className="font-semibold text-base sm:text-lg md:text-xl mb-1">
            A note for all self-managed NDIS clients:
          </h2>
          <p className="mb-1">
            Due to Amya providing consultations as an international coach, all
            OT Health Coach consultations will be invoiced under line number:{" "}
            <span className="font-bold">
              01_741_0128_1_3 Assessment Recommendation Therapy or Training
              Supports - Other Professional.
            </span>
          </p>
          <p>
            As such, formal assessments of any kind for NDIS purposes cannot be
            provided at this time. Thank you for your understanding, and we look
            forward to serving you.
          </p>

          {/* <Accordion title="A note for all self-managed NDIS clients">
            <p>
              Due to Amya providing consultations as an international coach, all
              OT Health Coach consultations will be invoiced under line number:{" "}
              <span className="font-bold">
                01_741_0128_1_3 Assessment Recommendation Therapy or Training
                Supports - Other Professional.
              </span>
              <br />
              <br />
              As such, formal assessments of any kind for NDIS purposes cannot
              be provided at this time. Thank you for your understanding, and we
              look forward to serving you.
            </p>
          </Accordion> */}
        </div>
        <div className="border-t border-[#a3a185] my-6" />
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
