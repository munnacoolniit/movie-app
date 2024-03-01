import Link from "next/link";

const Header = () => {
  return (
    <header className="flex gap-8 py-4 px-5 bg-gray-800 items-center">
      <Link href="/" className="text-xl font-medium text-white">
        Movie Search App
      </Link>
    </header>
  );
};

export default Header;
