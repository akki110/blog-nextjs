"use client";

import BlogList from "@/components/ui/BlogList";
import CategoryCard from "@/components/ui/CategoryCard";
import ReusableLink from "@/components/ui/ReusableLink";
import { Building2, Rocket } from "lucide-react";

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
];

const blogList = [
  {
    category: "Startups",
    title: "Design trips for designers that cover everything you need",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    image: "/images/image.png",
  },
  {
    category: "Startups",
    title: "Design trips for designers that cover everything you need",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    image: "/images/image.png",
  },
];

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <ReusableLink href={"/blog"} text={"Read More"} isArrowRight={true} />
      <div className="w-11/12 mx-auto mt-5 flex flex-wrap gap-5 my-5">
        {categoryList.map((category) => (
          <CategoryCard
            key={category.title}
            title={category.title}
            description={category.description}
            icon={category.icon}
            isCategoryPage={false}
          />
        ))}
        <span className="w-full h-[0.1em] bg-gray-300"></span>

        {blogList.map((data, i) => (
          <BlogList {...data} key={i} />
        ))}
      </div>
    </>
  );
};

export default Home;
