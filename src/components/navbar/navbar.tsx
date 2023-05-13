import Logo from "../logo/logo";

function NavBar() {
  return (
    <div className="flex flex-row justify-between items-center h-[70px] text-tertiary px-16">
      <Logo />
      <div>
        <ul className="flex space-x-4">
          <li>
            <a href="#skills" className="navItem">
              Skills
            </a>
          </li>
          <li>
            <a href="#contact" className="navItem">
              Contact
            </a>
          </li>
          {/* <li>
            <a href="#projects" className="navItem">
              Projects
            </a>
          </li> */}
          <li>
            <a href="#about" className="navItem">
              ABOUT ME
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
