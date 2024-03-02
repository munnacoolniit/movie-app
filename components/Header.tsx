import Link from "next/link";

const Header = () => {
  return (
    <header className="py-4 px-5 bg-gray-800 items-center">
      <div className="w-[1300px] max-w-full mx-auto px-4">
        <Link href="/" className="text-xl font-medium text-white">
          Movie Search App
        </Link>
      </div>
    </header>
  );
};

export default Header;
