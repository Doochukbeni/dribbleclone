import Link from "next/link";

import FooterColumn from "@/components/FooterColumn";
import { footerLinks } from "@/constants";

const Footer = () => {
  return (
    <footer className="border-t border-zinc-300 w-full py-10 bg-zinc-50">
      <nav className="container flex flex-col gap-12 w-full justify-start">
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
          <FooterColumn
            title={footerLinks[0].title}
            link={footerLinks[0].links}
          />

          <div className="flex-1 flex flex-col gap-4">
            <FooterColumn
              title={footerLinks[1].title}
              link={footerLinks[1].links}
            />
            <FooterColumn
              title={footerLinks[2].title}
              link={footerLinks[2].links}
            />
          </div>
          <FooterColumn
            title={footerLinks[3].title}
            link={footerLinks[3].links}
          />
          <div className="flex-1 flex flex-col gap-4">
            <FooterColumn
              title={footerLinks[4].title}
              link={footerLinks[4].links}
            />
            <FooterColumn
              title={footerLinks[5].title}
              link={footerLinks[5].links}
            />
          </div>
          <FooterColumn
            title={footerLinks[6].title}
            link={footerLinks[6].links}
          />
        </div>

        <div className="flex items-center justify-between">
          <p>@ 2024 Dribble. All rights reserved</p>
          <p className="text-gray">
            <span className="text-black font-semibold mr-2">10,257</span>
            projects submitted
          </p>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
