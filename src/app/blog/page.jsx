import BlogList from "@/components/ui/BlogList";
import CategoryCard from "@/components/ui/CategoryCard";
import Newsletter from "@/components/ui/Newsletter";
import ReusableLink from "@/components/ui/ReusableLink";
import {
  BrainCircuit,
  Building2,
  ChartNoAxesCombined,
  Rocket,
} from "lucide-react";
import Image from "next/image";

const Blog = () => {
  const blogList = [
    {
      category: "Startups",
      title: "Design trips for designers that cover everything you need",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
      image: "/images/image.png",
      link: "/blog/1",
    },
    {
      category: "Startups",
      title: "Design trips for designers that cover everything you need",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
      image: "/images/image.png",
      link: "/blog/2",
    },
  ];

  const categoryList = [
    {
      title: "Business",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
      icon: <Building2 />,
    },
    {
      title: "Startups",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
      icon: <Rocket />,
    },
    {
      title: "Economy",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
      icon: <ChartNoAxesCombined />,
    },
    {
      title: "Technology",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
      icon: <BrainCircuit />,
    },
  ];
  return (
    <>
      {/* Header */}
      <div className="w-full h-full flex justify-center items-center bg-purple/10">
        <div className="w-full md:w-11/12 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 px-5 md:px-12 py-10 md:py-20">
          <div className="flex flex-col items-start justify-center pt-5 md:pt-0 gap-2 md:gap-5">
            <h5 className="text-surface dark:text-white text-sm md:text-md font-medium tracking-wider uppercase">
              Posted on startup
            </h5>
            <h1 className="text-surface dark:text-white text-2xl md:text-4xl font-bold max-w-2xl">
              Step by step guide to start your startup business
            </h1>
            <p className="text-surface dark:text-white text-sm md:text-md font-medium tracking-wider">
              By <span className="text-flame">Akshar Patel</span> |{" "}
              {new Date().toLocaleString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
            <p className="text-surface dark:text-white text-sm md:text-md font-medium tracking-wider max-w-2xl">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum
              laudantium adipisci similique earum repellat pariatur assumenda
              sequi, dolorum ullam veniam.
            </p>
            <ReusableLink
              href={"/blog"}
              text={"Read More"}
              isArrowRight={true}
            />
          </div>
          <div className="">
            <Image
              src="/images/image.png"
              alt="image"
              className="w-full h-[400px] object-cover"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
      {/* All Posts */}
      <div className="w-full h-full flex justify-center items-center py-8 md:py-16">
        <div className="w-full md:w-11/12 flex flex-col justify-center items-start gap-5 md:gap-8 px-5 md:px-0">
          <h3 className="text-surface dark:text-white text-xl md:text-2xl font-bold tracking-wider">
            All Posts
          </h3>
          <hr className="w-full border border-gray-100 dark:border-white/20" />
          <div className="w-full">
            {blogList.map((data, i) => (
              <BlogList {...data} key={i} />
            ))}
          </div>
        </div>
      </div>

      {/* Category */}
      <div className="w-full h-full flex justify-center items-center py-8 md:py-16">
        <div className="w-full md:w-11/12 px-5 md:px-0 flex flex-col items-center gap-5 md:gap-10">
          <h2 className="text-surface dark:text-white text-center text-md md:text-2xl font-bold tracking-wider w-full md:w-10/12">
            All Categories
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 md:gap-10">
            {categoryList.map((category) => (
              <CategoryCard
                key={category.title}
                title={category.title}
                description={category.description}
                icon={category.icon}
                isCategoryPage={false}
              />
            ))}
          </div>
        </div>
      </div>
      {/* Newsletter */}
      <Newsletter />
    </>
  );
};

export default Blog;
