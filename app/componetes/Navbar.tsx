import Link from "next/link";
const Navbar: React.FC = () => {
  interface routes {
    path: string;
  }
  const navItems: routes[] = [
    { path: "/" },
    { path: "about" },
    { path: "contact" },
  ];

  return (
    <nav className="relative">
      <ul className="py-3 text-center text-lg space-x-5 bg-gradient-to-l from-purple-600 to-orange-700 flex justify-center gap-6">
        {navItems.map((routes, index) => (
          <li key={index} className="relative">
            <Link
              className="hover:text-white py-2 px-3 rounded-md transition-transform duration-300 ease-in-out hover:scale-110"
              href={routes.path}
            >
              {routes.path === "/" ? "Home" : routes.path}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
