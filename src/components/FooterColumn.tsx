import Link from "next/link";

interface FooterColumnProps {
  title: string;
  link: string[];
}

const FooterColumn = ({ title, link }: FooterColumnProps) => {
  return (
    <main className="footer_column">
      <h4 className="font-semibold">{title} </h4>
      <ul className="flex flex-col gap-2 font-normal">
        {link.map((link) => (
          <Link href={"/"} key={link}>
            {link}
          </Link>
        ))}
      </ul>
    </main>
  );
};

export default FooterColumn;
