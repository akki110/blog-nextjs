import Link from "next/link";
import { ChevronRight } from "@/lib/icons";

const ReusableLink = ({ href, text, isArrowRight = false }) => {
  return (
    <Link
      href={href}
      className="text-surface text-[14px] font-semibold bg-flame px-4 py-2.5 hover:bg-flame/80 transition-all ease-in-out inline-flex items-center justify-center w-fit"
    >
      {text}
      {isArrowRight && <ChevronRight className="ml-1 w-4 h-4" />}
    </Link>
  );
};

export default ReusableLink;
