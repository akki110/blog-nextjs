"use client";

import BlogList from "@/components/ui/BlogList";
import CategoryCard from "@/components/ui/CategoryCard";
import Hero from "@/components/ui/Hero";
import Newsletter from "@/components/ui/Newsletter";
import ReusableLink from "@/components/ui/ReusableLink";
import useEmblaCarousel from "embla-carousel-react";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  BrainCircuit,
  Building2,
  ChartNoAxesCombined,
  ChevronRight,
  Rocket,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  // Hooks
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  //  Functions
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

  const testimonial = [
    {
      name: "John Doe",
      city: "New York, USA",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Psum dolor sit amet, consectetur adipiscing elit.",
      image: "/images/image.png",
    },
    {
      name: "John Doe",
      city: "New York, USA",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Psum dolor sit amet, consectetur adipiscing elit.",
      image: "/images/image.png",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <Hero />
      {/* All Posts */}
      <div className="w-full h-full flex justify-center items-center py-8 md:py-16">
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

      {/* About Us */}
      <div className="w-full h-full flex justify-center items-center py-8 md:py-16">
        <div className="w-full md:w-11/12 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 bg-purple/10 px-5 md:px-12 py-10 md:py-20">
          <div className="flex flex-col gap-4">
            <h5 className="text-surface dark:text-white text-sm md:text-md font-medium tracking-wider uppercase">
              About Us
            </h5>
            <h2 className="text-surface dark:text-white text-xl md:text-3xl font-bold tracking-wider w-full md:w-9/12">
              We are a community of content writers who share their learnings
            </h2>
            <p className="text-gray-500 dark:text-white text-[12px] md:text-[14px] font-normal">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quod. orem ipsum dolor sit amet consectetur adipisicing elit.
              Quisquam, quod.
            </p>
            <Link
              href={"/about"}
              className="text-purple font-medium tracking-wider flex items-center gap-2"
            >
              Read More <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="flex flex-col gap-4">
            <h5 className="text-surface dark:text-white text-sm md:text-md font-medium tracking-wider uppercase">
              Our Mission
            </h5>
            <h2 className="text-surface dark:text-white text-md md:text-2xl font-bold tracking-wider w-full md:w-10/12">
              Creating valuable content for creatives all around the world
            </h2>
            <p className="text-gray-500 dark:text-white text-[12px] md:text-[14px] font-normal w-full md:w-10/12">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quod. orem ipsum dolor sit amet consectetur adipisicing elit.
              Quisquam, quod ipsum dolor sit amet consectetur adipisicing elit.
              Quisquam, quod.
            </p>
          </div>
        </div>
      </div>

      {/* Category List */}
      <div className="w-full h-full flex justify-center items-center py-8 md:py-16">
        <div className="w-full md:w-11/12 px-5 md:px-0 flex flex-col items-center gap-5 md:gap-10">
          <h2 className="text-surface dark:text-white text-center text-md md:text-2xl font-bold tracking-wider w-full md:w-10/12">
            Choose Categories
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

      {/* Out Story */}
      <div className="w-full h-full flex justify-center items-center py-8 md:py-16">
        <div className="w-full md:w-11/12 px-5 md:px-0 md:gap-10 relative">
          <div
            className="w-9/12 h-[600px] bg-no-repeat bg-cover bg-center hidden md:block"
            style={{ backgroundImage: "url('/images/our-story.png')" }}
          ></div>
          <div className="w-full md:w-6/12 max-h-[450px] bg-white  md:absolute bottom-0 right-0 flex flex-col items-start justify-start gap-5 md:gap-8 p-2 md:p-16 ">
            <h5 className="text-surface dark:text-white text-sm md:text-md font-medium tracking-wider uppercase">
              Why We Started
            </h5>
            <h2 className="text-surface dark:text-white w-full md:w-10/12 text-xl md:text-3xl font-bold tracking-wider">
              It started out as a simple idea and evolved into our passion
            </h2>
            <p className="text-gray-500 dark:text-white text-[12px] md:text-[14px] font-normal">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quod. orem ipsum dolor sit amet consectetur adipisicing elit.
              Quisquam, quod ipsum dolor sit amet consectetur adipisicing elit.
              Quisquam, quod.
            </p>
            <ReusableLink
              href={"/about"}
              text={"Discover More"}
              isArrowRight={true}
            />
          </div>
        </div>
      </div>

      {/* Testimonial */}
      <div className="w-full h-full flex justify-center items-center py-8 md:py-16">
        <div className="w-full md:w-11/12 px-5 md:px-0 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 bg-flame/10">
          <div className="p-5 md:p-16 flex flex-col gap-5">
            <h5 className="text-surface dark:text-white text-sm md:text-md font-medium tracking-wider uppercase">
              Testimonials
            </h5>
            <h2 className="text-surface dark:text-white w-full md:w-10/12 text-xl md:text-3xl font-bold tracking-wider">
              What our clients say about us
            </h2>
            <p className="text-gray-500 dark:text-white text-[12px] md:text-[14px] font-normal">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quod. orem ipsum dolor sit amet consectetur adipisicing elit.
              Quisquam.
            </p>
          </div>
          <div className="p-5 md:p-16">
            <div ref={emblaRef} className="overflow-hidden relative">
              <div className="flex">
                {testimonial.map((item, i) => (
                  <div className="min-w-full">
                    <p className="w-full md:w-10/12 text-surface dark:text-white text-md md:text-xl font-bold">
                      {item.description}
                    </p>

                    <div className="flex justify-start items-center gap-2 mt-20">
                      <div className="relative w-12 h-12 overflow-hidden rounded-full">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex flex-col gap-1">
                        <h6 className="text-surface dark:text-white text-sm md:text-md font-medium tracking-wider uppercase">
                          {item.name}
                        </h6>
                        <p className="text-gray-500 dark:text-white text-[12px] md:text-[14px] font-normal">
                          {item.city}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="absolute right-0 bottom-0 flex gap-2">
                <button
                  className="w-10 h-10 rounded-full flex justify-center items-center bg-white hover:bg-space-indigo hover:text-white"
                  onClick={() => emblaApi?.scrollPrev()}
                >
                  <ArrowLeftIcon className="w-4 h-4" />
                </button>
                <button
                  className="w-10 h-10 rounded-full flex justify-center items-center bg-white hover:bg-space-indigo hover:text-white"
                  onClick={() => emblaApi?.scrollNext()}
                >
                  <ArrowRightIcon className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <Newsletter />

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
