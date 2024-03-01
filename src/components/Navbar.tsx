import Link from "next/link";

import { NavLinks } from "@/constants";
import AuthProvider from "@/components/AuthProvider";

const Navbar = () => {
  const session = null;
  return (
    <header className="border-b w-full h-fit border-gray-300 p-3">
      <nav className="container max-w-7xl  flex justify-between items-center">
        <div className="flex-1 flex  items-center gap-10">
          <Link href={"/"} className="text-2xl text-zinc-500 font-semibold">
            Dri
            <span className="text-2xl text-zinc-700 font-semibold">bble</span>
          </Link>

          <ul className="xl:flex hidden text-sm gap-7">
            {NavLinks.map((link) => (
              <Link href={link.href} key={link.key} className="">
                {link.text}
              </Link>
            ))}
          </ul>
        </div>

        <div className="items-center gap-4 ">
          {session ? (
            <div className="flex items-center gap-3">
              Userphoto
              <Link href={"/create-project"}>Share Your Work</Link>
            </div>
          ) : (
            <AuthProvider />
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
