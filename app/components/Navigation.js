import Link from "next/link";

export default function Navigation() {
  return (
    <nav className=" hidden md:flex flex-col md:space-y-2 text-sm text-center uppercase md:text-left">
      <Link href="/collection" className="hover:underline">
        Collection
      </Link>
      <Link href="/" className="hover:underline">
        ABOUT / CONTACT
      </Link>
    </nav>
  );
}
