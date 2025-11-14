import Link from "next/link";

export default function Logo() {
  return (
    <h1 className="text-3xl font-extrabold tracking-widest md:mb-6 text-center md:text-left">
      <Link href="/">HARKA</Link>
    </h1>
  );
}
