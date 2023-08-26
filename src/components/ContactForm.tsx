import { useForm, ValidationError } from "@formspree/react";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("moqodnby");
  if (state.succeeded) {
    return (
      <p className="font-bold">
        Thank you for your enquiry, I will get back to you as soon as possible!
      </p>
    );
  }
  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <label htmlFor="name" className="block mb-2 font-semibold">
        Name
      </label>
      <input
        id="name"
        type="text"
        name="name"
        placeholder="Jane Smith"
        className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
      <label htmlFor="email" className="block mb-2 font-semibold">
        Email Address
      </label>
      <input
        id="email"
        type="email"
        name="email"
        placeholder="abc@example.com"
        className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
      <label htmlFor="timezone" className="block mb-2 font-semibold">
        Timezone
      </label>
      <input
        id="timezone"
        type="text"
        name="timezone"
        placeholder="e.g. Melbourne, Australia"
        className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
      <ValidationError prefix="Name" field="name" errors={state.errors} />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <ValidationError
        prefix="Timezone"
        field="timezone"
        errors={state.errors}
      />
      <textarea
        id="message"
        name="message"
        placeholder="Reason for seeking an OT Health Coach consultation."
        className="w-full h-32 px-4 py-2 mb-4 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button
        type="submit"
        disabled={state.submitting}
        className="w-full px-4 py-2 font-semibold text-white bg-[#a3a185]/90 rounded-md hover:bg-[#a3a185] focus:outline-none focus:ring-2 focus:ring-white"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
