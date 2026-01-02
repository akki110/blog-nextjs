"use client";

import BlogList from "@/components/ui/BlogList";
import CategoryCard from "@/components/ui/CategoryCard";
import Hero from "@/components/ui/Hero";
import ReusableLink from "@/components/ui/ReusableLink";
import { Building2, Rocket } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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

const allPost = [
  {
    author: "Aksh",
    date: "January, 2, 2026",
    link: "/",
    title: "Design trips for designers that cover everything you need",
  },
  {
    author: "Aksh",
    date: "January, 2, 2026",
    link: "/",
    title: "Design trips for designers that cover everything you need",
  },
  {
    author: "Aksh",
    date: "January, 2, 2026",
    link: "/",
    title: "Design trips for designers that cover everything you need",
  },
  {
    author: "Aksh",
    date: "January, 2, 2026",
    link: "/",
    title: "Design trips for designers that cover everything you need",
  },
];

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <Hero />
      {/* All Posts */}
      <div className="w-full h-full flex justify-center items-center py-16">
        <div className="w-full md:w-11/12 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10">
          {/* Left */}
          <div className="px-5 md:px-0">
            <h2 className="font-bold text-surface dark:text-white text-2xl mb-5">
              Featured Post
            </h2>
            <div className="p-4 border border-gray-100 dark:border-white/20 flex flex-col gap-2">
              <Image
                src="/images/image.png"
                alt="image"
                className="w-full h-[400px] object-cover"
                width={500}
                height={500}
              />
              <p className="text-black/80 dark:text-white text-[14px] md:text-md font-medium tracking-wider">
                By <span className="text-purple">Akshar Patel</span> |{" "}
                {new Date().toLocaleString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
              <h2 className="font-bold text-surface dark:text-white text-xl">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam,
                quod.
              </h2>
              <p className="text-[12px] text-gray-500 dark:text-white">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio
                veniam dignissimos magnam nesciunt velit eos obcaecati, error
                officiis porro maiores?
              </p>
              <ReusableLink
                href={"/blog"}
                text={"Read More"}
                isArrowRight={true}
              />
            </div>
          </div>
          {/* Right */}
          <div className="px-5 md:px-0">
            <div className="flex justify-between items-center mb-5">
              <h2 className="font-bold text-surface dark:text-white text-2xl">
                All Posts
              </h2>
              <Link href={"/"}>
                <p className="text-[14px] text-purple">View All</p>
              </Link>
            </div>
            {/* All Posts */}
            {allPost.map((post, i) => (
              <Link
                href={post.link}
                className="flex flex-col items-start gap-1 hover:bg-flame/20 px-0 md:px-4 py-5 md:py-8"
                key={i}
              >
                <p className="text-black/80 dark:text-white text-[10px] md:text-[14px] md:text-md font-normal tracking-wider">
                  By <span className="text-purple">{post.author}</span> |{" "}
                  {post.date}
                </p>
                <h4 className="text-surface dark:text-white text-xl md:text-2xl font-bold tracking-wider min-w-11/12">
                  {post.title}
                </h4>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* <h1>Home</h1>
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
      </div> */}
    </>
  );
};

export default Home;
