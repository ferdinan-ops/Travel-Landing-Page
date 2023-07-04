import { Link } from "react-scroll";

export default function NavLink({ children, style, href, top }) {
  console.log({ href });
  return (
    <Link
      className={`cursor-pointer font-sans text-3xl xl:text-base ${style} ${top ? "xl:hover:text-primary" : "xl:hover:text-black"
        }`}
      to={href}
      smooth={true}
      duration={500}
      offset={-80}
      spy={true}
    >
      {children}
    </Link>
  );
}
