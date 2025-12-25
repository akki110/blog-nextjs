import Link from "next/link";
import { ArrowRight } from "lucide-react";

const ReusableLink = ({ href, text, isArrowRight = false }) => {
  return (
    <Link
      href={href}
      className="text-surface font-semibold bg-flame px-4 py-2.5 inline-flex items-center justify-center w-fit"
    >
      {text}
      {isArrowRight && <ArrowRight className="ml-1 w-4 h-4" />}
    </Link>
  );
};

export default ReusableLink;
