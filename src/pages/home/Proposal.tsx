import { bg2 } from "../../assets";
import { points } from "../../constants";

const Proposal = () => {
  return (
    <section
      id="proposal"
      className="text-[#644f44] bg-cover bg-center md:bg-bottom 
      h-full md:h-screen flex flex-col py-20 px-4 sm:px-8"
      style={{ backgroundImage: `url(${bg2})` }}
    >
      <h2 className="font-bold text-xl sm:text-5xl">
        How We Can Work Together
      </h2>
      <div className="flex flex-col leading-tight">
        <p>
          Due to the remote and international nature of Amya's work, all
          consultations with her will be online. If you are seeking her support
          for your child, Amya will work with you, equipping you with
          strategies, tools and suggestions to improve your child's life, and
          that of your family.
        </p>
        <div className="flex flex-col">
          <ul className="font-bold">
            <li>{points[0].title}</li>
          </ul>
          <ul className="">
            {points[0].points.map((point, index) => (
              <li key={index} className="list-disc ml-7">
                {point}
              </li>
            ))}
          </ul>
          <ul className="font-bold">
            <li>{points[1].title}</li>
          </ul>
          <p>
            Nutritional, emotional and physical health guidance for a variety of
            challenges including:
          </p>
          <ul className="list-disc ml-7">
            {points[1].points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Proposal;
