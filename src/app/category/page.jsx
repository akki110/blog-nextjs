import BlogList from "@/components/ui/BlogList";
import CategoryCard from "@/components/ui/CategoryCard";
import Header from "@/components/ui/Header";
import {
  BrainCircuit,
  Building2,
  ChartNoAxesCombined,
  Rocket,
} from "lucide-react";
import Link from "next/link";

const Category = () => {
  const blogList = [
    {
      category: "Business",
      title: "Design trips for designers that cover everything you need",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
      image: "/images/image.png",
    },
    {
      category: "Business",
      title: "Design trips for designers that cover everything you need",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
      image: "/images/image.png",
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

  const tags = [
    {
      name: "Business",
      link: "/category/business",
    },
    {
      name: "Startups",
      link: "/category/startups",
    },
    {
      name: "Economy",
      link: "/category/economy",
    },
    {
      name: "Technology",
      link: "/category/technology",
    },
  ];
  return (
    <>
      <Header
        title="Business"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
        isBreadCrumb={true}
      />

      {/* Category Blog List */}
      <div className="w-full flex justify-center items-start py-8 md:py-16">
        <div className="w-11/12 flex flex-col md:flex-row gap-5 md:gap-10">
          <div className="w-full md:w-9/12">
            {blogList.map((blog, i) => (
              <BlogList key={i} {...blog} />
            ))}
          </div>
          <div className="w-full md:w-3/12">
            <h3 className="font-bold text-surface dark:text-white text-2xl mb-5">
              Categories
            </h3>
            {categoryList.map((category, i) => (
              <CategoryCard key={i} {...category} isCategoryPage={true} />
            ))}

            {/* Tags */}
            <h3 className="font-bold text-surface dark:text-white text-2xl mb-5">
              All Tags
            </h3>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, i) => (
                <Link
                  href={tag.link}
                  key={i}
                  className="text-[14px] text-surface dark:text-white border border-surface dark:border-white/20 px-7 py-2 rounded-full"
                >
                  {tag.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
