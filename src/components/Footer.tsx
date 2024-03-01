import Link from "next/link";

import FooterColumn from "@/components/FooterColumn";

const Footer = () => {
  return (
    <footer className="border-t border-zinc-300 w-full">
      <nav className="container max-w-7xl flex flex-col gap-12 w-full justify-start">
        <div className="flex items-start flex-col">
          <Link href={"/"} className="text-2xl text-teal-700 font-semibold">
            Dri
            <span className="text-2xl text-sky-700 font-semibold">bble</span>
          </Link>
          <p className="text-start text-sm font-normal mt-5 max-w-xs">
            Dribble is the world's leading community for creatives to share,
            grow and get hired.
          </p>
        </div>
        <div className="flex flex-wrap gap-12">
          <FooterColumn />
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
