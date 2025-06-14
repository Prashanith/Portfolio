function Footer() {
  return (
    <footer
      id="footer"
      className="relative mt-16 flex flex-col items-center overflow-hidden bg-primary py-12 text-sm md:py-20"
    >
      <div className="container relative z-[1] m-auto px-6 md:px-12">
        <div className="m-auto md:w-10/12 lg:w-8/12 xl:w-6/12">
          <div className="flex flex-wrap items-center justify-between md:flex-nowrap">
            <div className="flex w-full justify-center space-x-12 text-gray-300 sm:w-7/12 md:justify-start">
              {/* Navigation */}
              <ul className="list-inside list-disc space-y-8">
                <li>
                  <a
                    href="#about"
                    className="text-white transition hover:text-sky-400"
                  >
                    About
                  </a>
                </li>

                <li>
                  <a
                    href="#contact"
                    className="text-white transition hover:text-sky-400"
                  >
                    Contact
                  </a>
                </li>
              </ul>

              {/* Icons */}
              <ul role="list" className="space-y-8">
                <li>
                  <a
                    href="https://github.com/Prashanith"
                    target="_blank"
                    className="flex items-center space-x-3 transition hover:text-sky-400"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="w-5"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                    </svg>
                    <span>Github</span>
                  </a>
                </li>

                {/* <li>
                  <a
                    href="#"
                    className="flex items-center space-x-3 hover:text-sky-400 transition"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="w-5"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
                    </svg>
                    <span>YouTube</span>
                  </a>
                </li> */}
                <li>
                  <a
                    href="https://www.linkedin.com/in/prashanith007/"
                    target="_blank"
                    className="flex items-center space-x-3 transition hover:text-sky-400"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="7.025 7.025 497.951 497.95"
                      id="linkedin"
                    >
                      <linearGradient
                        id="a"
                        x1="-974.482"
                        x2="-622.378"
                        y1="1306.773"
                        y2="1658.877"
                        gradientTransform="translate(1054.43 -1226.825)"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0" stopColor="#fff"></stop>
                        <stop offset="1" stopColor="#fff"></stop>
                      </linearGradient>
                      <path
                        fill="currentColor"
                        d="M256 7.025C118.494 7.025 7.025 118.494 7.025 256S118.494 504.975 256 504.975 504.976 393.506 504.976 256C504.975 118.494 393.504 7.025 256 7.025zm-66.427 369.343h-54.665V199.761h54.665v176.607zM161.98 176.633c-17.853 0-32.326-14.591-32.326-32.587 0-17.998 14.475-32.588 32.326-32.588s32.324 14.59 32.324 32.588c.001 17.997-14.472 32.587-32.324 32.587zm232.45 199.735h-54.4v-92.704c0-25.426-9.658-39.619-29.763-39.619-21.881 0-33.312 14.782-33.312 39.619v92.704h-52.43V199.761h52.43v23.786s15.771-29.173 53.219-29.173c37.449 0 64.257 22.866 64.257 70.169l-.001 111.825z"
                      ></path>
                    </svg>
                    <span>LinkedIn</span>
                  </a>
                </li>

                <li>
                  <a
                    href="https://medium.com/@prashanith007"
                    target="_blank"
                    className="flex items-center space-x-3 transition hover:text-sky-400"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="w-5"
                      viewBox="0 0 16 16"
                    >
                      <path d="M9.025 8c0 2.485-2.02 4.5-4.513 4.5A4.506 4.506 0 0 1 0 8c0-2.486 2.02-4.5 4.512-4.5A4.506 4.506 0 0 1 9.025 8zm4.95 0c0 2.34-1.01 4.236-2.256 4.236-1.246 0-2.256-1.897-2.256-4.236 0-2.34 1.01-4.236 2.256-4.236 1.246 0 2.256 1.897 2.256 4.236zM16 8c0 2.096-.355 3.795-.794 3.795-.438 0-.793-1.7-.793-3.795 0-2.096.355-3.795.794-3.795.438 0 .793 1.699.793 3.795z" />
                    </svg>
                    <span>Medium</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Footer Content */}
            <div className="m-auto mt-16  w-10/12 space-y-6 text-center sm:mt-auto sm:w-5/12 sm:text-left">
              <span className="block text-gray-300">
                Developer by passion. I use Arch BTW
              </span>

              <span className="block text-gray-300">
                B Prashanith &copy; {new Date().getFullYear().toString()}
                <br />
                All Right Reserved
              </span>

              <span className="block text-gray-300">
                Need help? We can work together
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
