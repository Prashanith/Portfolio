import { motion } from "framer-motion";
import { Animation } from "../../../config/animationConfig";
import React from "react";

function Intro() {
  const [isLoading, setIsLoading] = React.useState(false);

  async function download_resume(link: string) {
    setIsLoading(true);
    window.open(link, "_blank");
    setIsLoading(false);
  }

  return (
    <div className='pagePadding flex h-[calc(100vh-70px)] flex-row items-center justify-between'>
      <motion.div
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ delay: Animation.delay }}
      >
        <p className='boldText'>
          I am
          <br />
          <span className=' text-5xl font-medium text-tertiary sm:text-6xl md:text-8xl'>
            Prashanith
          </span>
          <br />
          <span>Software Developer</span>
        </p>
        {/* <p className="mt-10 text-lg font-medium">I call myself DEV007</p> */}
        <div className='mt-10 flex flex-wrap items-center justify-start gap-2'>
          <button
            className='outlinedBtn mr-6'
            onClick={() => download_resume("")}
          >
            {isLoading ? (
              <img
                src='/loader.svg'
                height={20}
                width={20}
                className=' object-contain'
              />
            ) : (
              <p>RESUME</p>
            )}
          </button>
          <button
            className='containedBtn mr-6'
            onClick={() => download_resume("")}
          >
            {isLoading ? (
              <img
                src='/loader.svg'
                height={20}
                width={20}
                className=' object-contain'
              />
            ) : (
              <p>BUY ME A COFFEE</p>
            )}
          </button>
        </div>
      </motion.div>
      <motion.img
        initial={{ x: "100vw" }}
        animate={{ x: 0 }}
        transition={{ delay: Animation.delay }}
        src='/intro.svg'
        className='hidden w-1/2 md:block'
      />
    </div>
  );
}

export default Intro;
