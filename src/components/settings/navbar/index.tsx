import Link from "next/link";



export default function Navbar() {
  return (
    <div
      className="navbar-container"
    >
      <Link
        href={'/'}
      >
        home
      </Link>
      <Link
        href={'/about'}
      >
        about
      </Link>
      <Link
        href={'/projects'}
      >
        projects
      </Link>

      <Link
        href={'/blog'}
      >
        blog
      </Link>
      <Link
        href={'/techStack'}
      >
        techstack
      </Link>
    </div>
  )
}
