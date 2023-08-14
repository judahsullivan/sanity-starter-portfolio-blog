import Link from "next/link";
import { resolveHref } from "@/lib/sanity.links";

interface NavbarProps {
  pageLinks: PageLinks[];
}

export default function Navbar(props: NavbarProps) {
  const { pageLinks } = props;
  console.log(pageLinks)
  return (
    <div
      className="navbar-container"
    >
      {pageLinks.map((link) => {
        const href = resolveHref(link._type)
        if (!href) {
          return null
        }
        return (
          <nav
            key={link._type}

          >
            <Link
              href={href}
              passHref

            >
              {link.title}
            </Link>
          </nav>
        )
      })}
      Navbar
    </div>
  )
}
