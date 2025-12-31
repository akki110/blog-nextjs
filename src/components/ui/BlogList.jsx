import Image from "next/image";
import Link from "next/link";

const BlogList = ({ image, title, description, category, link = "" }) => {
  return (
    <Link href={link} className="group">
      <div className="w-full bg-transparent flex flex-col md:flex-row items-start md:items-center gap-5 mb-5 group-hover:bg-gray-50 dark:group-hover:bg-gray-800 transition-all duration-300">
        <div className="w-full md:w-4/12 h-72 relative">
          <Image src={image} alt="hero" fill priority />
        </div>
        <div className="w-full md:w-8/12 flex flex-col gap-3">
          <h5 className="text-purple uppercase font-semibold text-md tracking-widest">
            {category}
          </h5>
          <h2 className="text-4xl font-bold text-surface dark:text-white w-full md:w-8/12">
            {title}
          </h2>
          <p className="text-gray-400 dark:text-white w-full md:w-8/12">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default BlogList;
