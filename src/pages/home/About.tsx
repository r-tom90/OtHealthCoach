import { profile } from "../../assets";
import { education } from "../../constants";

const About = () => {
  return (
    <section
      id="about"
      className="bg-[#a3a185] h-full lg:h-screen text-white flex flex-col lg:flex-row py-8 px-4 sm:px-8 justify-center items-center"
    >
      <div className="lg:w-3/4 w-full mt-12">
        <h2 className="text-2xl xs:text-4xl md:text-5xl font-architects-daughter">
          Your OT Health Coach
        </h2>
        <h3 className="font-semibold text-base xs:text-xl sm:text-2xl md:text-3xl font-[poppins] italic my-4">
          Steanne "Amya" Mackay
        </h3>
        <p className="text-xs md:text-sm lg:text-base mb-8 md:mr-4 mr-0 font-light tracking-wider">
          Passionate about all things to do with physical health and fitness,
          the mind and trauma, and how the mind, body, and soul come together,
          Amya has pursued a path that encompasses all of these things.
          <br />
          <br />
          She has worked with people from all walks of life; children, new
          mothers, young adults, the elderly, and in a variety of settings
          including physical rehabilitation units, neurological rehabilitation
          units, home modifications, perinatal infant and inpatient units
          (mental health), and in schools and kindergartens.
          <br />
          <br />
          Before a hiatus to Europe in 2022, Amya ran her own paediatric mobile
          practice, servicing families within the south eastern suburbs of
          Melbourne. She now also coaches women remotely through their
          nutrition, health challenges (physical, emotional and trauma-related),
          and fitness journeys.
          <br />
          <br />
          Amya's work with her clients is backed by 50+ years of science-backed
          nutrition from her studies with HMI Nutrition School, experience and
          training as a Children & Family Occupational Therapist/Trauma Play
          Therapist, and Strength and Conditioning coaching.
          <br />
          <br />
          With her wealth of knowledge and training, professional and lived
          experience, and true passion in supporting individuals of all ages to
          live their most meaningful and joy-filled lives, Amya has expanded her
          work internationally; with individuals and families to support their
          children. She supports her clients through any challenges that stand
          in the way between where they are now, and where they want to be.
        </p>
      </div>

      <section className="flex flex-col text-sm md:text-base items-center mt-0 md:mt-12">
        <img
          src={profile}
          alt="Image Placeholder"
          className="rounded-lg"
          height={300}
          width={300}
        />
        <div className="flex flex-col italic mt-4 ml-0">
          {education.map(({ degree, school, year }, index) => (
            <div key={index}>
              <p className="font-bold ">{degree}</p>
              <p className="">
                {school} {year}
              </p>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default About;
