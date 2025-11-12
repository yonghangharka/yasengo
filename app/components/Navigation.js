import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="hidden md:flex flex-col md:space-y-2 text-sm text-center md:text-left">
      <Link href="#" className="hover:underline">
        OVERVIEW
      </Link>
      <Link href="#" className="hover:underline">
        ABOUT / CONTACT
      </Link>
    </nav>
  );
}
