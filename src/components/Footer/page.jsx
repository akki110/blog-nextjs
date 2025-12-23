import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const links = [
    { name: "Home", link: "/" },
    { name: "Blog", link: "/blog" },
    { name: "About Us", link: "/about" },
    { name: "Contact Us", link: "/contact" },
    { name: "Privacy Policy", link: "/privacy-policy" },
  ];

  const socialLinks = [
    { name: "Facebook", icon: <Facebook />, link: "/" },
    { name: "Twitter", icon: <Twitter />, link: "/" },
    { name: "Instagram", icon: <Instagram />, link: "/" },
    { name: "Linkedin", icon: <Linkedin />, link: "/" },
  ];

  return (
    <footer className="bg-space-indigo text-white py-10">
      <div className="w-11/12 mx-auto">
        {/* Links */}
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold">MindSpill</div>
          <div className="flex items-center gap-5">
            {links.map((link) => (
              <Link key={link.name} href={link.link}>
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <div className="my-14 bg-white/10 h-56 flex items-center justify-between">
          <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-2 items-start">
              <h2 className="text-3xl font-bold max-w-xl">
                Subscribe to our news letter to get latest updates and news
              </h2>
            </div>
            <div className="flex items-center justify-end gap-2">
              <input
                className="border border-flame/60 px-4 py-3 w-96 focus:border-flame/60 focus:outline-none text-flame"
                type="email"
                placeholder="Enter your email"
              />
              <button className="bg-flame/90 text-black px-6 py-3 cursor-pointer border border-transparent hover:bg-flame/60 transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-2 text-start text-white/80">
            <p>© 2025 MindSpill. All rights reserved.</p>
            <p>Hello@mindspill.com +91 1234567890</p>
          </div>
          <div className="flex items-center gap-5">
            {socialLinks.map((link) => (
              <Link
                key={link.name}
                href={link.link}
                className="text-white/70 hover:text-flame"
              >
                {link.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
