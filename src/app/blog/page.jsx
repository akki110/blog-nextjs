import BlogList from "@/components/ui/BlogList";

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
  return (
    <div className="py-10 w-10/12 mx-auto">
      {blogList.map((data, i) => (
        <BlogList {...data} key={i} />
      ))}
    </div>
  );
};

export default Blog;
