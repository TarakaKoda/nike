import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";

const Nav = () => {
  return (
    <header className="padding-x absolute z-10 w-full py-8">
      <nav className="max-container flex items-center justify-between">
        <a href="/">
          <img src={headerLogo} alt="logo" width={130} height={29} />
        </a>
        <ul className="flex flex-1 items-center justify-center gap-16 max-md:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              {" "}
              <a
                className="font-montserrat leading-normal text-slate-gray md:text-sm lg:text-lg"
                href={item.href}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className=" hidden max-md:block">
          <img src={hamburger} alt="humburger" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
