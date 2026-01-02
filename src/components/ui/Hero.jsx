import ReusableLink from "./ReusableLink";

const Hero = () => {
  return (
    <div
      className="w-full h-screen md:h-[95dvh] relative bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/hero-image.png')",
      }}
    >
      <div className="absolute flex items-center justify-center w-full h-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/50">
        <div className="w-11/12  h-full flex flex-col items-start justify-center pt-5 md:pt-0 gap-2 md:gap-5">
          <h6 className="text-white text-sm md:text-md font-medium tracking-wider uppercase">
            Posted on startup
          </h6>
          <h1 className="text-white text-4xl md:text-6xl leading-10 md:leading-18 font-bold max-w-2xl">
            Step by step guide to start your startup business
          </h1>
          <p className="text-white/80 text-sm md:text-md font-medium tracking-wider">
            By <span className="text-flame">Akshar Patel</span> |{" "}
            {new Date().toLocaleString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
          <p className="text-white/80 text-sm md:text-md font-medium tracking-wider max-w-2xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum
            laudantium adipisci similique earum repellat pariatur assumenda
            sequi, dolorum ullam veniam.
          </p>
          <ReusableLink href={"/blog"} text={"Read More"} isArrowRight={true} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
