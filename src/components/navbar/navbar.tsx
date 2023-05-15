import { useState } from "react";
import Logo from "../logo/logo";
import { motion } from "framer-motion";
import { Animation } from "../../config/animationConfig";

interface NavItem {
  name: string;
  id: string;
}

interface INavItem {
  showNav: boolean;
  setShownav: React.Dispatch<React.SetStateAction<boolean>>;
}

const navItems: NavItem[] = [
  { name: "SKILLS", id: "skills" },
  { name: "CONTACT", id: "contact" },
  { name: "ABOUT ME", id: "about" },
];

function NavBar() {
  const [showSideNav, toggleNav] = useState<boolean>(false);
  return (
    <div className="flex flex-row justify-between items-center h-[70px] text-tertiary pagePadding">
      <Logo />

      <div>
        <ul className="sm:flex sm:space-x-5 hidden">
          {navItems.map((e) => {
            return (
              <motion.li
                whileHover={{
                  scale: "1.2",
                }}
                initial={{ x: "100vw" }}
                animate={{ x: 0 }}
                transition={{ delay: Animation.delay }}
              >
                <motion.a
                  transition={{
                    delay: 0.6,
                  }}
                  href={`#${e.id}`}
                  className="navItem"
                >
                  {e.name}
                </motion.a>
              </motion.li>
            );
          })}
        </ul>
      </div>

      <div className="sm:hidden" onClick={() => toggleNav((s) => !s)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 9h16.5m-16.5 6.75h16.5"
          />
        </svg>
      </div>

      <SideNavigation showNav={showSideNav} setShownav={toggleNav} />
    </div>
  );
}

function SideNavigation({ showNav, setShownav }: INavItem) {
  return (
    <div
      className={`h-screen bg-secondary fixed top-0 left-0 z-10 w-48 transition-all ease-out duration-[1500] ${
        showNav ? "sm:invisible visible" : "invisible"
      }`}
    >
      <div className="mt-5">
        <Logo />
      </div>
      <ul className="flex flex-col space-y-5 px-5 pt-8">
        {navItems.map((e) => {
          return (
            <li>
              <motion.a
                whileTap={{
                  scale: 1.3,
                }}
                transition={{ type: "spring", stiffness: 300 }}
                href={`#${e.id}`}
                className="navItem"
                onClick={() => {
                  if (showNav) {
                    setShownav(false);
                  }
                }}
              >
                {e.name}
              </motion.a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default NavBar;
