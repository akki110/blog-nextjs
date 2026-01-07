import Newsletter from "@/components/ui/Newsletter";
import Image from "next/image";

const About = () => {
  const aboutdata = [
    {
      title: "12+",
      description: "Blog Published",
    },
    {
      title: "12+",
      description: "Blog Published",
    },
    {
      title: "12+",
      description: "Blog Published",
    },
  ];

  const missionandvision = [
    {
      title: "Our Mission",
      description:
        "Creating valuable content for creatives all around the world",
      detail:
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    },
    {
      title: "Our Vision",
      description: "A platform that empowers individuals to improve",
      detail:
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    },
  ];

  const teamandblog = [
    {
      heading: "Our team of creatives",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      detail:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      image: "/images/about-team.png",
    },
    {
      heading: "Why we started this Blog",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      detail:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      image: "/images/about-blog.png",
    },
  ];

  return (
    <>
      <div className="w-full h-full flex flex-col justify-center items-center py-8 md:py-16">
        {/* About Us */}
        <div className="w-full md:w-11/12 flex flex-col md:flex-row justify-center items-start gap-5 md:gap-10">
          <div className="w-full md:w-1/2 flex flex-col gap-3 items-start p-5">
            <h5 className="text-surface dark:text-white text-sm md:text-md font-medium tracking-wider uppercase">
              About Us
            </h5>
            <h2 className="text-surface dark:text-white text-xl md:text-3xl font-bold tracking-wider w-full md:w-7/12">
              We are a team of content writers who share their learnings
            </h2>
          </div>
          <div className="w-full md:w-1/2 p-5">
            <p className="text-surface dark:text-white text-sm md:text-md font-medium tracking-wider w-full md:w-8/12">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum
              laudantium adipisci similique earum repellat pariatur assumenda
              sequi, dolorum ullam veniam.
            </p>
          </div>
        </div>

        {/* About Overview */}
        <div className="w-full md:w-11/12 flex flex-col md:flex-row justify-center items-center relative">
          <div
            style={{ backgroundImage: "url('/images/about-image.png')" }}
            className="w-full h-[400px] bg-cover bg-center bg-no-repeat"
          ></div>
          <div className="flex flex-row gap-3 items-start px-10 py-5 bg-flame absolute bottom-5 left-5 md:bottom-10 md:left-25">
            {aboutdata.map((item, i) => (
              <div key={i}>
                <h3 className="text-surface dark:text-white text-xl md:text-4xl font-bold tracking-wider uppercase">
                  {item.title}
                </h3>
                <p className="text-surface dark:text-white text-sm md:text-md font-medium tracking-wider">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* Mission and Vision */}
        <div className="w-full md:w-11/12 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 bg-purple/10 px-5 md:px-12 py-10 md:py-20">
          {missionandvision.map((item, i) => (
            <div className="flex flex-col gap-4" key={i}>
              <h5 className="text-surface dark:text-white text-sm md:text-md font-medium tracking-wider uppercase">
                {item.title}
              </h5>
              <h2 className="text-surface dark:text-white text-xl md:text-3xl font-bold tracking-wider w-full md:w-10/12">
                {item.description}
              </h2>
              <p className="text-gray-500 dark:text-white text-[12px] md:text-[14px] font-normal">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
        {/* Team and Blog */}
        <div className="w-full md:w-11/12 flex flex-col gap-5 md:gap-10 py-10 md:py-20">
          {teamandblog.map((item, i) => (
            <div
              className={`w-full flex flex-col 
      ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}
      justify-center items-center gap-5 md:gap-10`}
              key={i}
            >
              <div className="p-5 w-full flex flex-col justify-center gap-5">
                <h3 className="text-surface dark:text-white text-xl md:text-3xl font-bold tracking-wider w-full md:w-10/12">
                  {item.heading}
                </h3>
                <h5 className="text-surface dark:text-white text-sm md:text-2xl font-medium tracking-wider">
                  {item.description}
                </h5>
                <p className="text-gray-500 dark:text-white text-[12px] md:text-[14px] font-normal">
                  {item.detail}
                </p>
              </div>
              <div className="p-5 w-full">
                <Image
                  src={item.image}
                  alt="image"
                  className="w-full h-[400px] object-cover"
                  width={400}
                  height={400}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <Newsletter />
      </div>
    </>
  );
};

export default About;
