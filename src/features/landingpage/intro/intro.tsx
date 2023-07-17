import { motion } from "framer-motion";
import { storage } from "../../../firebase";
import { Animation } from "../../../config/animationConfig";
import React from "react";
import { getDownloadURL, ref } from "firebase/storage";

function Intro() {
  const [isLoading, setIsLoading] = React.useState(false);

  async function download_resume() {
    setIsLoading(true);
    getDownloadURL(ref(storage, "/prashanith_resume_final.pdf"))
      .then((url) => {
        window.open(url, "_blank");
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error);
      });
  }

  return (
    <div className="pagePadding flex h-[calc(100vh-70px)] flex-row items-center justify-between">
      <motion.div
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ delay: Animation.delay }}
      >
        <p className="boldText">
          I am
          <br />
          <span className=" text-5xl font-medium text-tertiary sm:text-6xl md:text-8xl">
            Prashanith
          </span>
          <br />
          <span>Software Developer</span>
        </p>
        {/* <p className="mt-10 text-lg font-medium">I call myself DEV007</p> */}
        <div className="mt-10">
          <button
            className="outlinedBtn mr-6"
            onClick={() => download_resume()}
          >
            {isLoading ? (
              <img
                src="/loader.svg"
                height={20}
                width={20}
                className=" object-contain"
              />
            ) : (
              <p>RESUME</p>
            )}
          </button>
          {/* <button className="outlinedBtn">CONTACT ME</button> */}
        </div>
      </motion.div>
      <motion.img
        initial={{ x: "100vw" }}
        animate={{ x: 0 }}
        transition={{ delay: Animation.delay }}
        src="/intro.svg"
        className="hidden w-1/2 md:block"
      />
    </div>
  );
}

export default Intro;
