import { bg1 } from "../../assets";

const Header = () => {
  return (
    <section
      id="home"
      className="h-screen text-black bg-cover bg-center md:bg-bottom"
      style={{ backgroundImage: `url(${bg1})` }}
    >
      <div className="flex flex-col justify-center items-center px-4 sm:px-8">
        <div className="mt-[264px] text-center justify-center flex flex-col items-center text-[#644f44]">
          <h1 className="text-4xl md:text-6xl font-bold">OT Health Coach</h1>
          <p className="text-sm md:text-2xl mt-8">
            Children's Occupational Therapist, Play Therapist, Health Coach
          </p>

          <p className="text-sm md:text-lg w-full md:w-1/2 mt-4">
            A holistic approach to supporting children and families to live
            their healthiest and most joy-filled lives. We focus on nutrition,
            physical development, emotional and mental well-being, and
            harmonious relationships.
          </p>

          {/* <p>*FULL WEBSITE COMING SOON*</p> */}
        </div>
      </div>
    </section>
  );
};

export default Header;
