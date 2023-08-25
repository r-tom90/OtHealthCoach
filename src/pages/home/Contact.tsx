import { bg3 } from "../../assets";
import { ContactForm } from "../../components";

const Contact = () => {
  return (
    // <section id="contact" className="bg-[#a3a185] h-full text-white">
    <section
      id="contact"
      className="h-full sm:h-screen text-[#644f44] bg-cover bg-center md:bg-bottom px-12 py-20"
      style={{ backgroundImage: `url(${bg3})` }}
    >
      <h2 className="font-bold text-3xl italic">Get In Touch</h2>
      <p className="text-xs md:text-sm lg:text-base">
        Consultations are currently only available on{" "}
        <span className="font-bold">Saturdays,</span>
        and some Sundays.
        <br />
        Due to limited availability and to support as many individuals as
        possible who are on wait lists,{" "}
        <span className="font-bold">
          consultations are offered in place of block therapy.
        </span>
        <br />
        Currently, we are only able to work with{" "}
        <span className="font-bold">private and self-managed </span>NDIS clients
        at this time.
      </p>
      <div className="border-t border-[#a3a185] my-4" />
      <ContactForm />
    </section>
  );
};

export default Contact;
