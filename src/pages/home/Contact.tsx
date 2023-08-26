import { bg3 } from "../../assets";
import { ContactForm } from "../../components";

const Contact = () => {
  return (
    <section
      id="contact"
      className="h-full text-[#644f44] bg-cover bg-center md:bg-bottom px-4 sm:px-12 py-20"
      style={{ backgroundImage: `url(${bg3})` }}
    >
      <h2 className="font-bold text-2xl italic">Get In Touch</h2>
      <div className="leading-tight font-light text-base md:text-lg lg:text-2xl">
        <p>
          Consultations are currently only available on{" "}
          <span className="font-bold">Saturdays,</span>
          and some Sundays.
        </p>
        <br />
        <p>
          Due to limited availability and to support as many individuals as
          possible who are on wait lists,{" "}
          <span className="font-bold">
            consultations are offered in place of block therapy.
          </span>
        </p>
        <br />
        <p>
          Currently, we are only able to work with{" "}
          <span className="font-bold">private and self-managed </span>NDIS
          clients at this time.
        </p>
      </div>
      <div className="border-t border-[#a3a185] my-6" />
      <ContactForm />
    </section>
  );
};

export default Contact;
