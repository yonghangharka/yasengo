import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <h1 className="text-3xl font-extrabold tracking-widest md:mb-6 text-center md:text-left">
      <Link href="/">
        <Image
          src="/logoo.svg"
          loading="eager"
          alt="Logo"
          width={140}
          height={50}
          className="cursor-pointer"
        />
      </Link>
    </h1>
  );
}
