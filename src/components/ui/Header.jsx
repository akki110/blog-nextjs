const { ChevronRight } = require("lucide-react");
const { default: Link } = require("next/link");

const Header = ({ title, description, isBreadCrumb }) => {
  return (
    <>
      <div className="w-full h-64 bg-purple-50 flex flex-col justify-center items-center gap-5">
        <h2 className="font-bold text-4xl text-surface dark:text-white">
          {title}
        </h2>
        <p className="text-gray-500 text-sm dark:text-white">{description}</p>
        {isBreadCrumb && (
          <div className="w-full flex justify-center items-center gap-1">
            <Link href="/blog">Blog</Link>
            <span className="text-surface w-5 h-5 flex items-center justify-center text-sm dark:text-white">
              <ChevronRight />
            </span>
            <p>{title}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
